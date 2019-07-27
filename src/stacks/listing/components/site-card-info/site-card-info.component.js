import React from 'react';
import { View, Image } from 'react-native';
import SiteCardInfoStyles from './site-card-info.styles';
import { H3, Body1, Caption } from '../../../../theme/theme';
import HighwayBadgeText from './site-card-info.styled-components';

const highwayIcon = require('../../../../../assets/stacks/listing/highway-number-background-icon.png');

const SiteCardInfo = props => {
  return (
    <View>
      <H3 black>Five Finger Rapids</H3>
      <Body1 style={{ color: '#DB9F39' }}>95 km from here</Body1>
      <View style={SiteCardInfoStyles.highwayInfoBox}>
        <View style={SiteCardInfoStyles.highwayIcon}>
          <Image source={highwayIcon} resizeMode='contain' style={{ width: 18, height: 19 }} />
          <HighwayBadgeText>1</HighwayBadgeText>
        </View>
        <Caption black style={{ fontSize: 14 }}>Klondike Highway, km 380</Caption>
      </View>
    </View>
  )
}

export default SiteCardInfo;