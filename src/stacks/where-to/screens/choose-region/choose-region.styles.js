import { StyleSheet } from 'react-native';
import ChooseFiltersCommonStyles from '../choose-filters-common.styles';

const ChooseRegionStyles = StyleSheet.create({
  ...ChooseFiltersCommonStyles,
  highwayName: {
    paddingTop: 8,
    zIndex: 2
  }
});

export default ChooseRegionStyles;