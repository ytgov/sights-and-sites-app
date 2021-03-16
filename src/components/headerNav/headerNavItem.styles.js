import {StyleSheet} from 'react-native';
import {YUKON_COLORS} from '../../theme/config';
import {YUKON_FONTS} from '../../theme/typings';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: YUKON_COLORS.primary_200,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 12
    },
    labelWrapper: {
        flexDirection: 'row',
        marginTop: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        fontSize: 12,
        color: 'white'
    }
})

export default styles
