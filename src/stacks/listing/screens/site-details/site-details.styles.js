import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const SiteDetailsStyles = StyleSheet.create({
  siteImgBox: {
    height: 215,
    width: '100%',
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 4,
    position: 'relative',
    marginBottom: 24
  },
  siteImg: {
    width: '100%',
    height: '100%'
  },
  siteContentBox: {
    paddingBottom: 50,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default SiteDetailsStyles;