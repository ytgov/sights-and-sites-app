import React from 'react';
import { View, Image } from 'react-native';
import SiteWarningStyles from './site-warning.styles';
import { Body1 } from '../../../../theme/theme';

const warningIcon = require('../../../../../assets/stacks/listing/warning-icon.png');

const SiteWarning = props => {
  return (
    <View style={SiteWarningStyles.warningBox}>
      <Image source={warningIcon} resizeMode='contain' style={SiteWarningStyles.warningIcon} />
      <Body1 style={SiteWarningStyles.warningText}>
        Beware of high winds and waves on this narrow lake.
      </Body1>
    </View>
  )
}

export default SiteWarning;