import React from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class MapViewContainer extends React.Component {
  state = {
    places : [
      {
        site_id: 1728,
        changed_ts: 1531850203,
        site_name: "Tagish Bridge",
        site_types: [
        "Recreation site (day use only)"
        ],
        regions: [
        "Southern Lakes"
        ],
        latitude: 60.316,
        longitude: 134.27,
        highway_name: "",
        highway_km: 0,
        secondary_road_name: "",
        secondary_road_km: 0,
        community: "",
        warning: "",
        site_directions: "",
        site_description: "<ul> <li>The Tagish River, also known as Six Mile River, enters Marsh Lake here.</li> <li>Tagish means &ldquo;break-up of ice.&rdquo;</li> <li>Swans and waterfowl rest here in March.</li> <li>The Tagish Bridge is popular place to fish. You can get there from the recreation site.</li> </ul> ",
        images: [
        { }
        ],
        fn_traditional_territories: [ ],
        rest_stop: false,
        historic_site: false,
        artifact: false,
        number_of_campsites: 0,
        campsite_wc_accessible: false,
        campsite_walk_in: false,
        campsite_pull_through: false,
        outhouse: true,
        outhouse_accessible: true,
        trail: false,
        picnic_table: false,
        picnic_shelter: false,
        fire_ring: false,
        garbage_can: true,
        recycle_bin: false,
        food_storage: false,
        playground: false,
        boat_launch: true,
        dock: false,
        water_supply: false,
        beach: false,
        change_room: false
      }
    ]
  }
  componentDidMount(){
    
  }

  renderMarkers=()=>{
    const { data  } = this.props
    let results = data.map((marker,i)=>{
      const latitude =marker.latitude
      const longitude=-marker.longitude
      let coords = {
        latitude,
        longitude
      }




      return <Marker
        key={i}
        coordinate={coords}
        title={marker.site_name}
      />
    })
    return results
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
        style={{ width, height, flex: 1 }} >
          {this.renderMarkers()}
      </MapView>
    )
  }
}

export default MapViewContainer;
