import React from 'react';
import {Dimensions, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import routes from './routes';

import SideMenu from '../components/sideMenu';
import SideMenuIcon, { SideMenuIconType } from '../components/sideMenu/sideMenuIcon';

import LoadingScreen from '../screens/loading';
import WelcomeScreen from '../screens/welcome';
import IntroductionScreen from '../screens/introduction';

import CurrentConditionsScreen from '../screens/helpfulInfo/currentConditions';
import FirstNationsScreen from '../screens/helpfulInfo/firstNations';
import WildernessTravelTipsScreen from '../screens/helpfulInfo/wildernessTravelTips';
import AppInformationScreen from '../screens/helpfulInfo/appInformation';

import i18n from '../locale/locale';
import {defaultTabBarOptions} from './defaultNavigationOptions';

import ListingScreen from '../screens/listing';
import SiteDetailsScreen from '../screens/siteDetails';
import MapScreen from '../screens/map';

import HelpfulInfoScreen from '../screens/helpfulInfo';
import SearchScreen from '../screens/search';

import BottomTabItem from './bottomTabItem';

import FilterIndexScreen from '../screens/filters';
import FilterByTypeScreen from '../screens/filters/filterByType';
import FilterByRegionScreen from '../screens/filters/filterByRegion';
import FilterByHighwayScreen from '../screens/filters/filterByHighway';
import FilterByMyFavoritesScreen from '../screens/filters/filterMyFavorites';
import FilterByNearMeScreen from '../screens/filters/filterNearMe';
import HeaderNav, {HeaderNavType} from '../components/headerNav';
import BottomTabItemSearch from '~navigation/bottomTabItemSearch';
import SearchResultsScreen from '~screens/searchResults';

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
        screen: FilterByTypeScreen
    },
    [routes.SCREEN_FILTER_REGION]: {
        screen: FilterByRegionScreen
    },
    [routes.SCREEN_FILTER_HIGHWAY]: {
        screen: FilterByHighwayScreen
    },
    [routes.SCREEN_SITE_DETAILS]: {
        screen: SiteDetailsScreen,
    },
    [routes.SCREEN_FILTER_MY_FAVORITES]: {
        screen: FilterByMyFavoritesScreen
    },
    [routes.SCREEN_FILTER_NEAR_ME]: {
        screen: FilterByNearMeScreen
    }
}, {
    defaultNavigationOptions: {
        headerShown: true,
        header: props => <HeaderNav {...props}
                   activeItem={HeaderNavType.FILTERS} />
    }
});


const MainStackNavigator = createStackNavigator({
    [routes.SCREEN_LISTING]: {
        screen: ListingScreen,
    },
    [routes.SCREEN_SITE_DETAILS]: {
        screen: SiteDetailsScreen,
    },
    [routes.SCREEN_MAP]: {
        screen: MapScreen
    }
}, {
    initialRouteName: routes.SCREEN_LISTING,
    defaultNavigationOptions: {
        headerMode: 'none',
    }
});

const BottomTabNavigator = createBottomTabNavigator({
    [routes.SCREEN_SEARCH]: {
        screen: SearchScreen,
        navigationOptions: () => ({
            tabBarIcon: <BottomTabItemSearch
                icon={searchIcon}
                label={i18n.t('navigation.footer.search')}
            />,
                tabBarOnPress: null
        }),
    },
    [routes.STACK_MAIN]: {
        screen: MainStackNavigator,
        navigationOptions: () => ({
            tabBarIcon: <BottomTabItem
                icon={exploreRoadTrips}
                label={i18n.t('navigation.footer.explore')}
                bigIcon={true} />
        }),
    },
    [routes.SCREEN_HELPFUL_INFO]: {
        screen: HelpfulInfoScreen,
        navigationOptions: () => ({
            tabBarIcon: <BottomTabItem
                icon={helpfulInfoIcon}
                label={i18n.t('navigation.footer.helpfulInfo')} />,
            tabBarOnPress: ({navigation}) => {
                navigation.openDrawer()
            }
        }),
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
            navigationOptions: () => (
                {
                    title: i18n.t('currentConditions.title'),
                    drawerIcon: <SideMenuIcon type={SideMenuIconType.CURRENT_CONDITIONS} />
                }
            )
        },
        [routes.SCREEN_TRADITIONAL_TERRITORIES]: {
            screen: FirstNationsScreen,
            navigationOptions: () => (
                {
                    title: i18n.t('firstNation.title'),
                    drawerIcon: <SideMenuIcon type={SideMenuIconType.FIRST_NATIONS} />
                }
            )
        },
        [routes.SCREEN_WILDERNESS_TRAVEL_TIPS]: {
            screen: WildernessTravelTipsScreen,
            navigationOptions: () => (
                {
                    title: i18n.t('travelTips.title'),
                    drawerIcon: <SideMenuIcon type={SideMenuIconType.WILDERNESS_TRAVEL_TIPS} />
                }
            )
        },
        [routes.SCREEN_APP_INFORMATION]: {
            screen: AppInformationScreen,
            navigationOptions: () => (
                {
                    title: i18n.t('appInformation.title'),
                    drawerIcon: <SideMenuIcon type={SideMenuIconType.APP_INFORMATION} />
                }
            )
        },
        [routes.STACK_APP_INSTRUCTION]: {
            screen: IntroductionScreen,
            navigationOptions: () => (
                {
                    title: i18n.t('appIntroduction.title'),
                    drawerIcon: <SideMenuIcon type={SideMenuIconType.APP_INSTRUCTIONS} />
                }
            )
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

const searchStack = createStackNavigator({
    [routes.SCREEN_SEARCH_RESULTS]: SearchResultsScreen
},{
    defaultNavigationOptions: {
        headerShown: true,
            header: props => <HeaderNav {...props}
                                        activeItem={HeaderNavType.FILTERS} />
    }
})

const ModalNavigator = createStackNavigator({
    [routes.STACK_BOTTOM_TAB]: RootDrawerNavigation,
    [routes.STACK_FILTERS]: FilterStackNavigator,
    [routes.STACK_SEARCH]: searchStack
}, {
    mode: 'modal',
    headerMode: 'none',
    transparentCard: true,
    cardStyle: { opacity: 1, backgroundColor: "transparent" }
})

const RootStackNavigator = createStackNavigator({
    stackModal: ModalNavigator,
    [routes.SCREEN_CURRENT_CONDITIONS]: CurrentConditionsScreen,
    [routes.SCREEN_TRADITIONAL_TERRITORIES]: FirstNationsScreen,
    [routes.SCREEN_WILDERNESS_TRAVEL_TIPS]: WildernessTravelTipsScreen,
    [routes.SCREEN_APP_INFORMATION]: AppInformationScreen
}, {
    headerMode: 'none',
})

const RootNavigation = createSwitchNavigator(
    {
        [routes.SCREEN_LOADING]: LoadingScreen,
        [routes.SCREEN_WELCOME]: WelcomeScreen,
        [routes.SCREEN_INTRODUCTION]: IntroductionScreen,
        [routes.STACK_BOTTOM_TAB]: RootStackNavigator,
    },
    {
        initialRouteName: routes.SCREEN_LOADING,
    }
);


export default createAppContainer(RootNavigation);
