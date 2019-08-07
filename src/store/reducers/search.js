import { SEARCH_SITES, SEARCH_IN_PROGRESS } from '../types';
import { APP_CONFIG } from '../../config';

const { itemsToShow } = APP_CONFIG.listing;
const { recentQueriesToShow } = APP_CONFIG.search;

const initialState = {
  searchInProgress: false,
  listingItemsCount: 0,
  currentListingPage: 1,
  listingPagesLimit: 1,
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
    case SEARCH_SITES: {
      const { listing, query, queryFormatted, locale } = action.payload;
      const recentQueries = [...state.recentQueries, { query, queryFormatted }];
      if (recentQueries.length > recentQueriesToShow) {
        recentQueries.shift();
      }
      return {
        ...state,
        recentQueries,
        searchInProgress: false,
        searchMatched: listing.filter(site => site.indexes[locale].title.includes(queryFormatted)).map(site => site.id)
      }
    }
    default:
      return state;

  }
}