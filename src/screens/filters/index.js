import React from 'react';
import {connect} from 'react-redux';

import ScreenWrapper from '../../components/screenWrapper';
import LabelArrow from '../../components/filters/labelArrow';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTile from '../../components/filters/listTile';

import filters from './data/filters';
import {checkActiveFilter} from '../../shared/utils/filters';

const bgIndex = require('./images/index/bg-index.jpg');

const FilterIndexScreen = (props) => {
    const {filterStore, navigation} = props

    const cooked_filters = filters.map(item => {
        return {
            ...item,
            label: item.withArrow ? <LabelArrow label={item.label} /> : item.label
        }
    })

    return (
        <ScreenWrapper backgroundImage={bgIndex}>
            <FilterHeader>
                <Title title={`Filter by`} />
            </FilterHeader>

            {cooked_filters.map((item, i) =>
                <ListTile
                    key={i}
                    label={item.label}
                    checked={checkActiveFilter(filterStore, item.id)}
                    leadingIcon={item.leadingIcon}
                    leadingIconActive={item.leadingIconActive}
                    onClick={() => navigation.navigate(item.destination)} />
            )}
        </ScreenWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        filterStore: state.filtersStore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        //dispatchSetSiteTypesFilter: (value) => dispatch(setSiteTypesFilter(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterIndexScreen);
