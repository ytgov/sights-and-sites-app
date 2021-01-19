import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';
import SiteCardInfoStyles from './site-card-info.styles';
import {Caption, H3} from '../../../../theme/theme';
import HighwayBadgeText from './site-card-info.styled-components';
import SiteType from '../../../../types/site.type';
import SiteDistance from '../site-distance/site-distance.component';
import SiteAmenties from '../site-amenties/site-amenties.component';

const highwayIcon = require('../../../../../assets/stacks/listing/highway-number-background-icon.png');

const SiteCardInfo = props => {
    const {item, locale, parentLocation} = props;
    const itemInfo = item;
    const itemLocation = {
        latitude: item.latitude,
        longitude: item.longitude
    }
    let heighways = {
        'Alaska Highway': 1,
        'Klondike Highway': 2,
        'Haines Road': 3,
        'Robert Campbell Highway': 4,
        'Dempster Highway': 5,
        'Canol Road': 6,
        'Atlin Road': 7,
        'Tagish Road': 8,
        'Top of the World Highway': 9,
        'Nahanni Range Road': 10,
        'Silver Trail': 11,
        'Takhini Hot Springs Road': 14,
        'Mitchell Road': 15,
        'Stewart-Cassiar Highway': 37,
    };
    return (
        <View>
            <H3 black>{itemInfo.site_name}</H3>
            <SiteAmenties item={item} locale={locale}/>
            <SiteDistance parentLocation={parentLocation} site={item} siteLocation={itemLocation}/>
            {
                itemInfo.highway_name ? (
                    <View style={SiteCardInfoStyles.highwayInfoBox}>
                        <View style={SiteCardInfoStyles.highwayIcon}>
                            <Image source={highwayIcon} resizeMode='contain' style={{width: 18, height: 19}}/>
                            <HighwayBadgeText>{heighways[itemInfo.highway_name]}</HighwayBadgeText>
                        </View>

                        <Caption black style={{fontSize: 14, width: '90%'}}>
                            {itemInfo.highway_name}, km {itemInfo.highway_km}
                            {itemInfo.secondary_road_name ? `. ${itemInfo.secondary_road_name} km ${itemInfo.secondary_road_km}.` : null}
                        </Caption>
                    </View>
                ) : null
            }

        </View>
    )
}

SiteCardInfo.propTypes = {
    item: SiteType.isRequired,
    locale: PropTypes.string.isRequired,
    parentLocation: PropTypes.shape({id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number})
}

SiteCardInfo.defaultProps = {
    parentLocation: null
}

export default SiteCardInfo;
