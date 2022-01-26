import {
    SET_SEARCH_KEYWORD,
    SET_SEARCH_RESULTS,
    RESET_SEARCH
} from '../types';

import {filter as _filter} from 'lodash';

export const setSearchKeyword = (keyword) => ({
    type: SET_SEARCH_KEYWORD,
    payload: keyword
})

export const setSearchResults = (results) => ({
    type: SET_SEARCH_RESULTS,
    payload: results
})

export const resetSearch = () => ({
    type: RESET_SEARCH
})

export const doSearch = (keyword, listing) => {
    return dispatch => {
        dispatch(setSearchKeyword(keyword))
        const matched = _filter(listing, (i) => {
            return i.site_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });

        dispatch(setSearchResults(matched))

    }
}

export const doResetSearch = () => {
    return dispatch => {
        dispatch(resetSearch());
    };
}
