import { RESET_FILTERS, SET_HIGHWAY_FILTERS, SET_REGION_FILTERS, SET_NEAR_ME_FILTERS, SET_MY_SITES_FILTERS, SET_SITES_TYPE_FILTER_VISIBILITY, SET_SITES_TYPE_FILTER, TOGGLE_MY_SITES_STATE } from '../types';


export function setHighwayFilters(value) {
  return {
    type: SET_HIGHWAY_FILTERS,
    payload: value
  }
}

export function setRegionFilters(value) {
  return {
    type: SET_REGION_FILTERS,
    payload: value
  }
}

export function setNearMeFilters(value) {
  return {
    type: SET_NEAR_ME_FILTERS,
    payload: value
  }
}

export function setMySitesFilters(value) {
  return {
    type: SET_MY_SITES_FILTERS,
    payload: value
  }
}

export function toggleSitesTypeFilter(value) {
  return {
    type: SET_SITES_TYPE_FILTER_VISIBILITY,
    payload: value
  }
}

export function setSitesTypeFilters(value) {
  return {
    type: SET_SITES_TYPE_FILTER,
    payload: value
  }
}


export function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}

export function toggleMySitesState(value) {
  return {
    type: TOGGLE_MY_SITES_STATE,
    payload: value
  }
}