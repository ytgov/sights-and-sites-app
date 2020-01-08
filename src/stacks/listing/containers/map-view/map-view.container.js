import React from 'react';
import {ActivityIndicator, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
// import pinIcon from '../../../../../assets/stacks/listing/amenties/active/y_boat.png';
import pinIcon from '../../../../../assets/images/pin.png';
import SiteCardInfo from '../../components/site-card-info/site-card-info.component';
import SiteTypes from '../../components/site-types/site-types.component';
import {COLORS} from '../../../../theme/config';

MapboxGL.setAccessToken('pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg');
const {width, height} = Dimensions.get('window');
const styles = {
    icon: {
        iconImage: pinIcon,
        iconAllowOverlap: true,
        iconSize: 0.15,

    },
};

class MapViewContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            featureCollection: MapboxGL.geoUtils.makeFeatureCollection(),
            selectedItem: {}
        };

        this.onPress = this.onPress.bind(this);
        this.onSourceLayerPress = this.onSourceLayerPress.bind(this);
    }

    async onPress(e) {

        // console.info('New Feature ==>', e)
    }


    onSourceLayerPress(e) {
        const selectedItem = e.nativeEvent.payload;
        if (selectedItem && selectedItem.properties) {
            this.setState({selectedItem})
        }
        console.log('You pressed a layer here is your feature', selectedItem); // eslint-disable-line
    }

    renderShapedSources() {
        const {data} = this.props;

        let featureCollection = MapboxGL.geoUtils.makeFeatureCollection();
        data.map(marker => {
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
                hitbox={{width: 20, height: 20}}
                onPress={this.onSourceLayerPress}
                shape={featureCollection}
            >
                <MapboxGL.SymbolLayer
                    id="symbolLocationSymbols"
                    minZoomLevel={1}
                    style={styles.icon}
                />
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
                    ref={c => (this._map = c)}
                    style={{width, height, flex: 1}}
                    onPress={this.onPress}
                >
                    <MapboxGL.Camera
                        centerCoordinate={[initialRegion.longitude, initialRegion.latitude]}
                        zoomLevel={initialRegion.zoomLevel}
                    />
                    {this.renderShapedSources()}
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
                            borderTopColor: COLORS.accent,
                            borderTopWidth: 4,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View style={{width: 10}} />
                                <TouchableOpacity style={{
                                    width: 30,
                                    height: 30
                                }} onPress={() => this.setState({selectedItem: {}})}>
                                    <Text>X</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SiteDetails', {item:this.state.selectedItem.properties})}>
                                <SiteTypes item={this.state.selectedItem.properties}/>
                                <SiteCardInfo item={this.state.selectedItem.properties} locale={'en'}/>
                            </TouchableOpacity>

                        </View>
                    ) : null
                }


            </View>
        )
    }
}

export default MapViewContainer;
