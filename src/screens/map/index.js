import React, {useState, useRef} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Modal from 'react-native-modal';
import * as Location from 'expo-location';
import {NavigationEvents} from 'react-navigation';

import {APP_CONFIG} from '~app/config';

import SiteCard from '~components/siteCard';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import {hideSearch, showHeader} from '~store/actions/core';
import {connect} from 'react-redux';
import routes from '~navigation/routes';

import styles from './styles';

// Set access token
MapboxGL.setAccessToken(APP_CONFIG.map_box);

const CENTER = {
    latitude: 64.285062, // 63.389423,
    longitude: -136.197735, // -136.714739,
}

const pinIcon = require('./images/pin.png');
const pinYellowIcon = require('./images/pin-yellow.png');
const closeButton = require('./images/btn-close.png');
const locationIcon = require('./images/location.png');
const locationActiveIcon = require('./images/location-active.png');

const iconStyle = {
    iconImage: pinIcon,
    iconAllowOverlap: true,
    iconSize: 0.5,
};

const MapScreen = (props) => {
    const {
        listingFiltered,
        navigation,
        dispatchShowHeader,
        dispatchHideSearch
    } = props

    const mapRef = useRef()
    const [center, setCenter] = useState(CENTER)
    const [zoom, setZoom] = useState(4)
    const [pinnedItem, setPinnedItem] = useState(null)
    const [isModalVisible, setModalVisible] = useState(false);
    const [showUserLocation, setShowUserLocation] = useState(false);

    const onUserLocationPressed = () => {
        const nextShowUserLocation = !showUserLocation
        setShowUserLocation(nextShowUserLocation)

        // Center the map to user location
        if (nextShowUserLocation) {
            Location.getCurrentPositionAsync()
                .then(({coords: {latitude, longitude}}) => {
                    setCenter({latitude, longitude})
                });
        }
    }

    const onSourceLayerPress = (e) => {
        const selectedItem = e.nativeEvent.payload.properties.data
        setPinnedItem(selectedItem)
        setCenter({
            longitude: selectedItem.longitude,
            latitude: selectedItem.latitude
        })
        setZoom(5)
        setModalVisible(true)
    }

    const getShapedSources = () => {
        const features = listingFiltered.map(item => {
            return {
                type: 'Feature',
                id: item.site_id.toString(),
                properties: {
                    data: item
                },
                geometry: {
                    type: 'Point',
                    coordinates: [item.longitude, item.latitude],
                },
            }
        });

        return {
            type: 'FeatureCollection',
            features: features
        }
    }

    return (
        <View style={{flex: 1}}>
            <NavigationEvents onWillFocus={() => {
                dispatchShowHeader();
                dispatchHideSearch();
            }} />
            <MapboxGL.MapView
                showUserLocation={true}
                zoomLevel={11}
                ref={mapRef}
                centerCoordinate={[center.longitude, center.latitude]}
                style={styles.mapWrapper}
            >
                {showUserLocation && <MapboxGL.UserLocation />}
                <MapboxGL.Camera
                    centerCoordinate={[center.longitude, center.latitude]}
                    zoomLevel={zoom}
                />

                <MapboxGL.ShapeSource
                    id="markerShapedSources"
                    hitbox={{width: 14, height: 33}}
                    onPress={onSourceLayerPress}
                    shape={getShapedSources()}>
                    <MapboxGL.SymbolLayer
                        id="symbolLocationSymbols"
                        minZoomLevel={1}
                        style={iconStyle} />
                </MapboxGL.ShapeSource>
            </MapboxGL.MapView>

            <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => onUserLocationPressed()}
                  style={{
                      position: 'absolute',
                      top: 16, right: 16
                  }}>
                <Image source={showUserLocation ? locationActiveIcon : locationIcon} />
            </TouchableOpacity>

            <Modal isVisible={isModalVisible}>
                <View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setModalVisible(false)}
                        style={styles.closeButton}>
                        <Image source={closeButton} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            setModalVisible(false)
                            navigation.navigate(routes.SCREEN_SITE_DETAILS, {item: pinnedItem})
                        }}>
                        {pinnedItem && <SiteCard data={pinnedItem}
                                                 imageStyle={{ height: 230 }} />}
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
        dispatchShowHeader: () => dispatch(showHeader()),
        dispatchHideSearch: () => dispatch(hideSearch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
