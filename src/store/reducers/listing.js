import {ADD_LISTING, FILTER_LISTING, INCREMENT_LISTING_PAGE, TOGGLE_LISTING_VIEW, UPDATED_GM_LISTING} from '../types';
import {APP_CONFIG} from '../../config';
import i18n from '../../locale/locale';
import {getPreciseDistance} from 'geolib';
import orderByDistance from 'geolib/es/orderByDistance';

const {itemsToShow} = APP_CONFIG.listing;

const initialState = {
    filteringInProgress: false,
    selectedListingView: 'MAP',
    listingItemsCount: 0,
    currentListingPage: 1,
    listingPagesLimit: 1,
    listingRaw: [],
    listingFiltered: []
};

function filterListing(filters, location, listingRaw) {
    const {highwaysFilter, mySitesFilter, mySites, nearMeFilter, regionsFilter, sitesTypeFilter} = filters;
    console.info('======+> filterListing', nearMeFilter, location);
    let result = listingRaw;

    if (!highwaysFilter.length && !mySitesFilter && !nearMeFilter && !regionsFilter.length && !sitesTypeFilter.length) {
        return listingRaw;
    }
    if (highwaysFilter.length) {
        result = listingRaw.filter(item => highwaysFilter.includes(item.highway_name))
    }
    if (regionsFilter.length) {
        result = listingRaw.filter(item => regionsFilter.includes(item.region))
    }
    if (mySitesFilter) {
        result = listingRaw.filter(item => mySites.includes(item.site_id))
    }
    if (nearMeFilter && location) {
        result = listingRaw
            .filter(item => {
                if (item && item.map && item.map.distance) { // filter by the roadway distance
                    return (item.map.distance / 1000) < 200;
                } else { // in case roadway fails filter by straight line
                    let distance = getPreciseDistance(
                        {latitude: location.latitude, longitude: location.longitude},
                        {latitude: item.latitude, longitude: item.longitude},
                        1
                    );
                    if ((distance / 1000) < 200) {
                        return true
                    }
                }

                return false;
            })
    }

    // Site Type
    if (sitesTypeFilter.length) {
        result = result.filter(item => {
            let res = [];
            // sitesTypeFilter.filter(element => item.site_types.includes(i18n.t(element))).length >= 1
            console.info('sitesTypeFilter ==>', sitesTypeFilter)
            sitesTypeFilter.map(site_type => {
                let keywords = String(i18n.t(site_type)).split(' ');
                if (item.site_types) {
                    item.site_types.map(type => {
                        if (type.includes(keywords[0])) {
                            res.push(keywords[0]);
                        }
                    })
                }


            });

            return (!!res.length && res.length <= sitesTypeFilter.length);
        })
        // result = result.filter(item => sitesTypeFilter.filter(element => item.site_types.includes(i18n.t(element))).length >= 1)
    }
    return result;
}

export default function listingReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_LISTING_VIEW: {
            return {
                ...state,
                selectedListingView: action.payload
            }
        }
        case FILTER_LISTING: {
            const listingFiltered = filterListing(action.payload.filters, action.payload.location, [...state.listingRaw]);
            return {
                ...state,
                listingFiltered,
                listingItemsCount: listingFiltered.length,
                listingPagesLimit: Math.ceil(listingFiltered.length / itemsToShow),
                currentListingPage: 1
            }
        }
        case INCREMENT_LISTING_PAGE: {
            return {
                ...state,
                currentListingPage: state.currentListingPage + 1
            }
        }
        case ADD_LISTING: {
            let sites = action.payload;
            let listingRaw = state.listingRaw;
            if (listingRaw.length) {
                sites = sites.map(site => {
                    let item = listingRaw.filter(_i => _i.site_id === site.site_id)[0]
                    if (item) {
                        return {
                            ...item,
                            ...site
                        }
                    }
                    return site
                });
            }

            return {
                ...state,
                listingRaw: sites
            }
        }
        case UPDATED_GM_LISTING: {
            let item = action.payload;
            let listingFiltered = state.listingFiltered;
            let listingRaw = state.listingRaw;

            listingRaw = listingRaw.map(list => {
                if (list.site_id === item.site_id) {
                    return {
                        ...list,
                        // map: null,
                        map: item.map,
                    }
                }
                return list
            });
            listingFiltered = listingFiltered.map(list => {
                if (list.site_id === item.site_id) {
                    return {
                        ...list,
                        // map: null,
                        map: item.map,
                    }
                }
                return list
            });

            return {
                ...state,
                listingFiltered,
                listingRaw
            }
        }
        default:
            return state;
    }
}
