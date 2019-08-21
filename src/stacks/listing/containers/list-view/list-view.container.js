import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import ListViewStyles from './list-view.styles';
import ListViewItem from './list-view.item';
import { APP_CONFIG } from '../../../../config';
import NoItems from '../../../../shared/components/no-items/no-items.component';
import LoadMore from '../../../../shared/components/load-more/load-more.component';
import SiteType from '../../../../types/site.type';
import i18n from '../../../../locale/locale';

class ListViewContainer extends React.Component {
  state = {
  }

  loadMore() {
    const { incrementListingPageDispatch } = this.props;
    incrementListingPageDispatch();
  }

  render() {
    const { data, locale, navigation, currentListingPage, listingPagesLimit } = this.props;
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
              {(currentListingPage < listingPagesLimit) && <LoadMore callback={() => this.loadMore()} text={
                i18n.t('listContainer.moreSites')} />}
            </View>
          ) :
            <NoItems value={i18n.t('listContainer.noSitesFound')} />
        }
      </View>
    )
  }
}

ListViewContainer.propTypes = {
  data: PropTypes.arrayOf(SiteType).isRequired,
  locale: PropTypes.string.isRequired,
  currentListingPage: PropTypes.number.isRequired,
  listingPagesLimit: PropTypes.number.isRequired,
  incrementListingPageDispatch: PropTypes.func.isRequired
}

export default ListViewContainer;