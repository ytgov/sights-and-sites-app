import React from 'react';
import ScreenWrapper from '../../../../shared/components/screen-wrapper/screen-wrapper.component';
import {FilterHeader} from '../../../../theme/layout';
import Title from '../../components/title/title.component';
import ListTileCheckbox from '../../components/list-tile/list-tile-checkbox.component';
import {resetRegions, setRegionFilters} from '../../../../store/actions/filters';
import {connect} from 'react-redux';

const background = require('./images/bg-by-region.png');

const FilterByRegionScreen = (props) => {
    const {regions} = props

    return (
        <ScreenWrapper backgroundImage={background}>
            <FilterHeader>
                <Title title={`Filter by region`} hasArrow={true} />
            </FilterHeader>

            {regions.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.name}
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