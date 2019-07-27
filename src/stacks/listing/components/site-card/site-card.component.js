import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import SiteCardStyles from './site-card.styles';
import SiteCardInfo from '../site-card-info/site-card-info.component';

const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');

const SiteCard = props => {
  const { item, navigation } = props;
  return (
    <View style={SiteCardStyles.siteCardBox}>
      <View style={SiteCardStyles.siteCard}>
        <TouchableOpacity onPress={() => navigation.navigate('SiteDetails', { item })}>
          <View style={SiteCardStyles.siteTypesBox}>
            <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeCampingIcon} />
            <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeWildlifeIcon} />
            <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeRecreationIcon} />
            <Image style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeHistoryIcon} />
          </View>
          <SiteCardInfo />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SiteCard;