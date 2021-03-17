import {StyleSheet, Dimensions} from 'react-native';
import {YUKON_FONTS} from '../../theme/typings';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
    },
    image: {
        height: 270,
    },
    contentWrapper: {
        paddingHorizontal: 16,
        paddingBottom: 36,
    },
    siteTypes: {
        flexDirection: 'row',
        top: -24
    },
    badge: {
        height: 20,
        width: 22,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: 6
    },
    badgeText: {
        color: 'white',
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        marginTop: -2
    }
})

export default styles
