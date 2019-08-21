import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Helpers } from '../../../theme/theme';

const NavigationBackButton = props => {
  const { dark } = props;

  return (
    <TouchableOpacity style={{ width: 30, alignItems: 'flex-start', justifyContent: 'flex-start' }} onPress={() => { props.navigation.goBack(null) }}>
      <Ionicons name="ios-arrow-back" size={32} color={dark ? '#929496' : '#FFFFFF'} style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
    </TouchableOpacity>
  )
}

NavigationBackButton.propTypes = {
  dark: PropTypes.bool
}

NavigationBackButton.defaultProps = {
  dark: false
}

export default NavigationBackButton;
