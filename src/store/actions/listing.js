import { TOGGLE_LISTING_VIEW, FILTER_LISTING, TOGGLE_MY_SITES_STATE } from '../types';

export function filterListing(value) {
  return {
    type: FILTER_LISTING,
    payload: value
  }
}

export function toggleListingView(value) {
  return {
    type: TOGGLE_LISTING_VIEW,
    payload: value
  }
}
