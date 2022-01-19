import {StyleSheet} from 'react-native';
import {YUKON_COLORS} from '~theme/config';
import {YUKON_FONTS} from '~theme/typings';


const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 1,
        padding: 4,
    },
    title: {
        marginLeft: 16
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default styles
