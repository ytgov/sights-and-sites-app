import {StyleSheet} from 'react-native';
import {COLORS} from '../../../theme/config';

const NoItemsStyles = StyleSheet.create({
    noItemsBoxPadded: {
        paddingTop: 40, paddingLeft: 20, paddingRight: 20
    },
    noItemsBox: {
        backgroundColor: '#fff', padding: 20, borderTopColor: COLORS.accent,
        borderTopWidth: 4,
    }
});

export default NoItemsStyles;
