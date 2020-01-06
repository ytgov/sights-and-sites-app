import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/config';

const SiteWarningStyles = StyleSheet.create({
    warningBox: {
        marginTop: 16,
        paddingTop: 15,
        paddingBottom: 15,
        borderTopWidth: 1,
        borderTopColor: '#CBCBCB',
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB',
        flexDirection: 'row'
    },
    warningIcon: {
        width: 36,
        height: 36,
        marginBottom: 5,
        marginRight: 15
    },
    warningText: {
        color: COLORS.warning
    }
});

export default SiteWarningStyles;
