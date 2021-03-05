import React from 'react';

import ScreenWrapper from '../../../../shared/components/screen-wrapper/screen-wrapper.component';
import ListTile from '../../../../shared/components/list-tile/list-tile.component';
import LabelArrow from './label-arrow.component';

const background = require('./images/bg-index.jpg');

const filters = [
    { label: 'Site type', withArrow: true, leadingIcon: require('./images/by-site-type.png'), leadingIconActive: require('./images/by-site-type-active.png') },
    { label: 'Region', withArrow: true, leadingIcon: require('./images/by-region.png'), leadingIconActive: require('./images/by-region-active.png') },
    { label: 'Highway', withArrow: true, leadingIcon: require('./images/by-highway.png'), leadingIconActive: require('./images/by-region-active.png') },
    { label: 'Near me', leadingIcon: require('./images/near-me.png'), leadingIconActive: require('./images/near-me-active.png') },
    { label: 'My favorites', leadingIcon: require('./images/my-favorites.png'), leadingIconActive: require('./images/my-favorites-active.png') },
]


const FilterIndexScreen = () => {

    const cooked_filters = filters.map(item => {
        return {
            ...item,
            label: item.withArrow ? <LabelArrow label={item.label} /> : item.label
        }
    })

    return (
        <ScreenWrapper backgroundImage={background}>
            {cooked_filters.map((item, i) =>
                <ListTile
                    key={i}
                    label={item.label}
                    leadingIcon={item.leadingIcon}
                    leadingIconActive={item.leadingIconActive}
                    onClick={() => console.log('here')} />
            )}
        </ScreenWrapper>
    );
};

FilterIndexScreen['navigationOptions'] = screenProps => ({
    title: ''
})

export default FilterIndexScreen;