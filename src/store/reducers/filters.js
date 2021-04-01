import {
    SET_SITE_TYPE_FILTER,
    SET_REGION_FILTER,
    SET_HIGHWAY_FILTER,
    SET_FAVORITES,
} from '../types';

const initialState = {
    siteTypes: [],
    regions: [],
    highways: [],
    nearMe: false,
    myFavorites: [],
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SITE_TYPE_FILTER:
            return {
                ...state,
                siteTypes: action.payload
            }
        case SET_REGION_FILTER:
            return {
                ...state,
                regions: action.payload
            }
        case SET_HIGHWAY_FILTER:
            return {
                ...state,
                highways: action.payload
            }
        case SET_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload
            }
        default:
            return state;
    }
}
