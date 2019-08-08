import React from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content } from 'native-base';
import _ from 'lodash';
import { Ionicons } from '@expo/vector-icons';
import { COMMON, Helpers } from '../../../../theme/theme';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import { searchSites, setSearchInProgress, incrementSearchPage, resetSearchQuery } from '../../../../store/actions/search';
import { formatSearchIndex } from '../../../../shared/services/search';
import { APP_CONFIG } from '../../../../config';
import SearchStyles from './search.styles';
import RecentQueries from '../../components/recent-queries/recent-queries.component';
import NoItems from '../../../../shared/components/no-items/no-items.component';
import SearchMatches from '../../components/search-matches/search-matches.component';

class SearchScreen extends React.Component {
  state = {
  }

  onSearchDebounced = _.debounce(this.onSearch, APP_CONFIG.search.debounceDelay);

  componentWillUnmount() {
    const { resetSearchQueryDispatch } = this.props;
    resetSearchQueryDispatch();
  }

  onSearch(query) {
    const { setSearchInProgressDispatch, searchSitesDispatch, resetSearchQueryDispatch } = this.props;
    const queryFormatted = formatSearchIndex(query);
    if (!queryFormatted) {
      return false
    };
    setSearchInProgressDispatch(true);
    setTimeout(() => {
      searchSitesDispatch({
        query,
        queryFormatted
      });
    }, 150)
  }

  loadMore() {
    const { incrementSearchPageDispatch } = this.props;
    incrementSearchPageDispatch();
  }

  render() {
    const { navigation, searchQuery, searchInProgress, listingRaw, locale, searchMatched, currentSearchPage, searchSitesDispatch, recentQueries, searchPagesLimit, resetSearchQueryDispatch } = this.props;
    const sites = searchMatched.map(id => listingRaw.filter(site => site.id === id)[0]).slice(0, currentSearchPage * APP_CONFIG.search.itemsToShow);;
    console.log('currentSearchPage');
    console.log(currentSearchPage);
    console.log('searchPagesLimit');
    console.log(searchPagesLimit);
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={[COMMON.header, COMMON.headerWhite]}>
          <NavigationBackButton dark navigation={navigation} />
          <View style={SearchStyles.searchBox}>
            <TextInput
              editable={!searchInProgress}
              autoFocus
              placeholder='Search'
              placeholderTextColor='#000'
              style={SearchStyles.searchInput}
              defaultValue={searchQuery}
              onChangeText={query => {
                if (!formatSearchIndex(query)) { resetSearchQueryDispatch() } else { this.onSearchDebounced(query) }
              }} />
            {
              (!!searchQuery) && (
                <TouchableOpacity style={SearchStyles.clearQueryButton} onPress={() => resetSearchQueryDispatch()}>
                  <Ionicons name="ios-close-circle" size={24} color="#929496" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
                </TouchableOpacity>
              )
            }
          </View>
        </Header>
        <Content style={SearchStyles.content}>
          {searchInProgress && <View style={{ paddingTop: 50, paddingBottom: 20, alignItems: 'center', justifyContent: 'center' }} >
            <ActivityIndicator style={{}} size="large" color="#ffffff" />
          </View>}
          {
            (!searchQuery) && (
              <View>
                {recentQueries.length ?
                  <RecentQueries
                    data={recentQueries}
                    onSearch={value => {
                      this.onSearch(value)
                    }} /> :
                  <NoItems value='No recent queries' />
                }
              </View>
            )
          }
          {
            (!!searchQuery && !searchInProgress) && (
              <View>
                {sites.length ? <SearchMatches data={sites} loadMore={() => this.loadMore()} currentSearchPage={currentSearchPage} searchPagesLimit={searchPagesLimit} locale={locale} navigation={navigation} /> : <NoItems value='No matches found' />
                }
              </View>
            )
          }

        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale,
    searchQuery: state.searchStore.searchQuery,
    searchInProgress: state.searchStore.searchInProgress,
    searchMatched: state.searchStore.searchMatched,
    recentQueries: state.searchStore.recentQueries,
    listingRaw: state.listingStore.listingRaw,
    currentSearchPage: state.searchStore.currentSearchPage,
    searchPagesLimit: state.searchStore.searchPagesLimit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchSitesDispatch: value => dispatch(searchSites(value)),
    setSearchInProgressDispatch: value => dispatch(setSearchInProgress(value)),
    resetSearchQueryDispatch: () => dispatch(resetSearchQuery()),
    incrementSearchPageDispatch: () => dispatch(incrementSearchPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);