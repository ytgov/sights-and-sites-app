import React, {useState} from 'react';
import ScreenWrapper from '../../components/screenWrapper';
import {FilterHeader} from '../../theme/layout';
import Title from '../../components/filters/title';
import ListTileCheckbox from '../../components/filters/listTile/listTileCheckbox';

const bgDefault = require('./images/bg-type-history-culture.jpg');

const filters = [
    { label: 'Camping', icon: require('./images/camping.png'), background: require('./images/bg-type-camping.jpg') },
    { label: 'Recreation', icon: require('./images/recreation.png'), background: require('./images/bg-type-recreation.jpg') },
    { label: 'Wildlife & landscape', icon: require('./images/wildlife.png'), background: require('./images/bg-type-wildlife.jpg') },
    { label: 'History & culture', icon: require('./images/history-culture.png'), background: require('./images/bg-type-history-culture.jpg') },
]

const FilterByTypeScreen = () => {
    const [background, setBackground] = useState(bgDefault);

    return (
        <ScreenWrapper backgroundImage={background}>
            <FilterHeader>
                <Title title={`Filter by site type`} hasArrow={true} />
            </FilterHeader>

            {filters.map((item, i) => (
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
