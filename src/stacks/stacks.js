import React from 'react';
import {View} from 'react-native';
import {SimpleLineIcons} from '@expo/vector-icons';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import {COMMON} from '../theme/theme';

import SideMenu from '../shared/components/navigation/side-menu';

import LoadingScreen from './loading/screens/loading/loading.screen';
import WelcomeScreen from './welcome/screens/welcome/welcome.screen';
import IntroStack from './intro/intro.stack';

import CurrentConditionsScreen from './more/screens/current-conditions/current-conditions.screen';
import TraditionalTerritoriesScreen from './more/screens/traditional-territories/traditional-territories.screen';
import TravelTripsScreen from './more/screens/travel-trips/travel-trips.screen';
import AppInformationScreen from './more/screens/app-information/app-information.screen';

import MainScreen from './listing/screens/main/main.screen';
import SiteDetails from './listing/screens/site-details/site-details.screen';
import SearchScreen from './search/screens/search/search.screen';

const MainStackNavigation = createStackNavigator({
        MainScreen: {
            screen: MainScreen,
        },
        SiteDetails: {
            screen: SiteDetails
        },
    }, {
        initialRouteName: 'MainScreen',
        defaultNavigationOptions: ({navigation}) => ({
            headerTitleStyle: {
                color: 'white'
            },
            headerStyle: {
                backgroundColor: '#0097A9',
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
                                            onPress={() => navigation.navigate('Search')} />
                </View>

            ),
            headerRight: (
                <View style={COMMON.headerRight}>
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
    MainStackNavigation: {
        screen: MainStackNavigation,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: SearchScreen,
    }
}, {
    mode: 'modal',
    transparentCard: true,
    cardStyle: { opacity: 1 }
})

const RootDrawerNavigation = createDrawerNavigator(
    {
        MainRoot: {
            screen: ModalStackNavigation,
            navigationOptions: {
                title: 'Home',
                drawerIcon: <SimpleLineIcons name="home" size={18} color="black" />
            }
        },
        CurrentConditions: {
            screen: CurrentConditionsScreen,
            navigationOptions: {
                drawerIcon: <SimpleLineIcons name="briefcase" size={18} color="black" />
            }
        },
        TraditionalTerritories: {
            screen: TraditionalTerritoriesScreen,
            navigationOptions: {
                drawerIcon: <SimpleLineIcons name="briefcase" size={18} color="black" />
            }
        },
        TravelTrips: {
            screen: TravelTripsScreen,
            navigationOptions: {
                drawerIcon: <SimpleLineIcons name="briefcase" size={18} color="black" />
            }
        },
        AppInformation: {
            screen: AppInformationScreen,
            navigationOptions: {
                title: 'App Information',
                drawerIcon: <SimpleLineIcons name="briefcase" size={18} color="black" />
            }
        },
        AppInstructions: {
            screen: IntroStack,
            navigationOptions: {
                title: 'App Instructions',
                drawerIcon: <SimpleLineIcons name="briefcase" size={18} color="black" />
            }
        }
    }, {
        initialRouteName: 'MainRoot',
        contentComponent: SideMenu,
        drawerPosition: 'left',
        drawerBackgroundColor: 'white',
        overlayColor: 'rgba(0, 151, 169, 0.7)',
        defaultNavigationOptions: {
            header: null
        }
    }
);

const RootNavigation = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        Welcome: WelcomeScreen,
        MainRootDrawer: RootDrawerNavigation,
    },
    {
        initialRouteName: 'Loading',
    }
);


export default createAppContainer(RootNavigation);