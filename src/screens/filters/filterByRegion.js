import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {resetRegions, setRegionFilters} from '../../store/actions/filters';
import {connect} from 'react-redux';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';

const bgRegion = require('./images/region/bg-region.jpg');

const FilterByRegionScreen = (props) => {
    const {regions} = props
    return (
        <ScreenWrapper backgroundImage={bgRegion}>
            <FilterHeader>
                <Title title={`Filter by region`} hasArrow={true} />
            </FilterHeader>

            {regions.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.name}
                    trailingIcon={item.map}
                    trailingIconStyle={{height: 42, resizeMode: 'contain'}}
                    onClick={() => console.log('clicked')} />
            ))}
        </ScreenWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        regions: state.regionsStore.regions,
        regionsFilter: state.filtersStore.regionsFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRegionsFiltersDispatch: value => dispatch(setRegionFilters(value)),
        resetRegionsDispatch: () => dispatch(resetRegions())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByRegionScreen);

