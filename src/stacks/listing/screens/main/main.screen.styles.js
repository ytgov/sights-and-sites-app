import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const MainScreenStyles = StyleSheet.create({
  switchBtnBox: {
    width: '50%',
  },
  switchBtnBoxLeft: {
    borderRightWidth: 2,
    borderRightColor: '#ffffff'
  },
  switchBtnBoxRight: {
    borderLeftWidth: 2,
    borderLeftColor: '#ffffff'
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
  }
})

export default MainScreenStyles;