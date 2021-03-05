import {createStackNavigator} from 'react-navigation-stack';
import routes from '../../navigation/routes';

import FilterIndexScreen from './screens/index/index.screen';
import FilterBySiteTypeScreen from './screens/by-site-type/by-site-type.screen';

const FilterStack = createStackNavigator({
    [routes.SCREEN_FILTER_INDEX]: {
        screen: FilterIndexScreen
    },
    [routes.SCREEN_FILTER_SITE_TYPE]: {
        screen: FilterBySiteTypeScreen
    }
}, {
    initialRouteName: routes.SCREEN_FILTER_INDEX,
    defaultNavigationOptions: {
        header: null
    }
});

export default FilterStack;