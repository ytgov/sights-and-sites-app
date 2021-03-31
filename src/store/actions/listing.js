import {
    ADD_LISTING,
    FILTER_LISTING
} from '../types';

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

export function addListing(value) {
    return {
        type: ADD_LISTING,
        payload: value
    }
}
