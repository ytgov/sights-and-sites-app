import {ADD_LISTING, FILTER_LISTING, INCREMENT_LISTING_PAGE, TOGGLE_LISTING_VIEW} from '../types';

export const filterListing = () => (dispatch, getState) => {
    const {filtersStore, coreStore} = getState();
    dispatch({
        type: FILTER_LISTING,
        payload: {
            filters: filtersStore,
            location: coreStore.location
        }
    })
}

export function toggleListingView(value) {
    return {
        type: TOGGLE_LISTING_VIEW,
        payload: value
    }
}

export function incrementListingPage() {
    return {
        type: INCREMENT_LISTING_PAGE
    }
}

export function addListing(value) {
    return {
        type: ADD_LISTING,
        payload: value
    }
}
