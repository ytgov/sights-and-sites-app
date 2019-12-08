import React from 'react';
import {Dimensions, Image} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg');
const {width, height} = Dimensions.get('window');


class MapViewContainer extends React.Component {
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
                    key={marker.site_id.toString()+'-key'}
                    id={marker.site_id.toString()+'-id'}
                    coordinate={[-marker.longitude, marker.latitude]}
                    title={"test"}
                >
                    <Image style={{width: 20, height: 20}} resizeMode="contain" source={require('../../../../../assets/images/pin.png')}/>
                    <MapboxGL.Callout title={marker.site_name} />
                </MapboxGL.PointAnnotation>,
            )
        });
        return items;

    };

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
                {this.renderMarkers()}
            </MapboxGL.MapView>
        )
    }
}

export default MapViewContainer;
