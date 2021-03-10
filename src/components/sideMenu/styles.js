import {StyleSheet} from 'react-native';
import {YUKON_COLORS} from '../../theme/config';
import {YUKON_FONTS} from '../../theme/typings';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 32,
    },
    logo: {
        height: 60,
        width: 105,
        resizeMode: 'contain',
    },
    body: {
        flex: 1,
        justifyContent: 'space-between'
    },
    languageWraper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    langcode: {
        height: 46,
        width: 46,
        backgroundColor: YUKON_COLORS.primary_200,
        borderRadius: 23,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    langcodeText: {
        color: 'white',
        fontSize: 16,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    },
    menuLabel: {
        fontSize: 16,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        marginRight: 32
    },
    menuItem: {
        lineHeight: 30,
        paddingVertical: 8,
        paddingLeft: 16,
        paddingRight: 32
    }
})

export default styles
