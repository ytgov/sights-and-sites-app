import {
    RESET_LOCATION,
    SET_NETWORK_STATUS,
    SET_ONBOARDING_FINISHED,
    SET_SELECT_LOCALE_ACTION,
    UPDATE_LOCATION,
    SHOW_HEADER,
    HIDE_HEADER,
    TOGGLE_SEARCH,
    SHOW_SEARCH,
    HIDE_SEARCH,
    GET_USER_LOCATION_SUCCESS,
    SET_SITE_DISTANCE,
    SET_CURRENT_SCREEN_NAME,
} from '../types';

const initialState = {
    hasUserSelectedLocale: false,
    hasUserPassedOnboarding: false,
    userLocation: null,
    networkAvailable: true,
    headerVisible: true,
    searchVisible: false,
    distances: {}
}

export default function coreReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECT_LOCALE_ACTION: {
            return {
                ...state,
                hasUserSelectedLocale: action.payload
            }
        }
        case SET_ONBOARDING_FINISHED: {
            return {
                ...state,
                hasUserPassedOnboarding: true
            }
        }

        case SHOW_HEADER:
        case HIDE_HEADER:
            return {
                ...state,
                headerVisible: action.payload
            }

        case TOGGLE_SEARCH:
            return {
                ...state,
                searchVisible: !state.searchVisible
            }
        case SHOW_SEARCH:
        case HIDE_SEARCH:
            return {
                ...state,
                searchVisible: action.payload
            }
        case SET_CURRENT_SCREEN_NAME:
            return {
                ...state,
                currentScreenName: action.payload
            }

        case GET_USER_LOCATION_SUCCESS:
            return {
                ...state,
                userLocation: action.payload.coordinates
            }

        case SET_SITE_DISTANCE:
            return {
                ...state,
                distances: {
                    ...state.distances,
                    ...{[action.payload.site_id]: action.payload}
                }
            }

        default:
            return state;
    }
}
