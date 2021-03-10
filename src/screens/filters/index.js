import React from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import routes from '../../navigation/routes';
import LabelArrow from '../../components/filters/labelArrow';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTile from '../../components/filters/listTile';

import filters from './data/filters';

const bgIndex = require('./images/index/bg-index.jpg');

const FilterIndexScreen = ({navigation}) => {

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
                    leadingIcon={item.leadingIcon}
                    leadingIconActive={item.leadingIconActive}
                    onClick={() => navigation.navigate(item.destination)} />
            )}
        </ScreenWrapper>
    );
};

export default FilterIndexScreen;
