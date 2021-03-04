import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerItems} from 'react-navigation-drawer';
import {withNavigation} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import YukonLogo from './images/yukon.png'

const SideMenu = (props) => {
    const {navigation} = props

    return (
        <ScrollView>
            <SafeAreaView
                style={{flex: 1}}
                forceInset={{top: 'always', horizontal: 'never'}}>

                <View style={styles.header}>
                    <Image source={YukonLogo}
                           style={styles.logo} />

                    <MaterialCommunityIcons.Button
                        name="close"
                        size={24}
                        color="black"
                        backgroundColor={'transparent'}
                        underlayColor={'transparent'}
                        iconStyle={{marginRight: 0}}
                        onPress={() => navigation.closeDrawer()}
                    />
                </View>

                <DrawerItems
                    {...props}
                    labelStyle={{ fontSize: 14}}
                    itemStyle={{lineHeight: 30}}
                    iconContainerStyle={{ marginRight: 0}}  />
            </SafeAreaView>
        </ScrollView>
    )
}

export default withNavigation(SideMenu)

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 32
    },
    logo: {
        height: 40,
        width: 105,
        resizeMode: 'contain'
    }
})