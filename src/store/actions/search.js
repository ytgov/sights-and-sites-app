import {INCREMENT_SEARCH_PAGE, RESET_SEARCH_QUERY, SEARCH_IN_PROGRESS, SEARCH_SITES} from '../types';

export function setSearchInProgress(value) {
    return {
        type: SEARCH_IN_PROGRESS,
        payload: value
    }
}

export function resetSearchQuery() {
    return {
        type: RESET_SEARCH_QUERY,
        payload: ''
    }
}

export function incrementSearchPage() {
    return {
        type: INCREMENT_SEARCH_PAGE
    }
}


export const searchSites = value => (dispatch, getState) => {
    const state = getState();
    const {query, queryFormatted} = value;
    const {listingRaw} = state.listingStore;
    const {locale} = state.localeStore;
    dispatch({
        type: SEARCH_SITES,
        payload: {
            listing: listingRaw,
            locale,
            query,
            queryFormatted
        }
    })
}
