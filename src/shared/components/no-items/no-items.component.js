import React from 'react';
import { View } from 'react-native';
import { Helpers, H3 } from '../../../theme/theme';
import NoItemsStyles from './no-items.styles';

const NoItems = props => {
  const { value } = props;

  return (
    <View style={NoItemsStyles.noItemsBoxPadded}>
      <View style={NoItemsStyles.noItemsBox}>
        <H3 black style={Helpers.textAlignCenter}>{value}</H3>
      </View>
    </View>
  )
};

export default NoItems;