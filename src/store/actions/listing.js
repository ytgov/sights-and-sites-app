import {
    ADD_LISTING,
    FILTER_LISTING,
    ADD_LOCALIZED_LISTING
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

export const setListing = sites => ({
    type: ADD_LISTING,
    payload: sites
})

export const addLocalizedListing = (list, langCode) => ({
  type: ADD_LOCALIZED_LISTING,
  payload: {list, langCode}
})
