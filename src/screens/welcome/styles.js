import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: 20
    },
    header: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    footer: {
        alignItems: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between',
        marginVertical: 24
    }
})

export default styles;
