import {StyleSheet} from 'react-native';
import {YUKON_COLORS} from './config';

const COMMON = StyleSheet.create({
  headerLeft: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -8,
  },
  content: {
    backgroundColor: '#FFFAF4',
  },
  headerSearch: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  linkBox: {
    paddingBottom: 10,
  },
  link: {
    alignSelf: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: YUKON_COLORS.primary,
  },
});

export default COMMON;
