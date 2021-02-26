import {
    RESET_FILTERS,
    SET_HIGHWAY_FILTERS,
    SET_MY_SITES_FILTERS,
    SET_NEAR_ME_FILTERS,
    SET_REGION_FILTERS,
    SET_SITES_TYPE_FILTER,
    SET_SITES_TYPE_FILTER_VISIBILITY,
    TOGGLE_MY_SITES_STATE
} from '../types';

const initialState = {
    highwaysFilter: [],
    regionsFilter: [],
    sitesTypeFilter: [],
    nearMeFilter: false,
    mySitesFilter: false,
    sitesTypeFilterActive: false,
    mySites: []
}

export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_HIGHWAY_FILTERS: {
            return {
                ...state,
                regionsFilter: [],
                highwaysFilter: action.payload,
                nearMeFilter: false,
                mySitesFilter: false
            }
        }
        case SET_REGION_FILTERS: {
            return {
                ...state,
                highwaysFilter: [],
                regionsFilter: action.payload,
                nearMeFilter: false,
                mySitesFilter: false
            }
        }
        case SET_NEAR_ME_FILTERS: {
            return {
                ...state,
                nearMeFilter: action.payload,
                mySitesFilter: false,
                highwaysFilter: [],
                regionsFilter: []
            }
        }
        case SET_MY_SITES_FILTERS: {
            return {
                ...state,
                nearMeFilter: false,
                mySitesFilter: action.payload,
                highwaysFilter: [],
                regionsFilter: []
            }
        }
        case SET_SITES_TYPE_FILTER_VISIBILITY: {
            return {
                ...state,
                sitesTypeFilterActive: !state.sitesTypeFilterActive
            }
        }
        case SET_SITES_TYPE_FILTER: {
            const {sitesTypeFilter} = state;
            const sitesTypeFilterCopy = JSON.parse(JSON.stringify(sitesTypeFilter));
            const actionPayloadFilterIndex = sitesTypeFilterCopy.indexOf(action.payload);
            if (actionPayloadFilterIndex >= 0) {
                sitesTypeFilterCopy.splice(actionPayloadFilterIndex, 1);
            } else {
                sitesTypeFilterCopy.push(action.payload);
            }
            return {
                ...state,
                sitesTypeFilter: sitesTypeFilterCopy
            }
        }
        case TOGGLE_MY_SITES_STATE: {
            const id = action.payload;
            const mySites = [...state.mySites];
            return {
                ...state,
                mySites: mySites.includes(id) ? mySites.filter(item => item !== id) : [...mySites, id]
            }
        }
        case RESET_FILTERS: {
            return {
                ...initialState,
                sitesTypeFilter: [], 
                mySites: state.mySites,
            }
        }
        default:
            return state;
    }
}
