import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
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
    state = {
        selectedItem: {}
    };

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
                        coordinates: [marker.longitude, marker.latitude],
                    },
                }
            }),
        };
        return (
            <MapboxGL.ShapeSource
                id="exampleShapeSource"
                shape={features}
                onPress={item => this.setState({selectedItem: item.nativeEvent.payload})}
            >
                <MapboxGL.SymbolLayer id="exampleIconName" style={styles.icon}/>
            </MapboxGL.ShapeSource>
        )
    }

    render() {
        return (
            <View style={{flex: 1, width, height}}>
                <MapboxGL.MapView
                    style={{width, height, flex: 1}}>

                    <MapboxGL.Images images={{example: pinIcon, assets: ['pin']}}/>
                    {this.renderMarker()}
                </MapboxGL.MapView>
                {
                    (this.state.selectedItem && this.state.selectedItem.properties) ? (
                        <View style={{
                            backgroundColor: 'white',
                            width: '90%',
                            padding: 15,
                            borderRadius: 5,
                            position: 'absolute',
                            zIndex: 10000,
                            bottom: 200,
                            left: '5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text>{this.state.selectedItem.properties.title}</Text>
                            <TouchableOpacity onPress={() => this.setState({selectedItem: {}})}>
                                <Text>X</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null
                }


            </View>
        )
    }
}

export default MapViewContainer;
