import React from 'react';
import {Container, Content} from 'native-base';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiMjQ3bGFicyIsImEiOiJjankwNjc0Y2IwYWZrM2RwanZzcG92MnFoIn0.YahNe0xRjc58mSA5CveCSg');


export default class TestScreen extends React.Component {

    render() {
        return (
            <MapboxGL.MapView style={{flex: 1}}></MapboxGL.MapView>
        )
    }

}
