import { StyleSheet, Platform } from 'react-native';

const MoreStyles = StyleSheet.create({
  btnBox: {
    position: 'relative',
    marginTop: 20,
    marginBottom: 20
  },
  btnText: {
    paddingTop: 6
  },
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
  },
  LanguageLayout:{
    flexDirection:"row",
    width:"80%",
    justifyContent:"space-around",
    marginTop:20
  }
});

export default MoreStyles;