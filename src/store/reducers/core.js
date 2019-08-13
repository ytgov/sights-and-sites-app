import { SET_SELECT_LOCALE_ACTION, SET_ONBOARDING_FINISHED, UPDATE_LOCATION } from '../types';

const initialState = {
  hasUserSelectedLocale: false,
  hasUserPassedOnboarding: false,
  location: null
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
        location: action.payload
      }
    }
    default:
      return state;
  }
}