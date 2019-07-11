import { RESET_FILTERS, SET_HIGHWAY_FILTERS, SET_REGION_FILTERS, SET_NEAR_ME_FILTERS, SET_MY_SITES_FILTERS } from '../types';

const initialState = {
  highwaysFilter: [],
  regionsFilter: [],
  nearMeFilter: false,
  mySitesFilter: false
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HIGHWAY_FILTERS: {
      return {
        ...state,
        regionsFilter: [],
        highwaysFilter: action.payload,
        nearMeFilter: false,
        mySitesFilter: false
      }
    }
    case SET_REGION_FILTERS: {
      return {
        ...state,
        highwaysFilter: [],
        regionsFilter: action.payload,
        nearMeFilter: false,
        mySitesFilter: false
      }
    }
    case SET_NEAR_ME_FILTERS: {
      return {
        ...state,
        nearMeFilter: action.payload,
        mySitesFilter: false,
        highwaysFilter: [],
        regionsFilter: []
      }
    }
    case SET_MY_SITES_FILTERS: {
      return {
        ...state,
        nearMeFilter: false,
        mySitesFilter: action.payload,
        highwaysFilter: [],
        regionsFilter: []
      }
    }
    case RESET_FILTERS: {
      return {
        ...initialState
      }
    }
    default:
      return state;
  }
}