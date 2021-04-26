import {
    ADD_LISTING,
    FILTER_LISTING,
    ADD_LOCALIZED_LISTING
} from '../types';
import _ from 'lodash';
import {mapSiteDetails} from '~shared/mapping/mapSiteDetails';

const initialState = {
    listingRaw: [],
    listingFiltered: [],
    listingLocalized: {
        en: [],
        fr: []
    }
};

const filterListing = (filters, location, listingRaw) => {
    const {regions, highways, siteTypes} = filters

    const filteredByRegion = listingRaw.filter((item) => {
        if (regions.length > 0) {
            // get items that matches region filter.
            return regions.includes(item.region.id);
        } else {
            return true;
        }
    })

    const filteredByHighway = filteredByRegion.filter((item) => {
        if (highways.length > 0) {
            return highways.includes(item.highway.id);
        } else {
            return true;
        }
    })

    const filteredByType = filteredByHighway.filter((item) => {
        if (siteTypes.length > 0) {
            const itemSiteTypes = item.site_types.map((s) => s.id)
            const intersection = _.intersection(siteTypes, itemSiteTypes);
            if (intersection.length === 0) {
                return false;
            }
        }

        return true;
    })

    return filteredByType
}

export default function listingReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_LISTING: {
            const {filters, location} = action.payload
            const listingFiltered = filterListing(filters, location, [...state.listingRaw]);
            return {
                ...state,
                listingFiltered,
            }
        }
        case ADD_LISTING: {
            let sites = action.payload;
            return {
                ...state,
                listingRaw: sites.map(s => mapSiteDetails(s))
            }
        }
        case ADD_LOCALIZED_LISTING: {
            const {list, langCode} = action.payload
            const sortedList = _.sortBy(list, ['site_name'], ['desc'])
            return {
                ...state,
                listingLocalized: {
                    ...state.listingLocalized,
                    ...{[langCode]: sortedList}
                }
            }
        }

        default:
            return state;
    }
}
