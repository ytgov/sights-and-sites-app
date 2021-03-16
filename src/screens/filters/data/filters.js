import i18n from '../../../locale/locale';
import routes from '../../../navigation/routes';

const filters = [
    {
        id: 'siteTypes',
        label: i18n.t('filters.siteType'),
        withArrow: true,
        destination: routes.SCREEN_FILTER_SITE_TYPE,
        leadingIcon: require('../images/index/by-site-type.png'),
        leadingIconActive: require('../images/index/by-site-type-active.png')
    },
    {
        id: 'regions',
        label: i18n.t('filters.region'),
        withArrow: true,
        destination: routes.SCREEN_FILTER_REGION,
        leadingIcon: require('../images/index/by-region.png'),
        leadingIconActive: require('../images/index/by-region-active.png')
    },
    {
        id: 'highways',
        label: i18n.t('filters.highway'),
        withArrow: true,
        destination: routes.SCREEN_FILTER_HIGHWAY,
        leadingIcon: require('../images/index/by-highway.png'),
        leadingIconActive: require('../images/index/by-region-active.png')
    },
    {
        id: 'nearMe',
        label: i18n.t('filters.nearMe'),
        destination: routes.SCREEN_FILTER_NEAR_ME,
        leadingIcon: require('../images/index/near-me.png'),
        leadingIconActive: require('../images/index/near-me-active.png')
    },
    {
        id: 'myFavorites',
        label: i18n.t('filters.myFavorites'),
        destination: routes.SCREEN_FILTER_MY_FAVORITES,
        leadingIcon: require('../images/index/my-favorites.png'),
        leadingIconActive: require('../images/index/my-favorites-active.png')
    },
]

export default filters
