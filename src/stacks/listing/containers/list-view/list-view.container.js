import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListViewStyles from './list-view.styles';
import ListViewItem from './list-view.item';
import { Helpers, H2, Body2 } from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';
import { COLORS } from '../../../../theme/config';
import { APP_CONFIG } from '../../../../config';
import NoItems from '../../../../shared/components/no-items/no-items.component';
import LoadMore from '../../../../shared/components/load-more/load-more.component';

class ListViewContainer extends React.Component {
  state = {
    currentPage: 1,
    dataToRender: []
  }

  componentDidMount() {
    // this.loadItems();
  }

  loadItems(data) {
    // const { currentListingPage } = this.props;
    // return data.slice(0, currentListingPage * APP_CONFIG.listing.itemsToShow)
  }

  loadMore() {
    const { incrementListingPageDispatch } = this.props;
    incrementListingPageDispatch();
    // const { data } = this.props;
    // this.setState({
    // currentPage: this.state.currentPage + 1
    // }, () => this.loadItems())
  }

  render() {
    // const { dataToRender } = this.state;
    const { data, locale, navigation, listingItemsCount, currentListingPage, listingPagesLimit, incrementListingPageDispatch } = this.props;
    const dataToRender = data.slice(0, currentListingPage * APP_CONFIG.listing.itemsToShow);
    return (
      <View>
        {
          dataToRender.length ? (
            <View>
              <FlatList
                style={ListViewStyles.listBox}
                data={dataToRender}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ListViewItem locale={locale} item={item} navigation={navigation} />}
              />
              {(currentListingPage < listingPagesLimit) && <LoadMore callback={() => this.loadMore()} text='More sites' />}
            </View>
          ) :
            <NoItems value='No sites found' />
        }

      </View>
    )
  }
}

export default ListViewContainer;