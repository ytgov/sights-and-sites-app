import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListViewStyles from './list-view.styles';
import ListViewItem from './list-view.item';
import { Helpers, H2, Body2 } from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';
import { COLORS } from '../../../../theme/config';
import { APP_CONFIG } from '../../../../config';

class ListViewContainer extends React.Component {
  state = {
    currentPage: 1,
    dataToRender: []
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems() {
    const { data } = this.props;
    this.setState({
      dataToRender: data.slice(0, this.state.currentPage * APP_CONFIG.listing.itemsToShow)
    })
  }

  loadMoreItems() {
    const { data } = this.props;
    this.setState({
      currentPage: this.state.currentPage + 1
    }, () => this.loadItems())
  }

  render() {
    const { dataToRender } = this.state;
    const { data, locale, navigation } = this.props;
    return (
      <View>
        {
          data.length ? (
            <View>
              <FlatList
                style={ListViewStyles.listBox}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ListViewItem locale={locale} item={item} navigation={navigation} />}
              />
              <View style={ListViewStyles.moreSitesBox}>
                <TouchableOpacity onPress={() => { alert('Load more') }}>
                  <Ionicons name="ios-arrow-down" size={32} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
                </TouchableOpacity>
                <Body2 style={Helpers.textAlignCenter}>More sites</Body2>
              </View>
            </View>
          ) : (
              <View style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
                <View style={{
                  backgroundColor: '#fff', padding: 20, borderTopColor: COLORS.accent,
                  borderTopWidth: 4,
                }}>
                  <H2 black style={Helpers.textAlignCenter}>No sites found</H2>
                </View>
              </View>
            )
        }

      </View>
    )
  }
}

export default ListViewContainer;