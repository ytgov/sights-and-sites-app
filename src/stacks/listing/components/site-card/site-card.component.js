import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import SiteCardStyles from './site-card.styles';
import SiteCardInfo from '../site-card-info/site-card-info.component';
import SiteType from '../../../../types/site.type';

const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');

const SiteCard = props => {
  const { item, locale, navigation } = props;
  return (
    <View style={SiteCardStyles.siteCardBox}>
      <View style={SiteCardStyles.siteCard}>
        <TouchableOpacity onPress={() => navigation.navigate('SiteDetails', { item })}>
          <View style={SiteCardStyles.siteTypesBox}>
            {
              item.siteTypes.map(siteType => {
                // TODO move site amenties to global config
                switch (siteType) {
                  case 1: {
                    return (<Image key='1' style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeCampingIcon} />)
                  }
                  case 2: {
                    return (<Image key='2' style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeWildlifeIcon} />)
                  }
                  case 3: {
                    return (<Image key='3' style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeRecreationIcon} />)
                  }
                  case 4: {
                    return (<Image key='4' style={SiteCardStyles.siteTypeIcon} resizeMode="contain" source={siteTypeHistoryIcon} />)
                  }
                  default: {
                    return null
                  }
                }
              })
            }
          </View>
          <SiteCardInfo item={item} locale={locale} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

SiteCard.propTypes = {
  item: SiteType.isRequired,
  locale: PropTypes.string.isRequired
}

export default SiteCard;