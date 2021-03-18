import React, {useState, useRef} from 'react';
import {Dimensions, Image, View, TouchableOpacity} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Modal from 'react-native-modal';

import {APP_CONFIG} from '../../config';

import SiteCard from '../../components/siteCard';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import {showHeader} from '../../store/actions/core';
import {connect} from 'react-redux';
import routes from '../../navigation/routes';
import {NavigationEvents} from 'react-navigation';

import styles from './styles';

// Set access token
MapboxGL.setAccessToken(APP_CONFIG.map_box);

const CENTER = {
    latitude: 64.285062, // 63.389423,
    longitude: -136.197735, // -136.714739,
}

const pinIcon = require('./images/pin.png');
const closeButton = require('./images/btn-close.png');

const iconStyle = {
    iconImage: pinIcon,
    iconAllowOverlap: true,
    iconSize: 0.5,
};

const MapScreen = (props) => {
    const {
        listingFiltered,
        navigation,
        dispatchShowHeader
    } = props

    const mapRef = useRef()
    const [center, setCenter] = useState(CENTER)
    const [zoom, setZoom] = useState(4)
    const [pinnedItem, setPinnedItem] = useState(null)
    const [isModalVisible, setModalVisible] = useState(false);

    const onSourceLayerPress = (e) => {
        const selectedItem = e.nativeEvent.payload.properties
        setPinnedItem(selectedItem)
        setCenter({
            longitude: selectedItem.longitude,
            latitude: selectedItem.latitude
        })
        setZoom(5)
        setModalVisible(true)
    }

    const renderShapedSources = () => {
        let featureCollection = MapboxGL.geoUtils.makeFeatureCollection();
        listingFiltered.map(marker => {
            featureCollection = MapboxGL.geoUtils.addToFeatureCollection(
                featureCollection,
                {
                    type: 'Feature',
                    id: marker.site_id,
                    properties: marker,
                    geometry: {
                        type: 'Point',
                        coordinates: [marker.longitude, marker.latitude],
                    },
                },
            );
        });
        return (
            <MapboxGL.ShapeSource
                id="symbolLocationSource"
                hitbox={{width: 14, height: 33}}
                onPress={onSourceLayerPress}
                shape={featureCollection}
            >
                <MapboxGL.SymbolLayer
                    id="symbolLocationSymbols"
                    minZoomLevel={1}
                    style={iconStyle}
                />
            </MapboxGL.ShapeSource>
        )
    }

    return (
        <View style={{flex: 1}}>
            <NavigationEvents onWillFocus={() => dispatchShowHeader()} />
            <MapboxGL.MapView
                zoomLevel={11}
                ref={mapRef}
                onPress={() => {}}
                centerCoordinate={[center.longitude, center.latitude]}
                style={styles.mapWrapper}
            >
                <MapboxGL.UserLocation />
                <MapboxGL.Camera
                    centerCoordinate={[center.longitude, center.latitude]}
                    zoomLevel={zoom}
                />
                {renderShapedSources()}
            </MapboxGL.MapView>

            <Modal isVisible={isModalVisible}>
                <View>
                    <TouchableOpacity onPress={() => setModalVisible(false)}
                                      style={styles.closeButton}>
                        <Image source={closeButton} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        setModalVisible(false)
                        navigation.navigate(routes.SCREEN_SITE_DETAILS, {item: pinnedItem})
                    }}>
                        <SiteCard data={pinnedItem}
                                  imageStyle={{ height: 230 }} />
                    </TouchableOpacity>

                </View>
            </Modal>
        </View>
    );
};

MapScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.MAP} />
});

const mapStateToProps = (state) => {
    return {
        listingFiltered: state.listingStore.listingFiltered,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowHeader: () => dispatch(showHeader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
