import { StyleSheet, Platform } from 'react-native';

const WelcomeScreenStyles = StyleSheet.create({
  welcomeBox: {
    paddingTop: 70,
    paddingBottom: 34
  },
  subtitle: {
    textAlign: 'center', paddingTop: 16
  },
  circleLogo: {
    width: 56,
    height: 56
  },
  logoWhite: {
    width: 169,
    height: 61
  },
  footer: {
    paddingTop: 34,
    paddingBottom: 34
  },
  languageSwitchText: {
    ...Platform.select({
      ios: {
        paddingTop: 2
      }
    })
  }
});

export default WelcomeScreenStyles;