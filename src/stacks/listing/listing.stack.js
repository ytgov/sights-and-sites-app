import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {DrawerActions} from 'react-navigation-drawer';
import {SimpleLineIcons, Ionicons} from '@expo/vector-icons';

import {COMMON} from '../../theme/theme';

import MainScreen from './screens/main/main.screen';
import SiteDetails from './screens/site-details/site-details.screen';
import {Image, TouchableOpacity, View} from 'react-native';
import MainScreenStyles from './screens/main/main.screen.styles';

const ListingStack = createStackNavigator({
    Map: {
        screen: MainScreen
    },
    SiteDetails: {
        screen: SiteDetails
    }
}, {
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
                                        borderRadius={0}
                                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
                <SimpleLineIcons.Button name="magnifier"
                                        size={18}
                                        color="white"
                                        backgroundColor="transparent"
                                        borderRadius={0}
                                        onPress={() => {}} />
            </View>

        ),
        headerRight: (
            <View style={COMMON.headerRight}>
                <SimpleLineIcons.Button name="map"
                                        size={18}
                                        backgroundColor="transparent"
                                        borderRadius={0}
                                        color="white"
                                        onPress={() => {}} />
            </View>
        ),
    })
});

export default ListingStack;
