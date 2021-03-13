import {StyleSheet} from 'react-native';
import {YUKON_FONTS} from '../../theme/typings';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    langCodeWrapper: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 21,
        height: 42,
        width: 42,
        alignItems: 'center',
        justifyContent: 'center'
    },
    langCode: {
        color: 'white',
        fontSize: 16,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    },
    label: {
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
    }
})

export default styles;
