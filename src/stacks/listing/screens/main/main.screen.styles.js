import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const MainScreenStyles = StyleSheet.create({
  switchBtnBox: {
    width: '50%',
  },
  switchBtnBoxLeft: {
    borderRightWidth: 2,
    borderRightColor: '#000'
  },
  switchBtnBoxRight: {
    borderLeftWidth: 2,
    borderLeftColor: '#000'
  },
  switchBtn: {
    width: '100%',
    backgroundColor: COLORS.secondary,
    height: 36
  },
  switchBtnActive: {
    borderBottomColor: COLORS.accent,
    borderBottomWidth: 4
  },
  switchBtnText: {
    textAlign: 'center',
    width: '100%',
    lineHeight: 36,
    color: '#FFFFFF'
  },
  searchIcon: {
    width: 18,
    height: 18
  }
})

export default MainScreenStyles;