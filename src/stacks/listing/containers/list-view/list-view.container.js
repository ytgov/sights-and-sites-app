import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListViewStyles from './list-view.styles';
import ListViewItem from './list-view.item';
import { Helpers, Body2 } from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';

class ListViewContainer extends React.Component {
  state = {
    data: [
      {
        id: 1,
        uri: 'https://www.mountainphotography.com/images/xl/20160904-Twin-Lakes.jpg'
      },
      {
        id: 2,
        uri: 'https://www.mountainphotography.com/images/xl/20160831-Talus-Lake-Tent.jpg'
      },
      {
        id: 3,
        uri: 'https://s23835.pcdn.co/wp-content/uploads/2015/09/Canada-Yukon-Kluane-House-2.jpg'
      },
    ]
  }

  renderItem({ item }) {
    return (
      <ListViewItem item={item} />
    )
  }

  render() {
    const { data } = this.state;
    return (
      <View>
        <FlatList
          style={ListViewStyles.listBox}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={this.renderItem}
        />
        <NearbySites />
        <View style={ListViewStyles.moreSitesBox}>
          <TouchableOpacity onPress={() => { alert('Load more sites') }}>
            <Ionicons name="ios-arrow-down" size={32} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
          </TouchableOpacity>
          <Body2 style={Helpers.textAlignCenter}>More sites</Body2>
        </View>
      </View>
    )
  }
}

export default ListViewContainer;