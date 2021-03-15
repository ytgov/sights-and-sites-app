import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, ImageBackground} from 'react-native';
import {Image as ImageCache} from 'react-native-expo-image-cache';
import {APP_CONFIG} from '../../config';
import {H3, Body, Small} from '../../theme/typings';

import styles from './styles';
import {getSiteTypeFromString} from '../../shared/mapping/mapSiteTypes';
import {getHighwayFromString} from '../../shared/mapping/mapHighways';

const badge = require('./images/badge-highway.png');

const SiteCard = (props) => {
    const preview = {uri: APP_CONFIG.cache.imagePreview};
    const {site_name, image_url, site_types, highway_km, highway_name, region} = props.data
    const highway = getHighwayFromString(highway_name);

    return (
        <View>
            <ImageCache
                {...{preview, uri: image_url}}
                tint={APP_CONFIG.cache.tint}
                transitionDuration={APP_CONFIG.cache.transitionDuration}
                resizeMode='cover'
                // fallback={fallback}
                style={styles.image}/>

            <View style={styles.contentWrapper}>
                <View style={styles.siteTypes}>
                    {site_types.map((type, i) =>
                        <Image key={i} source={type.icon} style={{ marginRight: 12}} />)}
                </View>

                <H3 black style={{ marginTop: -8 }}>{site_name}</H3>
                <View style={{ flexDirection: 'row', marginTop: 12}}>
                    <ImageBackground source={badge} style={styles.badge}>
                        <Text style={styles.badgeText}>{highway.roadNumber}</Text>
                    </ImageBackground>

                    <View style={{ marginLeft: 12}}>
                        <Body black>{`${highway.name}, km ${highway_km}`}</Body>
                        <Body black>{region.name}</Body>
                        <Small style={{ marginTop: 8 }}>{'400.89 km away'}</Small>
                    </View>
                </View>
            </View>
        </View>
    );
};

SiteCard.propTypes = {
    data: PropTypes.shape({
        site_name: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        site_types: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                icon: PropTypes.node.isRequired
            })
        ).isRequired,
        highway_km: PropTypes.number.isRequired,
        highway_name: PropTypes.string.isRequired,
        region: PropTypes.shape({
            name: PropTypes.string.isRequired,
            map: PropTypes.node.isRequired,
            swoosh: PropTypes.node.isRequired
        }).isRequired
    }).isRequired
}

export default SiteCard;
