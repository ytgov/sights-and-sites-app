import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Helpers, Body2 } from '../../../theme/theme';
import LoadMoreStyles from './load-more.styles';

const LoadMore = props => {
  const { callback, text } = props;
  return (
    <View style={LoadMoreStyles.loadMoreBox}>
      <TouchableOpacity onPress={callback}>
        <Ionicons name="ios-arrow-down" size={32} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
      </TouchableOpacity>
      <Body2 style={Helpers.textAlignCenter}>{text}</Body2>
    </View>
  )
}

export default LoadMore;