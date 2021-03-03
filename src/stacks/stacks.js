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
import TravelTripsScreen from './more/screens/travel-trips/travel-trips.screen';
import AppInformationScreen from './more/screens/app-information/app-information.screen';
import IntroStepOneScreen from './intro/screens/intro-step-one/intro-step-one.screen';

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
        CurrentConditions: {
            screen: CurrentConditionsScreen,
        },
        TraditionalTerritories: {
            screen: TraditionalTerritoriesScreen
        },
        TravelTrips: {
            screen: TravelTripsScreen
        },
        AppInformation: {
            screen: AppInformationScreen
        },
        AppInstructions: {
            screen: IntroStepOneScreen
        }
    }, {
        initialRouteName: 'MainRoot',
        drawerPosition: 'left',
        drawerBackgroundColor: 'white',
        overlayColor: 'rgba(0, 151, 169, 0.7)',
    }
);


export default createAppContainer(RootDrawerNavigation);