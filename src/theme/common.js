import {StyleSheet} from 'react-native';

const COMMON = StyleSheet.create({
    headerLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    headerRight: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: -8
    },
    content: {
        backgroundColor: '#FFFAF4'
    }
});

export default COMMON;
