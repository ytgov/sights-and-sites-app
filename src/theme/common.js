import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const COMMON = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    justifyContent: 'flex-start',
    borderBottomWidth: 0,
    height: 52,
    alignItems: 'center',
    ...Platform.select({
      android: {
        marginTop: getStatusBarHeight()
      }
    })
  },
  headerBlack: {
    backgroundColor: '#000000'
  },
  footer: {
    borderTopWidth: 0,
    paddingBottom: 0,
    marginBottom: 0,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    backgroundColor: '#000000'
  }
});

export default COMMON;