import {INCREMENT_SEARCH_PAGE, RESET_SEARCH_QUERY, SEARCH_IN_PROGRESS, SEARCH_SITES} from '../types';
import {APP_CONFIG} from '../../config';

const {recentQueriesToShow, itemsToShow} = APP_CONFIG.search;

const initialState = {
    searchQuery: '',
    searchInProgress: false,
    searchItemsCount: 0,
    currentSearchPage: 1,
    searchPagesLimit: 1,
    recentQueries: [],
    searchMatched: []
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_IN_PROGRESS: {
            return {
                ...state,
                searchInProgress: action.payload
            }
        }
        case RESET_SEARCH_QUERY: {
            console.info("RESET_SEARCH_QUERY ==>")
            return {
                ...state,
                searchQuery: '',
                searchInProgress: false
            }
        }
        case SEARCH_SITES: {
            const {listing, query, queryFormatted, locale} = action.payload;
            const recentQueries = [...state.recentQueries, {query, queryFormatted}];
            if (recentQueries.length > recentQueriesToShow) {
                recentQueries.shift();
            }
            const searchMatched = listing.filter(site => site.site_name.includes(queryFormatted)).map(site => site.site_id);
            // const searchMatched = listing.filter(site => site.indexes[locale].title.includes(queryFormatted)).map(site => site.id);
            return {
                ...state,
                recentQueries,
                searchQuery: query,
                searchInProgress: false,
                searchItemsCount: searchMatched.length,
                searchPagesLimit: Math.ceil(searchMatched.length / itemsToShow),
                currentSearchPage: 1,
                searchMatched
            }
        }
        case INCREMENT_SEARCH_PAGE: {
            return {
                ...state,
                currentSearchPage: state.currentSearchPage + 1
            }
        }
        default:
            return state;

    }
}
