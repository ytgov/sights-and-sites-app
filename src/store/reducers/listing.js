import { TOGGLE_LISTING_VIEW } from '../types';

const initialState = {
  selectedListingView: 'MAP'
}

export default function coreReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LISTING_VIEW: {
      return {
        ...state,
        selectedListingView: action.payload
      }
    }
    default:
      return state;
  }
}