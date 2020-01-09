import React from 'react';
import {Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import SiteCardInfoStyles from './site-card-info.styles';
import {Caption, H3} from '../../../../theme/theme';
import HighwayBadgeText from './site-card-info.styled-components';
import SiteType from '../../../../types/site.type';
import SiteDistance from '../site-distance/site-distance.component';
import SiteAmenties from '../site-amenties/site-amenties.component';
import Tooltip from 'rn-tooltip';

const highwayIcon = require('../../../../../assets/stacks/listing/highway-number-background-icon.png');

const SiteCardInfo = props => {
    const {item, locale, parentLocation} = props;
    const itemInfo = item;
    const itemLocation = {
        latitude: item.latitude,
        longitude: item.longitude
    }
    return (
        <View>
            <H3 black>{itemInfo.site_name}</H3>
            <SiteAmenties item={item} locale={locale}/>
            <SiteDistance parentLocation={parentLocation} siteLocation={itemLocation}/>
            <View style={SiteCardInfoStyles.highwayInfoBox}>
                <View style={SiteCardInfoStyles.highwayIcon}>
                    <Image source={highwayIcon} resizeMode='contain' style={{width: 18, height: 19}}/>
                    <HighwayBadgeText>{String(itemInfo.highway_km).substring(0, 1)}</HighwayBadgeText>
                </View>

                <Caption black style={{fontSize: 14}}>
                    {itemInfo.highway_name}, km {itemInfo.highway_km}.
                </Caption>
            </View>
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
