import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, StyleSheet, ImageBackground} from 'react-native';
import {Image as ImageCache} from 'react-native-expo-image-cache';
import {APP_CONFIG} from '../../config';
import {H3, Body, YUKON_FONTS} from '../../theme/typings';

import styles from './styles';
import {getSiteTypeFromString} from '../../shared/mapping/mapSiteTypes';

const SiteCard = (props) => {
    const preview = {uri: APP_CONFIG.cache.imagePreview};

    const {site_name, image_url, site_types, highway_km, highway_name, region} = DATA
    const siteTypes = site_types.map(s => getSiteTypeFromString(s))

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
                    {siteTypes.map((type, i) =>
                        <Image source={type.icon} style={{ marginRight: 12}} />)}
                </View>

                <H3 black>{site_name}</H3>
                <View style={{ flexDirection: 'row', marginTop: 12}}>
                    <ImageBackground style={{height: 20, width: 20, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{ color: 'white', fontFamily: YUKON_FONTS.MONTSERRAT_BOLD}}>{'1'}</Text>
                    </ImageBackground>

                    <View style={{ marginLeft: 12}}>
                        <Body black>{`${highway_name}, km ${highway_km}`}</Body>
                        <Body black>{region}</Body>
                    </View>
                </View>

            </View>


        </View>
    );
};

export default SiteCard;


const DATA = {
    beach: false,
    boat_launch: true,
    changed_ts: 1614892814,
    highway_km: 1546,
    highway_name: "Alaska Highway",
    image_url: "https://yukon.ca/sites/yukon.ca/files/env/env-imgs/12-aishihiki_campground_yg.jpg",
    latitude: 61.197,
    longitude: -136.995,
    outhouse: true,
    outhouse_accessible: true,
    playground: false,
    region: "Kluane",
    secondary_road_km: 42,
    secondary_road_name: "Aishihik Lake Road",
    site_description: "Aishihik is a misspelling of the Southern Tutchone word Äshèyi, which refers to the village site at the head of the lake. It's also called Män Shäw for \"big lake.\" Wood Bison were reintroduced to this area in the 1980s.",
    site_directions: "Traveling westbound turn right off the highway at Otter Falls Cutoff and follow the gravel road for 42 km.",
    site_id: 1640,
    site_name: "Aishihik Lake Campground",
    site_types: ["Camping", "Recreation"],
    trail: false,
    warning: "Check for road conditions and exercise caution on the narrow gravel road. Beware of strong winds and waves on the lake.",
}
