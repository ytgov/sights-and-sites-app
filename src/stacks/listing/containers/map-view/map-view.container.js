import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import pinIcon from '../../../../../assets/images/pin.png';
MapboxGL.setAccessToken('pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg');
const {width, height} = Dimensions.get('window');
const styles = {
    icon: {
        iconImage: ['get', 'icon'],

        iconSize: 0.15,
    },
};
class MapViewContainer extends React.Component {
    renderMarker = () => {
        const {data} = this.props;

        const features = {
            type: 'FeatureCollection',
            features: data.map(marker => {
                return {
                    type: 'Feature',
                    id: marker.site_id,
                    properties: {
                        icon: 'example',
                        name: marker.site_name,
                        description: marker.site_name,
                        title: marker.site_name,
                    },
                    geometry: {
                        type: 'Point',
                        coordinates: [-marker.longitude, marker.latitude],
                    },
                }
            }),
        };
        return (
            <MapboxGL.ShapeSource
                id="exampleShapeSource"
                shape={features}
            >
                <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon} />
            </MapboxGL.ShapeSource>
        )
    }

    render() {
        return (
            <MapboxGL.MapView
                // initialRegion={{
                //     latitude: 63.389423,
                //     longitude: -136.714739,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}
                style={{width, height, flex: 1}}>

                <MapboxGL.Images images={{example: pinIcon, assets: ['pin']}} />
                {this.renderMarker()}
            </MapboxGL.MapView>
        )
    }
}

export default MapViewContainer;
