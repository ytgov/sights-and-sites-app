import { TOGGLE_LISTING_VIEW } from '../types';

export function toggleListingView(value) {
  return {
    type: TOGGLE_LISTING_VIEW,
    payload: value
  }
}