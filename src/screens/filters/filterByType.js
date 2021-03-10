import React, {useState} from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';

import filterTypes from './data/filterTypes';

const bgDefault = require('./images/type/bg-type-history-culture.jpg');

const FilterByTypeScreen = () => {
    const [background, setBackground] = useState(bgDefault);

    return (
        <ScreenWrapper backgroundImage={background}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
            </FilterHeader>

            {filterTypes.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.label}
                    trailingIcon={item.icon}
                    onClick={() => setBackground(item.background)} />
            ))}
        </ScreenWrapper>
    );
};

export default FilterByTypeScreen;
