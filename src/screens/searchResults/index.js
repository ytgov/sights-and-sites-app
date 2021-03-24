import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {filter as _filter} from 'lodash';

import ScreenWrapper from '~components/screenWrapper';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import {showHeader} from '~store/actions/core';
import {connect} from 'react-redux';
import SiteCard from '~components/siteCard';
import SearchResult from '~screens/searchResults/searchResult';
import NoResult from '~components/noResult';
import {Small} from '~theme/typings';
import {YUKON_COLORS} from '~theme/config';
import routes from '~navigation/routes';

const SearchResultsScreen = (props) => {
    const {
        navigation,
        listingFiltered
    } = props
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (navigation.getParam('keyword')) {
            setKeyword(navigation.getParam('keyword'));
            const matched = _filter(listingFiltered, (i) => {
                return i.site_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            });
            setResults(matched);
        }
    }, [keyword]);

    return (
        <ScreenWrapper>
            {results.length > 0 &&
                <View style={{
                    backgroundColor: YUKON_COLORS.primary,
                    position: 'absolute',
                    right: 0,
                    paddingVertical: 8,
                    paddingHorizontal: 20,
                    borderBottomLeftRadius: 8
                }}>
                    <Small>{`${results.length} results`}</Small>
                </View>}
            <FlatList data={results}
                      style={{marginVertical: 20}}
                      renderItem={({item}) =>
                          <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {item})}>
                              <SearchResult data={item} />
                          </TouchableOpacity>}
                      scrollEventThrottle={16}
                      keyExtractor={(item, i) => item.site_id.toString()}
                      ListEmptyComponent={<NoResult /> }
                      ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: 'black'}}/>}
            />
        </ScreenWrapper>
    );
};

SearchResultsScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.LIST} />,
})

const mapStateToProps = (state) => {
    return {
        listingFiltered: state.listingStore.listingFiltered,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        //dispatchShowHeader: () => dispatch(showHeader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen);
