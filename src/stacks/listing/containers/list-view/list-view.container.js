import React from 'react';
import { View, Text, Image } from 'react-native';
import { List, ListItem } from 'native-base';
import { H2 } from '../../../../theme/theme';
import SiteCard from '../../components/site-card/site-card.component';

class ListViewContainer extends React.Component {
  state = {

  }

  render() {
    return (
      // <View style={{ paddingTop: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <View>
      //     <H2 black style={{ textAlign: 'center' }}>List view</H2>
      //   </View>
      // </View>
      <List style={{ paddingTop: 0, paddingBottom: 0, borderTopWidth: 0, borderBottomWidth: 0, paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
        <ListItem noIndent style={{ backgroundColor: '#000000', flexDirection: 'column', paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, marginLeft: 0, marginRight: 0 }}>
          <View style={{ height: 215, width: '100%', backgroundColor: 'red' }}>
            <Image source={{ uri: 'https://www.mountainphotography.com/images/xl/20160904-Twin-Lakes.jpg' }} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
          </View>
          <SiteCard />
        </ListItem>
        <ListItem noIndent style={{ backgroundColor: '#000000', flexDirection: 'column', paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, marginLeft: 0, marginRight: 0 }}>
          <View style={{ height: 215, width: '100%', backgroundColor: 'red' }}>
            <Image source={{ uri: 'https://www.mountainphotography.com/images/xl/20160831-Talus-Lake-Tent.jpg' }} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
          </View>
          <SiteCard />
        </ListItem>
        <ListItem noIndent style={{ backgroundColor: '#000000', flexDirection: 'column', paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, marginLeft: 0, marginRight: 0 }}>
          <View style={{ height: 215, width: '100%', backgroundColor: 'red' }}>
            <Image source={{ uri: 'https://www.mountainphotography.com/images/xl/20160904-Twin-Lakes.jpg' }} resizeMode='cover' style={{ width: '100%', height: '100%' }} />
          </View>
          <SiteCard />
        </ListItem>
      </List>
    )
  }
}

export default ListViewContainer;