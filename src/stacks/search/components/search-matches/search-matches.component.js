import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';
import ListViewItem from '../../../listing/containers/list-view/list-view.item';
import LoadMore from '../../../../shared/components/load-more/load-more.component';
import SiteType from '../../../../types/site.type';

const SearchMatches = props => {
    const {data, locale, navigation, loadMore, currentSearchPage, searchPagesLimit} = props;
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.site_id}
                renderItem={({item}) => <ListViewItem locale={locale} item={item} navigation={navigation}/>}
            />
            {(currentSearchPage < searchPagesLimit) && <LoadMore callback={() => loadMore()} text='More sites'/>}
        </View>
    )
}

SearchMatches.propTypes = {
    data: PropTypes.arrayOf(SiteType),
    locale: PropTypes.string.isRequired,
    loadMore: PropTypes.func.isRequired,
    currentSearchPage: PropTypes.number,
    searchPagesLimit: PropTypes.number
}

SearchMatches.defaultProps = {
    data: [],
    currentSearchPage: 1,
    searchPagesLimit: 1
}

export default SearchMatches;
