import React, {useState} from 'react';
import {Text, ImageBackground} from 'react-native';
import {setHighwaysFilter} from '../../store/actions/filters';
import {connect} from 'react-redux';

import ScreenFilterWrapper from '../../components/screenFilterWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';

import styles from './filterByHighway.styles'
import routes from '../../navigation/routes';

const bgHighway = require('./images/highway/bg-highway.jpg');
const bgBadgeHighway = require('./images/highway/badge-highway.png');

const FilterByHighwayScreen = (props) => {
    const {
        highwaysData,
        filteredHighwaysData,
        dispatchSetHighwaysFilter,
        navigation
    } = props

    const [showButton, setShowButton] = useState(false)
    const [highways] = useState(highwaysData)
    const [selectedHighways, setSelectedHighways] = useState(filteredHighwaysData)

    const onListTileChange = (item) => {
        setShowButton(true)

        if (selectedHighways.includes(item.id)) {
            // remove from filter.
            const removed = selectedHighways.filter((r) => r !== item.id)
            setSelectedHighways(removed)
        } else {
            // add to filter.
            selectedHighways.push(item.id)
            setSelectedHighways(selectedHighways)
        }
    }

    const onReset = () => {
        setSelectedHighways([])
    }

    const onSubmit = () => {
        dispatchSetHighwaysFilter(selectedHighways)
        navigation.navigate(routes.STACK_BOTTOM_TAB)
    }

    return (
        <ScreenFilterWrapper backgroundImage={bgHighway}
                             showButtons={showButton}
                             onResetFilter={() => onReset()}
                             onApplyFilter={onSubmit}>
            <FilterHeader>
                <Title title={`Filter by highway`} hasArrow={true} />
            </FilterHeader>

            {highways.map((item, i) => {
                const checked = selectedHighways.includes(item.id)
                return (
                    <ListTileCheckbox
                        key={i}
                        label={item.name}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByHighwayScreen);
