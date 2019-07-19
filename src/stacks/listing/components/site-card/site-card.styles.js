import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const SiteCardStyles = StyleSheet.create({
  cardBox: {
    position: 'relative',
    top: -20,
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderTopColor: COLORS.accent,
    borderTopWidth: 4,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16
  }
});

export default SiteCardStyles;