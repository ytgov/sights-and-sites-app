import {
    RESET_LOCATION,
    SET_NETWORK_STATUS,
    SET_ONBOARDING_FINISHED,
    SET_SELECT_LOCALE_ACTION,
    UPDATE_LOCATION
} from '../types';

const initialState = {
    hasUserSelectedLocale: false,
    hasUserPassedOnboarding: false,
    canGrabLocation: true,
    location: null,
    networkAvailable: true
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
        case UPDATE_LOCATION: {
            return {
                ...state,
                canGrabLocation: true,
                // location: { // Just for testing canada
                //     latitude: 46.333389,
                //     longitude: -75.58429,
                // },
                // location: { // Just for testing tunisia
                //     latitude: 43.7452,
                //     longitude: 10.7613,
                // },
                location: action.payload
            }
        }
        case RESET_LOCATION: {
            return {
                ...state,
                location: null,
                canGrabLocation: false
            }
        }
        case SET_NETWORK_STATUS: {
            return {
                ...state,
                networkAvailable: action.payload
            }
        }
        default:
            return state;
    }
}
