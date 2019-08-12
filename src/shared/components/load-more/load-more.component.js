import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../../locale/locale';
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

LoadMore.propTypes = {
  callback: PropTypes.func.isRequired,
  text: PropTypes.string
}

LoadMore.defaultProps = {
  text: i18n.t('common.loadMoreDefault')
}

export default LoadMore;