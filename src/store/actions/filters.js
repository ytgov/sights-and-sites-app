import {
    SET_SITE_TYPE_FILTER,
    SET_REGION_FILTER
} from '../types';

export const setSiteTypesFilter = (siteTypes) => {
    return {
        type: SET_SITE_TYPE_FILTER,
        payload: siteTypes
    }
}

export const setRegionsFilter = (regions) => {
    return {
        type: SET_REGION_FILTER,
        payload: regions
    }
}

// export function resetRegions() {
//     return {
//         type: RESET_REGION,
//     }
// }
//
// export function resetHighways() {
//     return {
//         type: SET_HIGHWAY_SELECTION,
//     }
// }
//
//
// export function setHighwayFilters(value) {
//     return {
//         type: SET_HIGHWAY_FILTERS,
//         payload: value
//     }
// }
//
// export function setRegionFilters(value) {
//     return {
//         type: SET_REGION_FILTERS,
//         payload: value
//     }
// }
//
// export function setNearMeFilters(value) {
//     return {
//         type: SET_NEAR_ME_FILTERS,
//         payload: value
//     }
// }
//
// export function setMySitesFilters(value) {
//     return {
//         type: SET_MY_SITES_FILTERS,
//         payload: value
//     }
// }
//
// export function toggleSitesTypeFilter(value) {
//     return {
//         type: SET_SITES_TYPE_FILTER_VISIBILITY,
//         payload: value
//     }
// }
//
// export function setSitesTypeFilters(value) {
//     return {
//         type: SET_SITES_TYPE_FILTER,
//         payload: value
//     }
// }
//
//
// export function resetFilters() {
//     return {
//         type: RESET_FILTERS
//     }
// }
//
// export function toggleMySitesState(value) {
//     return {
//         type: TOGGLE_MY_SITES_STATE,
//         payload: value
//     }
// }
