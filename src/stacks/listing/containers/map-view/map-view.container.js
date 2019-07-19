import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class MapViewContainer extends React.Component {
  state = {

  }

  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 63.389423,
          longitude: -136.714739,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width, height, flex: 1 }} />
    )
  }
}

export default MapViewContainer;
