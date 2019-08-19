import { SET_SELECT_LOCALE_ACTION, SET_ONBOARDING_FINISHED, UPDATE_LOCATION, RESET_LOCATION, SET_NETWORK_STATUS } from '../types';

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