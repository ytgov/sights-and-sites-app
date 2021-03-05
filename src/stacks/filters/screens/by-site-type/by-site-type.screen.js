import React from 'react';

import ScreenWrapper from '../../../../shared/components/screen-wrapper/screen-wrapper.component';
import {FilterHeader} from '../../../../theme/layout';
import ListTileCheckbox from '../../components/list-tile/list-tile-checkbox.component';
import Title from '../../components/title/title.component';

const indexBackground = require('./images/index.png');

const filters = [
    { label: 'Camping', icon: require('./images/camping.png') },
    { label: 'Recreation', icon: require('./images/recreation.png') },
    { label: 'Wildlife & landscape', icon: require('./images/wildlife.png') },
    { label: 'History & culture', icon: require('./images/history-culture.png') },
]

const FilterBySiteTypeScreen = () => {
    return (
        <ScreenWrapper backgroundImage={indexBackground}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
            </FilterHeader>

            {filters.map((item, i) => (
                <ListTileCheckbox
                    key={i}
                    label={item.label}
                    trailingIcon={item.icon}
                    onClick={() => console.log('clicked')} />
            ))}
        </ScreenWrapper>
    );
};

export default FilterBySiteTypeScreen;