import { SET_SELECT_LOCALE_ACTION, SET_ONBOARDING_FINISHED } from '../types';

const initialState = {
  hasUserSelectedLocale: false,
  hasUserPassedOnboarding: false
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
    default:
      return state;
  }
}