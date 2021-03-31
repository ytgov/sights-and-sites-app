import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

import ScreenFilterWrapper from '~components/screenFilterWrapper';
import {FilterHeader} from '~theme/layout';
import Title from '~components/filters/title';
import ListTileCheckbox from '~components/filters/listTile/listTileCheckbox';
import {resetFilters, setSiteTypesFilter} from '~store/actions/filters';
import routes from '~navigation/routes';
import {filterListing} from '~store/actions/listing';

const bgDefault = require('./images/type/bg-type-default.jpg');

const FilterByTypeScreen = (props) => {
    const {
        siteTypesData,
        filteredSiteTypesData,
        dispatchSetSiteTypesFilter,
        dispatchFilterListing,
        dispatchResetFilters,
        navigation
    } = props

    const [t] = useTranslation();
    const [background, setBackground] = useState(bgDefault);
    const [siteTypes] = useState(siteTypesData)
    const [showButton, setShowButton] = useState(false)
    const [selectedSiteTypes, setSelectedSiteTypes] = useState(filteredSiteTypesData)

    const onListTileChange = (item) => {
        setBackground(item.background)
        setShowButton(true)

        if (selectedSiteTypes.includes(item.id)) {
            // remove from filter.
            setSelectedSiteTypes(selectedSiteTypes.filter((s) => s !== item.id))
        } else {
            // add to filter.
            setSelectedSiteTypes([...selectedSiteTypes, item.id])
        }
    }

    const onReset = () => {
        setSelectedSiteTypes([])
        dispatchResetFilters()
        navigation.navigate(routes.SCREEN_LISTING)
    }

    const onSubmit = () => {
        dispatchSetSiteTypesFilter(selectedSiteTypes)
        dispatchFilterListing()
        navigation.navigate(routes.SCREEN_LISTING)
    }

    return (
        <ScreenFilterWrapper backgroundImage={background}
                             showButtons={showButton}
                             onResetFilter={() => onReset()}
                             onApplyFilter={onSubmit}>
            <FilterHeader>
                <Title title={t('filters.siteTypeTitle')} hasArrow={true} />
            </FilterHeader>
            {siteTypes.map((item, i) => {
                const checked = selectedSiteTypes.includes(item.id)
                return (
                    <ListTileCheckbox
                        key={i}
                        label={item.name}
                        checked={checked}
                        trailingIcon={item.icon}
                        onClick={() => onListTileChange(item)} />
                )
            })}

        </ScreenFilterWrapper>
    );
};

FilterByTypeScreen.propTypes = {
    siteTypes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired,
            background: PropTypes.node.isRequired
        })
    )
}

const mapStateToProps = (state) => {
    return {
        siteTypesData: state.siteTypesStore.siteTypes,
        filteredSiteTypesData: state.filtersStore.siteTypes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetSiteTypesFilter: (value) => dispatch(setSiteTypesFilter(value)),
        dispatchFilterListing: () => dispatch(filterListing()),
        dispatchResetFilters: () => dispatch(resetFilters())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByTypeScreen);
