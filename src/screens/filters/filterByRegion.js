import React, {useState} from 'react';
import {connect} from 'react-redux';

import ScreenFilterWrapper from '../../components/screenFilterWrapper';

import {setRegionsFilter} from '../../store/actions/filters';

import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';
import routes from '../../navigation/routes';

const bgRegion = require('./images/region/bg-region.jpg');

const FilterByRegionScreen = (props) => {
    const {
        regionsData,
        filteredRegionsData,
        dispatchSetRegionsFilter,
        navigation
    } = props

    const [showButton, setShowButton] = useState(false)
    const [regions] = useState(regionsData)
    const [selectedRegions, setSelectedRegions] = useState(filteredRegionsData)

    const onListTileChange = (item) => {
        setShowButton(true)

        if (selectedRegions.includes(item.id)) {
            // remove from filter.
            const removed = selectedRegions.filter((r) => r !== item.id)
            setSelectedRegions(removed)
        } else {
            // add to filter.
            selectedRegions.push(item.id)
            setSelectedRegions(selectedRegions)
        }
    }

    const onReset = () => {
        setSelectedRegions([])
    }

    const onSubmit = () => {
        dispatchSetRegionsFilter(selectedRegions)
        navigation.navigate(routes.STACK_BOTTOM_TAB)
    }

    return (
        <ScreenFilterWrapper backgroundImage={bgRegion}
                             showButtons={showButton}
                             onResetFilter={() => onReset()}
                             onApplyFilter={onSubmit}>
            <FilterHeader>
                <Title title={`Filter by region`} hasArrow={true} />
            </FilterHeader>

            {regions.map((item, i) => {
                const checked = selectedRegions.includes(item.id)
                return (
                    <ListTileCheckbox
                        key={i}
                        label={item.name}
                        checked={checked}
                        trailingIcon={item.map}
                        trailingIconStyle={{height: 42, resizeMode: 'contain'}}
                        onClick={() => onListTileChange(item)} />
                )
            })}
        </ScreenFilterWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        regionsData: state.regionsStore.regions,
        filteredRegionsData: state.filtersStore.regions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetRegionsFilter: value => dispatch(setRegionsFilter(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByRegionScreen);

