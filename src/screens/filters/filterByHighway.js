import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {Text, ImageBackground} from 'react-native';
import {resetHighways, setHighwayFilters} from '../../store/actions/filters';
import {connect} from 'react-redux';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';

import styles from './filterByHighway.styles'

const bgHighway = require('./images/highway/bg-highway.jpg');
const bgBadgeHighway = require('./images/highway/badge-highway.png');

const FilterByHighwayScreen = (props) => {
    const { highways } = props

    return (
        <ScreenWrapper backgroundImage={bgHighway}>
            <FilterHeader>
                <Title title={`Filter by highway`} hasArrow={true} />
            </FilterHeader>

            {highways.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.name}
                    trailingIcon={
                        <ImageBackground source={bgBadgeHighway}
                                         style={styles.wrapper}>
                            <Text style={styles.number}>{item.roadNumber}</Text>
                        </ImageBackground>
                    }
                    onClick={() => console.log('clicked')} />
            ))}
        </ScreenWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        highways: state.highwaysStore.highways,
        highwaysFilter: state.filtersStore.highwaysFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setHighwayFiltersDispatch: value => dispatch(setHighwayFilters(value)),
        resetHighwaysDispatch: value => dispatch(resetHighways(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByHighwayScreen);
