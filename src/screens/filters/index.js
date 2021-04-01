import React from 'react';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';

import ScreenWrapper from '~components/screenWrapper';
import LabelArrow from '~components/filters/labelArrow';
import {FilterHeader} from '~theme/layout';
import Title from '~components/filters/title';
import ListTile from '~components/filters/listTile';

import {checkActiveFilter} from '~app/shared/utils/filters';
import routes from '~navigation/routes';
import {toastWithIcon, ICON_POSITION} from '~app/shared/services/notify';

const bgIndex = require('./images/index/bg-index.jpg');
const windowWidth = Dimensions.get('window').width;

const FilterIndexScreen = (props) => {
    const {t} = useTranslation()
    const {
        filterStore,
        navigation
    } = props
    const { myFavorites = [] } = filterStore || {};
    const hasFavorites = !!myFavorites.length;

    const filters = [
        {
            id: 'siteTypes',
            label: t('filters.siteTypes'),
            withArrow: true,
            destination: routes.SCREEN_FILTER_SITE_TYPE,
            leadingIcon: require('./images/index/by-site-type.png'),
            leadingIconActive: require('./images/index/by-site-type-active.png')
        },
        {
            id: 'regions',
            label: t('filters.regions'),
            withArrow: true,
            destination: routes.SCREEN_FILTER_REGION,
            leadingIcon: require('./images/index/by-region.png'),
            leadingIconActive: require('./images/index/by-region-active.png')
        },
        {
            id: 'highways',
            label: t('filters.highways'),
            withArrow: true,
            destination: routes.SCREEN_FILTER_HIGHWAY,
            leadingIcon: require('./images/index/by-highway.png'),
            leadingIconActive: require('./images/index/by-highway-active.png')
        },
        {
            id: 'myFavorites',
            label: t('filters.myFavorites'),
            destination: routes.SCREEN_FILTER_MY_FAVORITES,
            leadingIcon: require('./images/index/my-favorites.png'),
            leadingIconActive: require('./images/index/my-favorites-active.png')
        },
    ]

    const cooked_filters = filters.map(item => {
        return {
            ...item,
            label: item.withArrow ? <LabelArrow label={item.label} /> : item.label
        }
    });

    const onItemClick = (destination) => {
        if (destination === routes.SCREEN_FILTER_MY_FAVORITES) {
           if (!hasFavorites) {
               toastWithIcon(t('favorites.noFavorites'), 'alert-circle', {
                   position: DeviceInfo.hasNotch() ? 110 : 80, /* StatusBar height + App menu height  */
                   containerStyle: {
                       paddingTop: 6,
                       paddingBottom: 6,
                       width: windowWidth,
                   }
               }, ICON_POSITION.LEFT);
               return;
           }
        }

        navigation.navigate(destination);
    };


    return (
        <ScreenWrapper backgroundImage={bgIndex}>
            <FilterHeader>
                <Title title={t('filters.by')} />
            </FilterHeader>

            {cooked_filters.map((item, i) =>
            {
                return (
                    <ListTile
                        key={i}
                        label={item.label}
                        checked={checkActiveFilter(filterStore, item.id)}
                        leadingIcon={item.leadingIcon}
                        leadingIconActive={item.leadingIconActive}
                        onClick={() => onItemClick(item.destination)} />
                )
            }

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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterIndexScreen);
