import React from 'react';
import {View, Dimensions} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {COMMON} from '../theme/theme';
import {YUKON_COLORS} from '../theme/config';
import routes from './routes';

import SideMenu from '../shared/components/side-menu/side-menu.component';
import SideMenuIcon, { SideMenuIconType } from '../shared/components/side-menu/menu-icon.component';

import LoadingScreen from '../stacks/loading/screens/loading/loading.screen';
import WelcomeScreen from '../stacks/welcome/screens/welcome/welcome.screen';
import IntroStack from '../stacks/intro/intro.stack';

import CurrentConditionsScreen from '../stacks/more/screens/current-conditions/current-conditions.screen';
import TraditionalTerritoriesScreen from '../stacks/more/screens/traditional-territories/traditional-territories.screen';
import TravelTripsScreen from '../stacks/more/screens/travel-trips/travel-trips.screen';
import AppInformationScreen from '../stacks/more/screens/app-information/app-information.screen';

import MainScreen from '../stacks/listing/screens/main/main.screen';
import SiteDetails from '../stacks/listing/screens/site-details/site-details.screen';

import FilterStack from '../stacks/filters/filters.stack';
import i18n from '../locale/locale';

import ListingScreen from '../screens/listing';
import HelpfulInfoScreen from '../screens/helpfulInfo';
import SearchScreen from '../screens/search';
import {defaultTabBarOptions} from './defaultNavigationOptions';
import BottomTabItem from './bottomTabItem';

const searchIcon = require('./images/search.png');
const helpfulInfoIcon = require('./images/helpful-info.png');
const exploreRoadTrips = require('./images/explore-road-trips.png');

const windowWidth = Dimensions.get('window').width;

const MainStackNavigation = createStackNavigator({
        [routes.STACK_MAIN]: {
            screen: MainScreen,
        },
        [routes.SCREEN_SITE_DETAILS]: {
            screen: SiteDetails
        },
        [routes.STACK_FILTERS]: {
            screen: FilterStack,
            navigationOptions: {
                title: ''
            }
        }
    }, {
        initialRouteName: routes.STACK_MAIN,
        defaultNavigationOptions: ({navigation}) => ({
            headerTitleStyle: {
                color: 'white'
            },
            headerStyle: {
                backgroundColor: YUKON_COLORS.primary_200,
                borderBottomWidth: 0
            },
            headerRightContainerStyle: {
                marginRight: 12
            },
            headerLeft: (
                <View style={COMMON.headerLeft}>
                    <SimpleLineIcons.Button name="menu"
                                            size={18}
                                            color="white"
                                            backgroundColor="transparent"
                                            underlayColor={'transparent'}
                                            borderRadius={0}
                                            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                    <SimpleLineIcons.Button name="magnifier"
                                            size={18}
                                            color="white"
                                            backgroundColor="transparent"
                                            underlayColor={'transparent'}
                                            borderRadius={0}
                                            onPress={() => navigation.navigate(routes.SCREEN_SEARCH)} />
                </View>

            ),
            headerRight: (
                <View style={COMMON.headerRight}>
                    <SimpleLineIcons.Button name="equalizer"
                                            size={18}
                                            backgroundColor="transparent"
                                            underlayColor={'transparent'}
                                            borderRadius={0}
                                            color="white"
                                            onPress={() => navigation.navigate(routes.SCREEN_FILTER_INDEX)} />
                    <SimpleLineIcons.Button name="list"
                                            size={18}
                                            backgroundColor="transparent"
                                            underlayColor={'transparent'}
                                            borderRadius={0}
                                            color="white"
                                            onPress={() => {}} />
                    <SimpleLineIcons.Button name="map"
                                            size={18}
                                            backgroundColor="transparent"
                                            underlayColor={'transparent'}
                                            borderRadius={0}
                                            color="white"
                                            onPress={() => {}} />
                </View>
            ),
        })
    }
)

const ModalStackNavigation = createStackNavigator({
    [routes.STACK_MAIN]: {
        screen: MainStackNavigation,
        navigationOptions: {
            header: null
        }
    },
    [routes.SCREEN_SEARCH]: {
        screen: SearchScreen,
    }
}, {
    mode: 'modal',
    transparentCard: true,
    cardStyle: { opacity: 1 }
})


//// Start here

const BottomTabNavigator = createBottomTabNavigator({
    [routes.SCREEN_SEARCH]: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: <BottomTabItem
                icon={searchIcon}
                label={'Search'} />
        }
    },
    [routes.SCREEN_LISTING]: {
        screen: ListingScreen,
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
                label={'Helpful Info'} />
        }
    }
}, {
    tabBarOptions: defaultTabBarOptions
});

const StackNavigator = createStackNavigator({
    stackRoot: BottomTabNavigator
})

const RootDrawerNavigation = createDrawerNavigator(
    {
        [routes.STACK_MODAL]: {
            screen: BottomTabNavigator,
            navigationOptions: {
                title: 'Home',
            }
        },

        bottomTab: {
            screen: BottomTabNavigator
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
        initialRouteName: routes.STACK_MODAL,
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
        [routes.STACK_BOTTOM_TAB]: BottomTabNavigator,
    },
    {
        initialRouteName: routes.SCREEN_LOADING,
    }
);


export default createAppContainer(RootNavigation);
