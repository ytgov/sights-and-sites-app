import React from 'react';
import MapView,{ Marker } from 'react-native-maps';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class MapViewContainer extends React.Component {
  state = {
    places : [
      {
        "Site-ID" : 42,
        "Site_Name" : "Cheechako Hill",
        "Site-Type" : [
          "Camping",
          "History and Culture",
          "Wildlife and Landscape"
        ],
        "Region" : [
          "Klondike"
        ],
        "Latitude" : 63.9436,
        "Longitude" : -139.33685,
        "Highway-Name" : "Klondike Highway",
        "Highway-KM" : 712.7,
        "Seconday-Road-Name" : "Bonanza Creek Road",
        "Secondary-Road-KM" : 14,
        "Community" : "Dawson",
        "Warning" : "The Goldfields loop is an active mining region.\nPlease respect private property. 🤪",
        "Site-Directions" : "Travelling northbound turn left off the highway and follow the Bonanza Creek Road for 14 km. À bientôt !",
        "Site_Description" : "An interpretive panel tells the story behind Cheechako Hill and the good fortune of \"Cheechako\" Oliver O'Millet. You can also read about some of the mechanisms used to mine uphill.",
        "Image" : "1-Cheechako_Hill-A",
        "FN-Traditional-Territory" : [
          "Tr’ondëk Hwëch’in",
          "Tetlit Gwich’in Council Primary Use Area"
        ],
        "Rest-Stop" : false,
        "Historic-Site" : true,
        "Artifact" : true,
        "Campsite-WC-Accessible" : false,
        "Number-of-Campsites" : 3,
        "Campsite-Walk-in" : true,
        "Campsite-Pull-through" : false,
        "Outhouse" : true,
        "Outhouse-Accessible" : false,
        "Trail" : true,
        "Picnic-Table" : true,
        "Picnic-Shelter" : false,
        "Fire-Ring" : true,
        "Garbage-Can" : true,
        "Recycle-Bin" : false,
        "Food-Storage" : true,
        "Playground" : true,
        "Boat-Launch" : false,
        "Dock" : false,
        "Water-Supply" : true,
        "Beach" : false,
        "Change-Room" : false
      },
      {
        "Site-ID" : 42,
        "Site_Name" : "Cheechako Hill",
        "Site-Type" : [
          "Camping",
          "History and Culture",
          "Wildlife and Landscape"
        ],
        "Region" : [
          "Klondike"
        ],
        "Latitude" : 66.9436,
        "Longitude" : -141.33685,
        "Highway-Name" : "Klondike Highway",
        "Highway-KM" : 712.7,
        "Seconday-Road-Name" : "Bonanza Creek Road",
        "Secondary-Road-KM" : 14,
        "Community" : "Dawson",
        "Warning" : "The Goldfields loop is an active mining region.\nPlease respect private property. 🤪",
        "Site-Directions" : "Travelling northbound turn left off the highway and follow the Bonanza Creek Road for 14 km. À bientôt !",
        "Site_Description" : "An interpretive panel tells the story behind Cheechako Hill and the good fortune of \"Cheechako\" Oliver O'Millet. You can also read about some of the mechanisms used to mine uphill.",
        "Image" : "1-Cheechako_Hill-A",
        "FN-Traditional-Territory" : [
          "Tr’ondëk Hwëch’in",
          "Tetlit Gwich’in Council Primary Use Area"
        ],
        "Rest-Stop" : false,
        "Historic-Site" : true,
        "Artifact" : true,
        "Campsite-WC-Accessible" : false,
        "Number-of-Campsites" : 3,
        "Campsite-Walk-in" : true,
        "Campsite-Pull-through" : false,
        "Outhouse" : true,
        "Outhouse-Accessible" : false,
        "Trail" : true,
        "Picnic-Table" : true,
        "Picnic-Shelter" : false,
        "Fire-Ring" : true,
        "Garbage-Can" : true,
        "Recycle-Bin" : false,
        "Food-Storage" : true,
        "Playground" : true,
        "Boat-Launch" : false,
        "Dock" : false,
        "Water-Supply" : true,
        "Beach" : false,
        "Change-Room" : false
      },
      {
        "Site-ID" : 42,
        "Site_Name" : "Cheechako Hill",
        "Site-Type" : [
          "Camping",
          "History and Culture",
          "Wildlife and Landscape"
        ],
        "Region" : [
          "Klondike"
        ],
        "Latitude" : 64.9436,
        "Longitude" : -138.33685,
        "Highway-Name" : "Klondike Highway",
        "Highway-KM" : 712.7,
        "Seconday-Road-Name" : "Bonanza Creek Road",
        "Secondary-Road-KM" : 14,
        "Community" : "Dawson",
        "Warning" : "The Goldfields loop is an active mining region.\nPlease respect private property. 🤪",
        "Site-Directions" : "Travelling northbound turn left off the highway and follow the Bonanza Creek Road for 14 km. À bientôt !",
        "Site_Description" : "An interpretive panel tells the story behind Cheechako Hill and the good fortune of \"Cheechako\" Oliver O'Millet. You can also read about some of the mechanisms used to mine uphill.",
        "Image" : "1-Cheechako_Hill-A",
        "FN-Traditional-Territory" : [
          "Tr’ondëk Hwëch’in",
          "Tetlit Gwich’in Council Primary Use Area"
        ],
        "Rest-Stop" : false,
        "Historic-Site" : true,
        "Artifact" : true,
        "Campsite-WC-Accessible" : false,
        "Number-of-Campsites" : 3,
        "Campsite-Walk-in" : true,
        "Campsite-Pull-through" : false,
        "Outhouse" : true,
        "Outhouse-Accessible" : false,
        "Trail" : true,
        "Picnic-Table" : true,
        "Picnic-Shelter" : false,
        "Fire-Ring" : true,
        "Garbage-Can" : true,
        "Recycle-Bin" : false,
        "Food-Storage" : true,
        "Playground" : true,
        "Boat-Launch" : false,
        "Dock" : false,
        "Water-Supply" : true,
        "Beach" : false,
        "Change-Room" : false
      },
      {
        "Site-ID" : 42,
        "Site_Name" : "Cheechako Hill",
        "Site-Type" : [
          "Camping",
          "History and Culture",
          "Wildlife and Landscape"
        ],
        "Region" : [
          "Klondike"
        ],
        "Latitude" : 60.9436,
        "Longitude" : -140.33685,
        "Highway-Name" : "Klondike Highway",
        "Highway-KM" : 712.7,
        "Seconday-Road-Name" : "Bonanza Creek Road",
        "Secondary-Road-KM" : 14,
        "Community" : "Dawson",
        "Warning" : "The Goldfields loop is an active mining region.\nPlease respect private property. 🤪",
        "Site-Directions" : "Travelling northbound turn left off the highway and follow the Bonanza Creek Road for 14 km. À bientôt !",
        "Site_Description" : "An interpretive panel tells the story behind Cheechako Hill and the good fortune of \"Cheechako\" Oliver O'Millet. You can also read about some of the mechanisms used to mine uphill.",
        "Image" : "1-Cheechako_Hill-A",
        "FN-Traditional-Territory" : [
          "Tr’ondëk Hwëch’in",
          "Tetlit Gwich’in Council Primary Use Area"
        ],
        "Rest-Stop" : false,
        "Historic-Site" : true,
        "Artifact" : true,
        "Campsite-WC-Accessible" : false,
        "Number-of-Campsites" : 3,
        "Campsite-Walk-in" : true,
        "Campsite-Pull-through" : false,
        "Outhouse" : true,
        "Outhouse-Accessible" : false,
        "Trail" : true,
        "Picnic-Table" : true,
        "Picnic-Shelter" : false,
        "Fire-Ring" : true,
        "Garbage-Can" : true,
        "Recycle-Bin" : false,
        "Food-Storage" : true,
        "Playground" : true,
        "Boat-Launch" : false,
        "Dock" : false,
        "Water-Supply" : true,
        "Beach" : false,
        "Change-Room" : false
      },
      {
        "Site-ID" : 42,
        "Site_Name" : "Cheechako Hill",
        "Site-Type" : [
          "Camping",
          "History and Culture",
          "Wildlife and Landscape"
        ],
        "Region" : [
          "Klondike"
        ],
        "Latitude" : 65.9436,
        "Longitude" : -137.33685,
        "Highway-Name" : "Klondike Highway",
        "Highway-KM" : 712.7,
        "Seconday-Road-Name" : "Bonanza Creek Road",
        "Secondary-Road-KM" : 14,
        "Community" : "Dawson",
        "Warning" : "The Goldfields loop is an active mining region.\nPlease respect private property. 🤪",
        "Site-Directions" : "Travelling northbound turn left off the highway and follow the Bonanza Creek Road for 14 km. À bientôt !",
        "Site_Description" : "An interpretive panel tells the story behind Cheechako Hill and the good fortune of \"Cheechako\" Oliver O'Millet. You can also read about some of the mechanisms used to mine uphill.",
        "Image" : "1-Cheechako_Hill-A",
        "FN-Traditional-Territory" : [
          "Tr’ondëk Hwëch’in",
          "Tetlit Gwich’in Council Primary Use Area"
        ],
        "Rest-Stop" : false,
        "Historic-Site" : true,
        "Artifact" : true,
        "Campsite-WC-Accessible" : false,
        "Number-of-Campsites" : 3,
        "Campsite-Walk-in" : true,
        "Campsite-Pull-through" : false,
        "Outhouse" : true,
        "Outhouse-Accessible" : false,
        "Trail" : true,
        "Picnic-Table" : true,
        "Picnic-Shelter" : false,
        "Fire-Ring" : true,
        "Garbage-Can" : true,
        "Recycle-Bin" : false,
        "Food-Storage" : true,
        "Playground" : true,
        "Boat-Launch" : false,
        "Dock" : false,
        "Water-Supply" : true,
        "Beach" : false,
        "Change-Room" : false
      }
    ]
  }
  componentDidMount(){
    
  }

  renderMarkers=()=>{
    let results = this.state.places.map((marker,i)=>{

      const coords = {
        latitude:marker.Latitude,
        longitude:marker.Longitude
      }
      console.log("marker",coords)

      return <Marker
        key={i}
        coordinate={coords}
        title={marker.Site_Name}
        description={marker.Site_Description}
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
