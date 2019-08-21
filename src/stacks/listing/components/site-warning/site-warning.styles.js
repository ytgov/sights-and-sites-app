import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const SiteWarningStyles = StyleSheet.create({
  warningBox: {
    marginTop: 16,
    // paddingBottom: 8
  },
  warningIcon: {
    width: 36,
    height: 36,
    marginBottom: 5
  },
  warningText: {
    color: COLORS.warning
  }
});

export default SiteWarningStyles;