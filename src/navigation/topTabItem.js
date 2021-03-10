import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {MaterialTopTabBar} from 'react-navigation-tabs';

const TopTabItem = (props) => {
    console.log('Here', props)
    return (
        <View style={styles.wrapper}>
            <Text>{props.navigationState.key}</Text>
        </View>
    );
};

export default TopTabItem;

const styles = StyleSheet.create({
    wrapper: {
        height: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    }
})
