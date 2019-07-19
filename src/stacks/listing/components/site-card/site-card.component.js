import React from 'react';
import { View, Image } from 'react-native';
import SiteCardStyles from './site-card.styles';
import { H3, Body1, Caption } from '../../../../theme/theme';
import HighwayBadgeText from './site-card.styled-components';

const highwayIcon = require('../../../../../assets/stacks/listing/highway-number-background-icon.png');
const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');

const SiteCard = props => {
  return (
    <View style={SiteCardStyles.siteCardBox}>
      <View style={SiteCardStyles.siteCard}>
        <View style={SiteCardStyles.siteTypesBox}>
          <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeCampingIcon} />
          <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeWildlifeIcon} />
          <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeRecreationIcon} />
          <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeHistoryIcon} />
        </View>
        <H3 black>Five Finger Rapids</H3>
        <Body1 style={{ color: '#DB9F39' }}>95 km from here</Body1>
        <View style={SiteCardStyles.highwayInfoBox}>
          <View style={SiteCardStyles.highwayIcon}>
            <Image source={highwayIcon} resizeMode='contain' style={{ width: 18, height: 19 }} />
            <HighwayBadgeText>1</HighwayBadgeText>
          </View>
          <Caption black style={{ fontSize: 14 }}>Klondike Highway, km 380</Caption>
        </View>
      </View>
    </View>
  )
}

export default SiteCard;