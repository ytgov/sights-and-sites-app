import React from 'react';
import {Dimensions} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import routes from './routes';

import SideMenu from '../components/sideMenu';
import SideMenuIcon, { SideMenuIconType } from '../components/sideMenu/sideMenuIcon';

import LoadingScreen from '../stacks/loading/screens/loading/loading.screen';
import WelcomeScreen from '../stacks/welcome/screens/welcome/welcome.screen';
import IntroStack from '../stacks/intro/intro.stack';

import CurrentConditionsScreen from '../stacks/more/screens/current-conditions/current-conditions.screen';
import TraditionalTerritoriesScreen from '../stacks/more/screens/traditional-territories/traditional-territories.screen';
import TravelTripsScreen from '../stacks/more/screens/travel-trips/travel-trips.screen';
import AppInformationScreen from '../stacks/more/screens/app-information/app-information.screen';

import i18n from '../locale/locale';
import {defaultTabBarOptions} from './defaultNavigationOptions';

import ListingScreen from '../screens/listing';
import MapScreen from '../screens/map';

import HelpfulInfoScreen from '../screens/helpfulInfo';
import SearchScreen from '../screens/search';

import BottomTabItem from './bottomTabItem';

import FilterIndexScreen from '../screens/filters';
import FilterBySiteTypeScreen from '../stacks/filters/screens/by-site-type/by-site-type.screen';
import FilterByRegionScreen from '../screens/filters/filterByRegion';
import FilterByHighwayScreen from '../screens/filters/filterByHighway';
import FilterByMyFavoritesScreen from '../screens/filters/filterMyFavorites';
import FilterByNearMeScreen from '../screens/filters/filterNearMe';
import HeaderNav, {HeaderNavType} from '../components/headerNav';

const searchIcon = require('./images/search.png');
const helpfulInfoIcon = require('./images/helpful-info.png');
const exploreRoadTrips = require('./images/explore-road-trips.png');

const windowWidth = Dimensions.get('window').width;

//// Start here
const FilterStackNavigator = createStackNavigator({
    [routes.SCREEN_FILTER_INDEX]: {
        screen: FilterIndexScreen
    },
    [routes.SCREEN_FILTER_SITE_TYPE]: {
        screen: FilterBySiteTypeScreen
    },
    [routes.SCREEN_FILTER_REGION]: {
        screen: FilterByRegionScreen
    },
    [routes.SCREEN_FILTER_HIGHWAY]: {
        screen: FilterByHighwayScreen
    },
    [routes.SCREEN_FILTER_MY_FAVORITES]: {
        screen: FilterByMyFavoritesScreen
    },
    [routes.SCREEN_FILTER_NEAR_ME]: {
        screen: FilterByNearMeScreen
    }
}, {
    defaultNavigationOptions: {
        headerMode: 'none'
    }
});


const MainStackNavigator = createStackNavigator({
    [routes.STACK_FILTERS]: {
        screen: FilterStackNavigator,
        navigationOptions: {
            header: (props) => <HeaderNav {...props}
                                          activeItem={HeaderNavType.FILTERS} />
        }
    },
    [routes.SCREEN_LISTING]: {
        screen: ListingScreen,
    },
    [routes.SCREEN_MAP]: {
        screen: MapScreen
    }
}, {
    initialRouteName: routes.SCREEN_LISTING,
    defaultNavigationOptions: {
        headerMode: 'none'
    }
});

const BottomTabNavigator = createBottomTabNavigator({
    [routes.SCREEN_SEARCH]: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: <BottomTabItem
                icon={searchIcon}
                label={'Search'} />,
            tabBarOnPress: ({navigation}) => {
                // TODO: dispatch opening search box.
            }
        }
    },
    [routes.STACK_MAIN]: {
        screen: MainStackNavigator,
        navigationOptions: {
            tabBarIcon: <BottomTabItem
                icon={exploreRoadTrips}
                label={'Explore Road Trips'}
                bigIcon={true} />
        }
    },
    [routes.SCREEN_HELPFUL_INFO]: {
        screen: HelpfulInfoScreen,
        navigationOptions: {
            tabBarIcon: <BottomTabItem
                icon={helpfulInfoIcon}
                label={'Helpful Info'} />,
            tabBarOnPress: ({navigation}) => {
                navigation.openDrawer()
            }
        }
    }
}, {
    initialRouteName: routes.STACK_MAIN,
    tabBarOptions: defaultTabBarOptions,
});

const RootDrawerNavigation = createDrawerNavigator(
    {
        [routes.STACK_BOTTOM_TAB]: {
            screen: BottomTabNavigator,
        },
        [routes.SCREEN_CURRENT_CONDITIONS]: {
            screen: CurrentConditionsScreen,
            navigationOptions: {
                title: i18n.t('currentConditions.title'),
                drawerIcon: <SideMenuIcon type={SideMenuIconType.CURRENT_CONDITIONS} />
            }
        },
        [routes.SCREEN_TRADITIONAL_TERRITORIES]: {
            screen: TraditionalTerritoriesScreen,
            navigationOptions: {
                title: 'First Nations in Yukon',
                drawerIcon: <SideMenuIcon type={SideMenuIconType.FIRST_NATIONS} />
            }
        },
        [routes.SCREEN_WILDERNESS_TRAVEL_TIPS]: {
            screen: TravelTripsScreen,
            navigationOptions: {
                title: 'Wilderness Travel Tips',
                drawerIcon: <SideMenuIcon type={SideMenuIconType.WILDERNESS_TRAVEL_TIPS} />
            }
        },
        [routes.SCREEN_APP_INFORMATION]: {
            screen: AppInformationScreen,
            navigationOptions: {
                title: i18n.t('appInformation.title'),
                drawerIcon: <SideMenuIcon type={SideMenuIconType.APP_INFORMATION} />
            }
        },
        [routes.STACK_APP_INSTRUCTION]: {
            screen: IntroStack,
            navigationOptions: {
                title: 'App Instructions',
                drawerIcon: <SideMenuIcon type={SideMenuIconType.APP_INSTRUCTIONS} />
            }
        }
    }, {
        initialRouteName: routes.STACK_BOTTOM_TAB,
        contentComponent: SideMenu,
        drawerPosition: 'left',
        drawerBackgroundColor: 'white',
        drawerWidth: (windowWidth - 50),
        overlayColor: 'rgba(0, 151, 169, 0.7)',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const RootNavigation = createSwitchNavigator(
    {
        [routes.SCREEN_LOADING]: LoadingScreen,
        [routes.SCREEN_WELCOME]: WelcomeScreen,
        [routes.STACK_APP_INSTRUCTION]: IntroStack,
        [routes.STACK_BOTTOM_TAB]: RootDrawerNavigation,
    },
    {
        initialRouteName: routes.SCREEN_LOADING,
    }
);


export default createAppContainer(RootNavigation);
