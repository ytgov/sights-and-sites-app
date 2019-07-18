import { StyleSheet } from 'react-native';

const Helpers = StyleSheet.create({
  fullHeight: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  fullWidth: {
    width: '100%'
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  alignItemsEnd: {
    alignItems: 'flex-end'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  positionRelative: {
    position: 'relative'
  }
});

export default Helpers;