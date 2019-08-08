import React from 'react';
import { View, FlatList } from 'react-native';
import ListViewItem from '../../../listing/containers/list-view/list-view.item';
import LoadMore from '../../../../shared/components/load-more/load-more.component';

const SearchMatches = props => {
  const { data, locale, navigation, loadMore, currentSearchPage, searchPagesLimit } = props;
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ListViewItem locale={locale} item={item} navigation={navigation} />}
      />
      {(currentSearchPage < searchPagesLimit) && <LoadMore callback={() => loadMore()} text='More sites' />}
    </View>
  )
}

export default SearchMatches;