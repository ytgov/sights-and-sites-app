import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/config';

const MoreCommonStyles = StyleSheet.create({
    contentPadded: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 40
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#CBCBCB',
        marginTop: 25,
        marginBottom: 25
    },
    sectionTitleBox: {
        maxWidth: '85%',
        paddingBottom: 10
    },
    linkBox: {
        paddingBottom: 10
    },
    link: {
        alignSelf: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.yellow
    }
});

export default MoreCommonStyles;
