import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/config';


const SiteCardStyles = StyleSheet.create({
    siteCardBox: {
        position: 'relative',
        top: -20,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10
    },
    siteCard: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderTopColor: COLORS.accent,
        borderTopWidth: 4,
        paddingTop: 16,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16
    },
    siteTypesBox: {
        flexDirection: 'row',
        paddingBottom: 10
    },
    siteTypeIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    }
});

export default SiteCardStyles;
