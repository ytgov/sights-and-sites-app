import React from 'react';
import routes from '../../../../navigation/routes';

import ScreenWrapper from '../../../../components/screenWrapper';
import Title from '../../components/title/title.component';
import ListTile from '../../components/list-tile/list-tile.component';
import LabelArrow from './label-arrow.component';
import {FilterHeader} from '../../../../theme/layout';

const background = require('./images/bg-index.jpg');

const filters = [
    { label: 'Site type', withArrow: true, destination: routes.SCREEN_FILTER_SITE_TYPE, leadingIcon: require('./images/by-site-type.png'), leadingIconActive: require('./images/by-site-type-active.png') },
    { label: 'Region', withArrow: true, destination: routes.SCREEN_FILTER_REGION, leadingIcon: require('./images/by-region.png'), leadingIconActive: require('./images/by-region-active.png') },
    { label: 'Highway', withArrow: true, destination: routes.SCREEN_FILTER_HIGHWAY, leadingIcon: require('./images/by-highway.png'), leadingIconActive: require('./images/by-region-active.png') },
    { label: 'Near me', destination: routes.SCREEN_FILTER_NEAR_ME, leadingIcon: require('./images/near-me.png'), leadingIconActive: require('./images/near-me-active.png') },
    { label: 'My favorites', destination: routes.SCREEN_FILTER_MY_FAVORITES, leadingIcon: require('./images/my-favorites.png'), leadingIconActive: require('./images/my-favorites-active.png') },
]


const FilterIndexScreen = ({navigation}) => {

    const cooked_filters = filters.map(item => {
        return {
            ...item,
            label: item.withArrow ? <LabelArrow label={item.label} /> : item.label
        }
    })

    return (
        <ScreenWrapper backgroundImage={background}>
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

FilterIndexScreen['navigationOptions'] = screenProps => ({
    title: ''
})

export default FilterIndexScreen;
