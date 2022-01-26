import React, {useState, useEffect, useContext} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

import ScreenWrapper from '~components/screenWrapper';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import {showHeader} from '~store/actions/core';
import {connect} from 'react-redux';
import SiteCard from '~components/siteCard';
import SearchResult from '~screens/searchResults/searchResult';
import {NavigationContext} from 'react-navigation';
import NoResult from '~components/noResult';
import {Small} from '~theme/typings';
import {YUKON_COLORS} from '~theme/config';
import routes from '~navigation/routes';
import {doSearch, setSearchKeyword, setSearchResults} from '~store/actions/search';

const SearchResultsScreen = (props) => {
    const {
        navigation,
        searchResults,
        showResults
    } = props

    return (
        <>
            {showResults &&
                <ScreenWrapper>
                    {searchResults.length > 0 &&
                    <View style={{
                        backgroundColor: YUKON_COLORS.primary,
                        position: 'absolute',
                        right: 0,
                        paddingVertical: 8,
                        paddingHorizontal: 20,
                        borderBottomLeftRadius: 8
                    }}>
                        <Small>{`${searchResults.length} results`}</Small>
                    </View>
                    }

                    <FlatList data={searchResults}
                              style={{marginVertical: 20}}
                              renderItem={({item}) =>
                                  <TouchableOpacity
                                      activeOpacity={0.8}
                                      onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {site_id: item.site_id})}>
                                      <SearchResult data={item} />
                                  </TouchableOpacity>}
                              scrollEventThrottle={16}
                              keyExtractor={(item, i) => item.site_id.toString()}
                              ListEmptyComponent={<NoResult /> }
                              ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: 'black'}}/>}
                    />

                </ScreenWrapper>
            }
        </>

    );
};

SearchResultsScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.LIST} />,
})

const mapStateToProps = (state) => {
    return {
        listingRaw: state.listingStore.listingRaw,
        currentQuery: state.searchStore.query,
        searchResults: state.searchStore.results,
        showResults: state.searchStore.showResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchSetKeyword: (keyword) => dispatch(setSearchKeyword(keyword)),
        dispatchDoSearch: (results, listing) => dispatch(doSearch(results, listing))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen);
