import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, ImageBackground} from 'react-native';
import {Image as ImageCache} from 'react-native-expo-image-cache';
import {useTranslation} from 'react-i18next';
import {APP_CONFIG} from '~app/config';
import {H3, Body, Small} from '~theme/typings';

import styles from './styles';
import {getHighwayFromString} from '~shared/mapping/mapHighways';
import {
    getUserLocation,
    getUserToSiteDistance,
    setSiteDistance,
} from '~store/actions/core';
import {connect} from 'react-redux';

const badge = require('./images/badge-highway.png');

const SiteCard = (props) => {
    const preview = {uri: APP_CONFIG.cache.imagePreview};
    const {
        imageStyle,
        withDistance,
        userLocation,
        cachedDistances,
        dispatchGetUserToSiteDistance,
        data
    } = props

    const {
        site_id,
        site_name,
        images: { roadtrip_landscape },
        site_types,
        highway_km,
        highway,
        region,
    } = data

    const [distance, setDistance] = useState(0);
    const {t} = useTranslation()

    useEffect(() => {
        if (withDistance) {
            dispatchGetUserToSiteDistance(userLocation, data, cachedDistances);

            if (cachedDistances.hasOwnProperty(site_id)) {
                setDistance(cachedDistances[site_id].distance)
            }
        }
    }, [site_id, cachedDistances])

    return (
        <View style={styles.wrapper}>
            <ImageCache
                {...{preview, uri: roadtrip_landscape}}
                tint={'light'}
                transitionDuration={300}
                resizeMode='cover'
                // fallback={fallback}
                style={{...styles.image, ...imageStyle}}/>

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
                        <Body black>{`${t(`filterHighways.${highway.id}`)}, km ${highway_km}`}</Body>
                        <Body black>{`${t(`filterRegions.${region.id}`)}`}</Body>
                        {distance !== 0 &&
                            <Small style={{ marginTop: 8 }}>{`${distance} km away`}</Small>}

                    </View>
                </View>
            </View>
        </View>
    );
};

SiteCard.propTypes = {
    data: PropTypes.shape({
        site_name: PropTypes.string.isRequired,
        images: PropTypes.shape({
            roadtrip_landscape: PropTypes.string.isRequired,
            roadtrip_portrait: PropTypes.string.isRequired,
        }),
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
    }).isRequired,
    imageStyle: PropTypes.object,
    withDistance: PropTypes.bool
}

SiteCard.defaultProps = {
    imageStyle: {},
    withDistance: false
}

const mapStateToProps = (state) => {
    return {
        cachedDistances: state.coreStore.distances,
        userLocation: state.coreStore.userLocation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchGetUserLocation: () => dispatch(getUserLocation()),
        dispatchGetUserToSiteDistance: (userLocation, site, cachedDistances) => dispatch(getUserToSiteDistance(userLocation, site, cachedDistances)),
        dispatchSiteDistance: (site_id, distance) => dispatch(setSiteDistance(site_id, distance))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteCard);

