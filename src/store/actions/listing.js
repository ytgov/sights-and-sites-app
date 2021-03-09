import {ADD_LISTING, FILTER_LISTING, INCREMENT_LISTING_PAGE, TOGGLE_LISTING_VIEW, UPDATED_GM_LISTING} from '../types';
import {getRoadInfoBetweenTwoLocations} from '../../shared/services/distance';
import {getPreciseDistance} from 'geolib';

export const filterListing = () => (dispatch, getState) => {
    const {filtersStore, coreStore} = getState();
    dispatch({
        type: FILTER_LISTING,
        payload: {
            filters: filtersStore,
            location: coreStore.location
        }
    })
}

export function toggleListingView(value) {
    return {
        type: TOGGLE_LISTING_VIEW,
        payload: value
    }
}

export function incrementListingPage() {
    return {
        type: INCREMENT_LISTING_PAGE
    }
}

export function addListing(value) {
    return {
        type: ADD_LISTING,
        payload: value
    }
}


export function fetchGMLocation(source, site) {
    return async function (dispatch) {
        if (!site.map || site.map.source !== source) {

            let result = await getRoadInfoBetweenTwoLocations(source, site);
            console.info('fetchGMLocation fired', result);
            dispatch(updateGMListing({
                site_id: site.site_id,
                map: result,
            }));
        }

    }
}

export function addGMListing() {
    return async function (dispatch, store) {
        let state = store();
        let location = state.coreStore.location;
        if(!location.latitude || !location.longitude) {
            return ;
        }
        if (state.listingStore && state.listingStore.listingFiltered && state.listingStore.listingFiltered.length) {
            let sites = state.listingStore.listingFiltered;
            // for (let index = 0; index < 2; index++) { // TODO:: make it loop through all the listing in production
            for (let index = 0; index < sites.length; index++) {
                let site = sites[index];
                if (!site.map || (site.map && site.map.source !== location)) {
                    let canFetch = true;
                    if ((site.map && site.map.source !== location)) {
                        let distance = getPreciseDistance(
                            {latitude: location.latitude, longitude: location.longitude},
                            {latitude: site.map.source.latitude, longitude: site.map.source.longitude},
                            1
                        );
                        if ((distance / 1000) < 10) {
                            canFetch = false;
                        }
                    }

                    // fire the task only if the distance bigger than 10km

                    if(canFetch) {
                        console.info('Get Site Map ==>', site.site_id, index)
                        let result = await getRoadInfoBetweenTwoLocations(location, site);
                        dispatch(updateGMListing({
                            site_id: site.site_id,
                            map: result,
                        }));
                    }

                }
            }
        }
    }
}

export function updateGMListing(value) {
    return {
        type: UPDATED_GM_LISTING,
        payload: value
    }
}
