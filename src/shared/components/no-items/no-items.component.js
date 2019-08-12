import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import i18n from '../../../locale/locale';
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

NoItems.propTypes = {
  value: PropTypes.string
}

NoItems.defaultProps = {
  value: i18n.t('common.noItemsDefault')
}

export default NoItems;