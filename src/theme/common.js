import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const COMMON = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    justifyContent: 'flex-start',
    height: 52,
    alignItems: 'center',
    marginTop: getStatusBarHeight()
  },
  headerBlack: {
    backgroundColor: '#000000'
  },
  footer: {
    backgroundColor: '#000000'
  }
});

export default COMMON;