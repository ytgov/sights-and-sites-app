import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';
import IntroStepsCommonStyles from '../intro.styles';

const IntroStepFourStyles = StyleSheet.create({
  ...IntroStepsCommonStyles,

  checkIcon: {
    overflow: 'hidden',
    marginTop: 10,
    backgroundColor: COLORS.accent,
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    lineHeight: 40
  }
});

export default IntroStepFourStyles;