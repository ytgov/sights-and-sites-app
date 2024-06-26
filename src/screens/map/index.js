import React, {useState, useEffect} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
// import MapboxGL from '@react-native-mapbox-gl/maps';
import MapboxGL from '@rnmapbox/maps';
import Modal from 'react-native-modal';
import {NavigationEvents} from 'react-navigation';

import {APP_CONFIG} from '~app/config';

import SiteCard from '~components/siteCard';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import {getUserLocation, hideSearch, showHeader} from '~store/actions/core';
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

const initialShapedSources = {
    type: 'FeatureCollection',
    features: []
}

const MapScreen = (props) => {
    const {
        listingFiltered,
        navigation,
        dispatchShowHeader,
        dispatchHideSearch,
        dispatchGetUserLocation,
        userLocation
    } = props

    let mapInstance = null;
    const [center, setCenter] = useState(CENTER)
    const [items, setItems] = useState([])
    const [shapedSources, setShapeSources] = useState(initialShapedSources)
    const [zoom, setZoom] = useState(4)
    const [pinnedItem, setPinnedItem] = useState(null)
    const [isModalVisible, setModalVisible] = useState(false);
    const [showUserLocation, setShowUserLocation] = useState(false);

    const onUserLocationPressed = () => {
        setShowUserLocation(!showUserLocation);
        dispatchGetUserLocation((coordinates) => {
            const { longitude } = coordinates;
            if (!longitude) {
                setShowUserLocation(false);
            }
        });
    }

    const onSourceLayerPress = (e) => {
        const selectedItem = e.nativeEvent.payload.properties.data
        setPinnedItem(selectedItem)
        setModalVisible(true)
    }

    const getShapedSources = (items) => {
        const features = items.map(item => {
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

    useEffect(() => {
        // Set items
        setItems(listingFiltered)

        // Set shapedSources
        const s = getShapedSources(listingFiltered)
        setShapeSources(s)
    }, [listingFiltered])

    /* Move the map to the user location */
    useEffect(() => {
        // If there is no user location.
        if (!userLocation) return
        const { longitude, latitude } = userLocation;
        if (showUserLocation && mapInstance && longitude && latitude) {
            mapInstance.moveTo([longitude, latitude], 500);
        }
    }, [showUserLocation, mapInstance, userLocation]);

    return (
        <View style={{flex: 1}}>
            <NavigationEvents onWillFocus={() => {
                dispatchShowHeader();
                dispatchHideSearch();
            }} />
            <MapboxGL.MapView
                showUserLocation={true}
                style={styles.mapWrapper}
            >
                {showUserLocation && <MapboxGL.UserLocation />}
                <MapboxGL.Camera
                    centerCoordinate={[center.longitude, center.latitude]}
                    zoomLevel={zoom}
                    ref={(instance) => {
                        mapInstance = instance;
                    }}
                />

                <MapboxGL.ShapeSource
                    id="markerShapedSources"
                    hitbox={{width: 12, height: 28}}
                    onPress={onSourceLayerPress}
                    shape={shapedSources}>
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
                            navigation.navigate(routes.SCREEN_SITE_DETAILS, {site_id: pinnedItem.site_id})
                        }}>
                        {pinnedItem && <SiteCard data={pinnedItem}
                                                 withDistance={true}
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
        userLocation: state.coreStore.userLocation,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowHeader: () => dispatch(showHeader()),
        dispatchHideSearch: () => dispatch(hideSearch()),
        dispatchGetUserLocation: (callback) => dispatch(getUserLocation(callback))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
