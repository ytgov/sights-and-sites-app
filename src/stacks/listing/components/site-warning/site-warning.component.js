import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import SiteWarningStyles from './site-warning.styles';
import { Body1 } from '../../../../theme/theme';

const warningIcon = require('../../../../../assets/stacks/listing/warning-icon.png');

const SiteWarning = props => {
  const { value } = props;
  return (
    (value) ? <View style={SiteWarningStyles.warningBox}>
      <Image source={warningIcon} resizeMode='contain' style={SiteWarningStyles.warningIcon} />
      <Body1 style={SiteWarningStyles.warningText}>{value}</Body1>
    </View> : null
  )
}

SiteWarning.propTypes = {
  value: PropTypes.string
}

SiteWarning.defaultProps = {
  value: ''
}

export default SiteWarning;