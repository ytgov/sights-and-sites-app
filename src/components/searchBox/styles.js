import {StyleSheet} from 'react-native'
import {YUKON_COLORS} from '~theme/config';
import DeviceInfo from 'react-native-device-info';
import {YUKON_FONTS} from '~theme/typings';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: YUKON_COLORS.primary_600,
        height: DeviceInfo.hasNotch() ? 110 : 80,
        justifyContent: 'flex-end'
    },
    inner: {
        height: 60,
        marginRight: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        padding: 20,
        color: 'white',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
    }
})

export default styles
