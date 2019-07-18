import { SET_LOCALE } from '../types';

const initialState = {
  locale: 'en'
}

export default function localeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE: {
      return {
        ...state,
        locale: action.payload
      }
    }
    default:
      return state;
  }
}