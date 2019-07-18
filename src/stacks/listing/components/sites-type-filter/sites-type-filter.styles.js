import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/config';

const SitesTypeFilterStyles = StyleSheet.create({
  filtersBox: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLORS.secondary,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: '100%'
  },
  filtersRow: {
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 10
  }
});

export default SitesTypeFilterStyles;