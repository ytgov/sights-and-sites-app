import React from 'react';
import {ActivityIndicator, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import pinIcon from '../../../../../assets/images/pin.png';
import {APP_CONFIG} from '../../../../config';

MapboxGL.setAccessToken(APP_CONFIG.map_box);
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
            <View style={{flex: 1, width, height}}>
                <MapboxGL.MapView
                    style={{width, height, flex: 1}}>
                    <MapboxGL.Camera
                        centerCoordinate={[initialRegion.longitude, initialRegion.latitude]}
                        zoomLevel={initialRegion.zoomLevel}
                    />

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
