import React, {useState} from 'react';
import {Text, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {resetFilters, setHighwaysFilter} from '~store/actions/filters';
import ScreenFilterWrapper from '~components/screenFilterWrapper';
import {FilterHeader} from '~theme/layout';
import Title from '~components/filters/title';
import ListTileCheckbox from '~components/filters/listTile/listTileCheckbox';

import styles from './filterByHighway.styles'
import routes from '~navigation/routes';
import {filterListing} from '~store/actions/listing';

const bgHighway = require('./images/highway/bg-highway.jpg');
const bgBadgeHighway = require('./images/highway/badge-highway.png');

const FilterByHighwayScreen = (props) => {
    const {
        highwaysData,
        filteredHighwaysData,
        dispatchSetHighwaysFilter,
        dispatchFilterListing,
        dispatchResetFilters,
        navigation
    } = props

    const [t] = useTranslation();
    const [showButton, setShowButton] = useState(false)
    const [highways] = useState(highwaysData)
    const [selectedHighways, setSelectedHighways] = useState(filteredHighwaysData)

    const onListTileChange = (item) => {
        setShowButton(true)

        if (selectedHighways.includes(item.id)) {
            // remove from filter.
            setSelectedHighways(selectedHighways.filter((r) => r !== item.id))
        } else {
            // add to filter.
            setSelectedHighways([...selectedHighways, item.id])
        }
    }

    const onReset = () => {
        setSelectedHighways([])
        dispatchResetFilters()
        navigation.navigate(routes.SCREEN_LISTING, {notification: t('filters.notifications.reset')})
    }

    const onSubmit = () => {
        dispatchSetHighwaysFilter(selectedHighways)
        dispatchFilterListing()
        navigation.navigate(routes.SCREEN_LISTING, {notification: t('filters.notifications.applied')})
    }

    return (
        <ScreenFilterWrapper backgroundImage={bgHighway}
                             showButtons={showButton}
                             onResetFilter={() => onReset()}
                             onApplyFilter={onSubmit}>
            <FilterHeader>
                <Title title={t('filters.highwayTitle')} hasArrow={true} />
            </FilterHeader>

            {highways.map((item, i) => {
                const checked = selectedHighways.includes(item.id)
                return (
                    <ListTileCheckbox
                        key={i}
                        label={t(`filterHighways.${item.id}`)}
                        checked={checked}
                        trailingIcon={
                            <ImageBackground source={bgBadgeHighway}
                                             style={styles.wrapper}>
                                <Text style={styles.number}>{item.roadNumber}</Text>
                            </ImageBackground>
                        }
                        onClick={() => onListTileChange(item)} />
                )
            })}
        </ScreenFilterWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        highwaysData: state.highwaysStore.highways,
        filteredHighwaysData: state.filtersStore.highways
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetHighwaysFilter: value => dispatch(setHighwaysFilter(value)),
        dispatchFilterListing: () => dispatch(filterListing()),
        dispatchResetFilters: () => dispatch(resetFilters())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByHighwayScreen);
