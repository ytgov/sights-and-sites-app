import React from 'react';
import PropTypes from 'prop-types';
import SearchStyles from '../../../stacks/search/screens/search/search.styles';
import {TextInput, TouchableOpacity, View} from 'react-native';
import i18n from '../../../locale/locale';
import {Ionicons} from '@expo/vector-icons';
import {Helpers} from '../../../theme/theme';
import {formatSearchIndex} from '../../services/search'
import {incrementSearchPage, resetSearchQuery, searchSites, setSearchInProgress} from '../../../store/actions/search';
import {connect} from 'react-redux';

const SearchBox = (props) => {
    const {inProgress, searchQuery, resetSearchQueryDispatch} = props

    console.log('box', props)
    return (
        <View style={SearchStyles.searchBox}>
            <TextInput
                editable={!inProgress}
                autoFocus
                autoCapitalize={'none'}
                autoCompleteType={'off'}
                autoCorrect={false}
                placeholder={i18n.t('search.placeholder')}
                placeholderTextColor='#000'
                style={SearchStyles.searchInput}
                defaultValue={searchQuery}
                onChangeText={() => {}}
                // onChangeText={query => this.search(query)}
            />
            {
                (!!searchQuery) && (
                    <TouchableOpacity style={SearchStyles.clearQueryButton}
                                      onPress={() => resetSearchQueryDispatch(null)}>
                        <Ionicons name="ios-close-circle" size={24} color="#929496"
                                  style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]}/>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

SearchBox.propTypes = {
    inProgress: PropTypes.bool,
    searchQuery: PropTypes.string
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
        resetSearchQueryDispatch: (value) => dispatch(resetSearchQuery(value)),
        incrementSearchPageDispatch: () => dispatch(incrementSearchPage())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
