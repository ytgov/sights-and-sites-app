import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 2,
    },
    labelWrapper: {
        flex: 1,
        marginHorizontal: 16
    },
    icon: {
        height: 46,
        width: 46
    }
})

export const leadingStyle = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    default: {
        resizeMode: 'contain',
    },
    active: {
        position: 'absolute',
        resizeMode: 'contain'
    }
})
