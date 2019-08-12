import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, TouchableOpacity } from 'react-native';
import RecentQueriesStyles from './recent-queries.styles';
import { Body1 } from '../../../../theme/theme';
import QueryType from '../../../../types/query.type';

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

RecentQueries.propTypes = {
  data: PropTypes.arrayOf(QueryType),
  onSearch: PropTypes.func.isRequired
}

RecentQueries.defaultProps = {
  data: []
}
export default RecentQueries;