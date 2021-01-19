import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../theme/config';

const NearbySitesStyles = StyleSheet.create({
    nearbySitesBox: {
        position: 'relative',
        paddingTop: 36,
        paddingBottom: 20,
        backgroundColor: COLORS.secondary
    },
    nearbySitesIcon: {
        position: 'absolute',
        alignSelf: 'center',
        top: -24,
        width: 48,
        height: 48
    }
});

export default NearbySitesStyles;
