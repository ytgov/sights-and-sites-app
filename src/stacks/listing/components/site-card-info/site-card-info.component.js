import React from 'react';
import { View, Image } from 'react-native';
import SiteCardInfoStyles from './site-card-info.styles';
import { H3, Body1, Caption } from '../../../../theme/theme';
import HighwayBadgeText from './site-card-info.styled-components';

const highwayIcon = require('../../../../../assets/stacks/listing/highway-number-background-icon.png');

const SiteCardInfo = props => {
  const { item, locale } = props;
  const itemInfo = item[locale];
  return (
    <View>
      <H3 black>{itemInfo.title}</H3>
      <Body1 style={{ color: '#DB9F39' }}>95 km from here</Body1>
      <View style={SiteCardInfoStyles.highwayInfoBox}>
        <View style={SiteCardInfoStyles.highwayIcon}>
          <Image source={highwayIcon} resizeMode='contain' style={{ width: 18, height: 19 }} />
          <HighwayBadgeText>{itemInfo.highway.number}</HighwayBadgeText>
        </View>
        <Caption black style={{ fontSize: 14 }}>{itemInfo.highway.name}</Caption>
      </View>
    </View>
  )
}

export default SiteCardInfo;