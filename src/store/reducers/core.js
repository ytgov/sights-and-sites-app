import { SET_SELECT_LOCALE_ACTION } from '../types';

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
    default:
      return state;
  }
}