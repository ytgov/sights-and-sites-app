import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import RecentQueriesStyles from './recent-queries.styles';
import { Body1 } from '../../../../theme/theme';

const RecentQueries = props => {
  const { data, onSearch } = props;
  const queries = [...data].reverse();
  return (
    <View style={RecentQueriesStyles.listBox}>
      <FlatList
        style={RecentQueriesStyles.list}
        data={queries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TouchableOpacity style={RecentQueriesStyles.item} onPress={() => { onSearch(item.query) }}>
          <Body1>{item.query}</Body1>
        </TouchableOpacity>}
      />
    </View>
  )
}

export default RecentQueries;