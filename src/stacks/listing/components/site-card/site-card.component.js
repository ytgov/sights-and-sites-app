import React from 'react';
import { View } from 'react-native';
import SiteCardStyles from './site-card.styles';
import { H3, Body1, Caption } from '../../../../theme/theme';

const SiteCard = props => {
  return (
    <View style={SiteCardStyles.cardBox}>
      <H3 black>Five Finger Rapids</H3>
      <Body1 style={{ color: '#DB9F39' }}>95 km from here</Body1>
      <Caption black style={{ fontSize: 14 }}>Klondike Highway, km 380</Caption>
    </View>
  )
}

export default SiteCard;