import {
    SET_SITE_TYPE_FILTER,
    SET_REGION_FILTER,
    SET_HIGHWAY_FILTER,
    SET_FAVORITES,
    RESET_FILTERS,
} from '../types';

export const setSiteTypesFilter = (siteTypes) => {
    return {
        type: SET_SITE_TYPE_FILTER,
        payload: siteTypes
    }
}

export const setRegionsFilter = (regions) => {
    return {
        type: SET_REGION_FILTER,
        payload: regions
    }
}

export const setHighwaysFilter = (highways) => {
    return {
        type: SET_HIGHWAY_FILTER,
        payload: highways
    }
}

export const setFavorites = (favorites) => {
    return {
        type: SET_FAVORITES,
        payload: favorites
    }
}

export const resetFilters = () => {
    return dispatch => {
        dispatch(setSiteTypesFilter([]))
        dispatch(setRegionsFilter([]))
        dispatch(setHighwaysFilter([]))
    }
}
