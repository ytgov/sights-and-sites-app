import {
    RESET_LOCATION,
    SET_NETWORK_STATUS,
    SET_ONBOARDING_FINISHED,
    SET_SELECT_LOCALE_ACTION,
    UPDATE_LOCATION,
    SHOW_HEADER,
    HIDE_HEADER,
    TOGGLE_SEARCH
} from '../types';

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

export function resetLocation() {
    return {
        type: RESET_LOCATION
    }
}

export function updateLocation(value) {
    return {
        type: UPDATE_LOCATION,
        payload: value
    }
}

export function setNetworkStatus(value) {
    return {
        type: SET_NETWORK_STATUS,
        payload: value
    }
}

export function showHeader() {
    return {
        type: SHOW_HEADER,
        payload: true
    }
}

export function hideHeader() {
    return {
        type: HIDE_HEADER,
        payload: false
    }
}

export function toggleSearch() {
    return {
        type: TOGGLE_SEARCH
    }
}
