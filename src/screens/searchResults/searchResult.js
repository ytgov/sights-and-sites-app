import React from 'react';
import PropTypes from 'prop-types';
import {Image, ImageBackground, Text, View} from 'react-native';
import styles from '~components/siteCard/styles';
import {Body, H3, Small} from '~theme/typings';
import {getHighwayFromString} from '~app/shared/mapping/mapHighways';

const badge = require('~components/siteCard/images/badge-highway.png');
const SearchResult = (props) => {
    const {
        data
    } = props

    const {
        site_name,
        site_types,
        highway_km,
        highway_name,
        region
    } = data

    const highway = getHighwayFromString(highway_name);

    return (
        <View style={{marginVertical: 20}}>
            <H3 black>{site_name}</H3>
            <View style={{ flexDirection: 'row', marginTop: 12}}>
                <ImageBackground source={badge} style={styles.badge}>
                    <Text style={styles.badgeText}>{highway.roadNumber}</Text>
                </ImageBackground>

                <View style={{ marginLeft: 12}}>
                    <Body black>{`${highway.name}, km ${highway_km}`}</Body>
                    <Body black>{region.name}</Body>
                </View>
            </View>
        </View>
    );
};

SearchResult.propTypes = {
    data: PropTypes.shape({
        site_name: PropTypes.string.isRequired,
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
    imageStyle: PropTypes.object
}

export default SearchResult;
