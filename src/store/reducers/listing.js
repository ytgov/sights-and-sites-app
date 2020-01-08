import orderByDistance from 'geolib/es/orderByDistance';
import {ADD_LISTING, FILTER_LISTING, INCREMENT_LISTING_PAGE, TOGGLE_LISTING_VIEW} from '../types';
import {APP_CONFIG} from '../../config';
import i18n from '../../locale/locale';

const {itemsToShow} = APP_CONFIG.listing;

const initialState = {
    filteringInProgress: false,
    selectedListingView: 'MAP',
    listingItemsCount: 0,
    currentListingPage: 1,
    listingPagesLimit: 1,
    listingRaw: [],
    listingFiltered: []
}

function filterListing(filters, location, listingRaw) {
    const {highwaysFilter, mySitesFilter, mySites, nearMeFilter, regionsFilter, sitesTypeFilter} = filters;
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
        const resultIDs = orderByDistance(location, listingRaw.map(item => {
            return {id: item.site_id, latitude: item.latitude, longitude: item.longitude}
        })).map(item => item.id);
        result = listingRaw.slice().sort((a, b) => resultIDs.indexOf(a.site_id) - resultIDs.indexOf(b.site_id));
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
            return {
                ...state,
                listingRaw: action.payload
            }
        }
        default:
            return state;
    }
}
