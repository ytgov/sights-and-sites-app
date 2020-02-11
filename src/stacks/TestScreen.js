import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapboxClient from '@mapbox/mapbox-sdk';
import MapboxDirectionClient from '@mapbox/mapbox-sdk/services/directions';
import {Button, Container, Header, Text} from 'native-base';

const accessToken = 'pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg';
MapboxGL.setAccessToken(accessToken);
const mapboxClient = new MapboxClient({accessToken});
const mapboxDirectionClient = new MapboxDirectionClient(mapboxClient);


// user center coordinate
const UserLocation = [10.7613, 34.7452,]; // [latitude, longitude]
const StartLocation = UserLocation;
const DestinationLocation = [10.166, 36.8188]; //

const layerStyles = {
    origin: {
        circleRadius: 5,
        circleColor: 'white',
    },
    destination: {
        circleRadius: 5,
        circleColor: 'white',
    },
    route: {
        lineColor: '#314ccd',
        lineCap: 'round',
        // lineCap: MapboxGL.LineJoin.Round,
        lineWidth: 3,
        lineOpacity: 1,
    },
    progress: {
        lineColor: '#314ccd',
        lineWidth: 3,
    },
};

export default class App extends Component {
    state = {
        route: {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            UserLocation,
                            DestinationLocation
                        ]
                    }
                }
            ]
        },
    };

    async fetchRoute() {

        let res = null;
        try {
            res = await mapboxDirectionClient.getDirections({
                profile: 'driving-traffic',
                waypoints: [
                    {coordinates: StartLocation},
                    {coordinates: DestinationLocation},
                ],
                geometries: 'geojson'
            }).send();
        } catch (e) {
            console.log(e);
        }

        if (res !== null) {
            const directions = res.body.routes[0];
            console.info('Got Direction ==>', directions)
            this.setState({route: {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'properties': {},
                            'geometry': {
                                'type': 'LineString',
                                'coordinates': directions.geometry.coordinates
                            }
                        }
                    ]
                }});
        } else {
            console.info('no directions')
        }
    }

    render() {
        return (
            <Container>
                <Header style={{paddingTop: 25, paddingBottom: 10}}>
                    <Button onPress={() => this.fetchRoute()} title={'Fetch Route'}>
                        <Text>Fetch Route</Text>
                    </Button>
                </Header>
                <MapboxGL.MapView
                    styleURL={MapboxGL.StyleURL.Light}
                    zoomLevel={15}
                    centerCoordinate={[11.256, 43.770]}
                    style={styles.container}>
                    <MapboxGL.ShapeSource id='line1' shape={this.state.route}>
                        <MapboxGL.LineLayer id='linelayer1' style={layerStyles.route}/>
                    </MapboxGL.ShapeSource>

                </MapboxGL.MapView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
