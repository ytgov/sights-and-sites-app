import {Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const COMMON = StyleSheet.create({
    header: {
        backgroundColor: 'transparent',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        justifyContent: 'flex-start',
        borderBottomWidth: 0,
        alignItems: 'center',
        ...Platform.select({
            android: {
                height: 54,
                marginTop: getStatusBarHeight()
            },
            ios: {
                height: 64
            }
        })
    },
    headerBlack: {
        backgroundColor: '#000000'
    },
    headerWhite: {
        backgroundColor: '#ffffff'
    },
    footer: {
        borderTopWidth: 0,
        paddingBottom: 0,
        marginBottom: 0,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
        backgroundColor: '#000000'
    },
    content: {
        backgroundColor: '#FFFAF4'
    }
});

export default COMMON;
