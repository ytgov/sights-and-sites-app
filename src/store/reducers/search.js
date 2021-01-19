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
            console.info('RESET_SEARCH_QUERY ==>')
            let queryObj = action.payload;
            let recentQueries = state.recentQueries;
            if (queryObj != null && queryObj.query) {
                recentQueries = recentQueries.filter(qq => {
                   return !(qq.queryFormatted.includes(queryObj.queryFormatted) || queryObj.queryFormatted.includes(qq.queryFormatted))
                });
                recentQueries = [
                    ...recentQueries,
                    queryObj,
                ];
            }
            return {
                ...state,
                recentQueries,
                searchQuery: '',
                searchInProgress: false
            }
        }
        case SEARCH_SITES: {
            const {listing, query, queryFormatted, locale} = action.payload;
            let query_value = String(query).toLowerCase();
            const searchMatched = listing.filter(site => {
                let matched = false;
                if (
                    site.site_name &&
                    (
                        String(site.site_name).toLowerCase().includes(queryFormatted) ||
                        String(site.site_name).toLowerCase().includes(query_value)
                    )
                ) {
                    matched = true;
                }

                if (
                    site.highway_name &&
                    (
                        String(site.highway_name).toLowerCase().includes(queryFormatted) ||
                        String(site.highway_name).toLowerCase().includes(query_value)
                    )
                ) {
                    matched = true;
                }

                if (
                    site.secondary_road_name &&
                    (
                        String(site.secondary_road_name).toLowerCase().includes(queryFormatted) ||
                        String(site.secondary_road_name).toLowerCase().includes(query_value)
                    )
                ) {
                    matched = true;
                }


                return matched
            }).map(site => site.site_id);
            // const searchMatched = listing.filter(site => site.indexes[locale].title.includes(queryFormatted)).map(site => site.id);
            return {
                ...state,
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
