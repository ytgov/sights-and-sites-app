import {StyleSheet} from 'react-native';
import {YUKON_FONTS} from '../../theme/typings';

const styles = StyleSheet.create({
    wrapper: {
        height: 23,
        width: 20,
        resizeMode: 'contain',
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        fontSize: 14
    }
})

export default styles;
