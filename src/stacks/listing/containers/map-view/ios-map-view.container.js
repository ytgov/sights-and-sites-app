import React from 'react';
import {ActivityIndicator, Dimensions, Image, Text, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg');
const {width, height} = Dimensions.get('window');


class IosMapViewContainer extends React.Component {
    state = {
        featureCollection: {
            type: 'FeatureCollection',
            features: []
        }
    }

    renderMarkers = () => {
        const items = [];
        const {data} = this.props;
        data.map(marker => {
            items.push(
                <MapboxGL.PointAnnotation
                    key={marker.site_id.toString() + '-key'}
                    id={marker.site_id.toString() + '-id'}
                    coordinate={[marker.longitude, marker.latitude]}
                    style={{zIndex: 10000}}
                    title={marker.site_name}
                >
                    <Image style={{width: 20, height: 20, zIndex: 1000}} resizeMode="contain"
                           source={require('../../../../../assets/images/pin.png')}/>
                    <MapboxGL.Callout title={marker.site_name}/>
                </MapboxGL.PointAnnotation>,
            )
        });
        return items;

    };

    moveTheMap(map) {
        map.moveTo([
            63.389423,
            -136.714739
        ], 3000)
    }

    render() {

        const initialRegion = {
            latitude: 63.389423,
            longitude: -136.714739,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            zoomLevel: 2,

        };
        const {data} = this.props;


        if (!data.length) {
            return (<View style={{
                    width,
                    height: (height - 200),
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center'
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: 24,
                        textAlign: 'center',
                        paddingBottom: 20,
                    }}>Loading the map ...</Text>
                    <ActivityIndicator style={{}} size="large" color="#FFF"/>
                </View>
            )
        }
        return (
            <MapboxGL.MapView
                style={{width, height, flex: 1}}>
                <MapboxGL.Camera
                    centerCoordinate={[initialRegion.longitude, initialRegion.latitude]}
                    zoomLevel={initialRegion.zoomLevel}
                />
                {this.renderMarkers()}
            </MapboxGL.MapView>
        )
    }
}

export default IosMapViewContainer;
