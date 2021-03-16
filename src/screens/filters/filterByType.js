import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ScreenFilterWrapper from '../../components/screenFilterWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';
import {setSiteTypesFilter} from '../../store/actions/filters';
import routes from '../../navigation/routes';

const bgDefault = require('./images/type/bg-type-default.jpg');

const FilterByTypeScreen = (props) => {
    const {
        siteTypesData,
        filteredSiteTypesData,
        dispatchSetSiteTypesFilter,
        navigation
    } = props

    const [background, setBackground] = useState(bgDefault);
    const [siteTypes] = useState(siteTypesData)
    const [showButton, setShowButton] = useState(false)
    const [selectedSiteTypes, setSelectedSiteTypes] = useState(filteredSiteTypesData)

    const onListTileChange = (item) => {
        setBackground(item.background)
        setShowButton(true)

        if (selectedSiteTypes.includes(item.id)) {
            // remove from filter.
            const removed = selectedSiteTypes.filter((s) => s !== item.id)
            setSelectedSiteTypes(removed)
        } else {
            // add to filter.
            selectedSiteTypes.push(item.id)
            setSelectedSiteTypes(selectedSiteTypes)
        }
    }

    const onReset = () => {
        setSelectedSiteTypes([])
        setBackground(bgDefault)
    }

    const onSubmit = () => {
        dispatchSetSiteTypesFilter(selectedSiteTypes)
        navigation.navigate(routes.STACK_BOTTOM_TAB)
    }

    return (
        <ScreenFilterWrapper backgroundImage={background}
                             showButtons={showButton}
                             onResetFilter={() => onReset()}
                             onApplyFilter={onSubmit}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByTypeScreen);
