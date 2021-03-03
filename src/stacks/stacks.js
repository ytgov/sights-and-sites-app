import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoadingStack from './loading/loading.stack';
import WelcomeStack from './welcome/welcome.stack';
import IntroStack from './intro/intro.stack';
import MainStack from './main/main.stack';
import TestScreen from './TestScreen';

import CurrentConditionsScreen from './more/screens/current-conditions/current-conditions.screen';
import TraditionalTerritoriesScreen from './more/screens/traditional-territories/traditional-territories.screen';

const RootNavigation = createSwitchNavigator(
    {
        Loading: LoadingStack,
        Welcome: WelcomeStack,
        Intro: IntroStack,
        Main: MainStack,
        Test: TestScreen
    },
    {
        // initialRouteName: 'Test',
        initialRouteName: 'Loading',
    }
);

const RootDrawerNavigation = createDrawerNavigator(
    {
        MainRoot: {
            screen: RootNavigation,
            navigationOptions: {
                title: 'Home'
            }
        },
        CurrentConditionsScreen: {
            screen: CurrentConditionsScreen,
            navigationOptions: {
                title: 'CurrentConditions'
            }
        },
        TraditionalTerritoriesScreen: {
            screen: TraditionalTerritoriesScreen,
            navigationOptions: {
                title: 'First Nations in Yukon'
            }
        }
    }, {
        // contentComponent: SideMenu,
        drawerPosition: 'left',
        drawerBackgroundColor: 'white',
    }
);


export default createAppContainer(RootDrawerNavigation);