import {
    RESET_LOCATION,
    SET_NETWORK_STATUS,
    SET_ONBOARDING_FINISHED,
    SET_SELECT_LOCALE_ACTION,
    UPDATE_LOCATION,
    SHOW_HEADER,
    HIDE_HEADER,
    TOGGLE_SEARCH,
    SHOW_SEARCH,
    HIDE_SEARCH,
    GET_USER_LOCATION_BEGIN,
    GET_USER_LOCATION_SUCCESS,
    GET_USER_LOCATION_FAILURE,
    SET_SITE_DISTANCE,
    SET_CURRENT_SCREEN_NAME,
} from '../types';

import Coordinates from '~app/models/Coordinates';
import {getDrivingDistance} from '~app/shared/services/mapbox';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform } from 'react-native';

export function setSelectLocaleAction(value) {
    return {
        type: SET_SELECT_LOCALE_ACTION,
        payload: value,
    }
}

export function setOnboardingFinished() {
    return {
        type: SET_ONBOARDING_FINISHED,
    }
}

export function resetLocation() {
    return {
        type: RESET_LOCATION,
    }
}

export function updateLocation(value) {
    return {
        type: UPDATE_LOCATION,
        payload: value,
    }
}

export function setNetworkStatus(value) {
    return {
        type: SET_NETWORK_STATUS,
        payload: value,
    }
}

export function showHeader() {
    return {
        type: SHOW_HEADER,
        payload: true,
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
        type: TOGGLE_SEARCH,
    }
}

export function showSearch() {
    return {
        type: SHOW_SEARCH,
        payload: true,
    }
}

export function hideSearch() {
    return {
        type: HIDE_SEARCH,
        payload: false,
    }
}
export function setCurrentScreenName(screenName) {
    return {
        type: SET_CURRENT_SCREEN_NAME,
        payload: screenName,
    }
}

export const getUserLocationBegin = () => ({
    type: GET_USER_LOCATION_BEGIN
})

export const getUserLocationSuccess = (coordinates) => ({
    type: GET_USER_LOCATION_SUCCESS,
    payload: { coordinates }
})

export const getUserLocationFailure = (error) => ({
    type: GET_USER_LOCATION_FAILURE,
    payload: { error }
})


export function getUserLocation(callback) {
    const returnedCallback = (params) => {
        callback && typeof callback === 'function' && callback(params);
    };
    return dispatch => {
        dispatch(getUserLocationBegin())
        checkPermissionAndGetUserLocation()
            .then((coordinates) => {
                if (coordinates) {
                    dispatch(getUserLocationSuccess(coordinates))
                    returnedCallback(coordinates);
                } else {
                    dispatch(getUserLocationFailure(""))
                    returnedCallback();
                }
            })
            .catch(error => {
                dispatch(getUserLocationFailure(error.toString()))
                returnedCallback(error.toString());
            })

    }
}

/**
 * Returns user location and request location permission if necessary
 * @returns null|Coordinates
 */
const checkPermissionAndGetUserLocation = async () => {
    try {
        let result = false;

        if (Platform.OS !== 'ios') {
            result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        } else {
            result = await Geolocation.requestAuthorization('always');
        }

        const isGranted =
            (Platform.OS !== 'ios' && result === PermissionsAndroid.RESULTS.GRANTED)
            || (Platform.OS === 'ios' && result !== 'denied');

        if (isGranted) {
            // wrapped in a promise because getCurrentPosition returns void
            const { coords } = await new Promise((resolve) => {
                Geolocation.getCurrentPosition((position) => resolve(position))
            });

            return new Coordinates(coords.longitude, coords.latitude);
        } else {
            alert('Could not get user location');
            return null;
        }
    }
    catch (error) {
        alert('Could not get user location');
        return null;
    }
}

export const setSiteDistance = (site_id, distance) => ({
    type: SET_SITE_DISTANCE,
    payload: {
        site_id,
        distance,
        updated: Date.now()
    }
})

// The number of milliseconds to wait before resending Mapbox request.
const MAPBOX_CACHE = 5 * 60 * 1000;

export const getUserToSiteDistance = (userLocation, site, cachedDistances) => {
    const {latitude, longitude, site_id} = site
    let shouldCalculate = false
    return dispatch => {
        // if site has already cached
        if (cachedDistances.hasOwnProperty(site_id)) {

            // check if cache expired
            const cached = cachedDistances[site_id]
            if (Date.now() - cached.updated > MAPBOX_CACHE) {
                // cache expired, recalculate
                shouldCalculate = true

            } else {
                // cache is still valid, do nothing
            }
        }
        // site hasn't yet cached,
        else {
            shouldCalculate = true
        }

        if (shouldCalculate) {
            getDrivingDistance(userLocation, {latitude, longitude})
                .then(result => {
                    if (result.status === 200) {
                        dispatch(setSiteDistance(site_id, result.distance))
                    }
                })
        }
    }
}
