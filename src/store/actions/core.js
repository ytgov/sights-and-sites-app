import { SET_SELECT_LOCALE_ACTION, SET_ONBOARDING_FINISHED, UPDATE_LOCATION } from '../types';

export function setSelectLocaleAction(value) {
  return {
    type: SET_SELECT_LOCALE_ACTION,
    payload: value
  }
}

export function setOnboardingFinished() {
  return {
    type: SET_ONBOARDING_FINISHED
  }
}


export function updateLocation(value) {
  return {
    type: UPDATE_LOCATION,
    payload: value
  }
}
