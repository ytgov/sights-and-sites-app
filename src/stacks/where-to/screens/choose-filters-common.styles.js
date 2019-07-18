import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/config';

const ChooseFiltersCommonStyles = StyleSheet.create({
  footerButton: {
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerToggleIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 0
  },
  title: {
  },
  highwaysBox: {
    marginTop: 20,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  highwayName: {
    paddingTop: 9,
    paddingBottom: 9
  },
  toggleIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#939598',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  toggleIconActive: {
    backgroundColor: COLORS.accent
  }
});

export default ChooseFiltersCommonStyles;