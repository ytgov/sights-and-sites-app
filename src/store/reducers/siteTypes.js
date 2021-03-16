import {RESET_SITE_TYPE} from '../types';
import {getSiteTypeFromString, SiteTypesRaw} from '../../shared/mapping/mapSiteTypes';

const initialState = {
    siteTypes: [
        getSiteTypeFromString(SiteTypesRaw.CAMPING),
        getSiteTypeFromString(SiteTypesRaw.RECREATION),
        getSiteTypeFromString(SiteTypesRaw.WILDLIFE_LANDSCAPE),
        getSiteTypeFromString(SiteTypesRaw.HISTORY_CULTURE),
    ]
};

export default function siteTypesReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_SITE_TYPE: {
            return {
                ...state,
                siteTypes: initialState.siteTypes
            }
        }
        default:
            return state;
    }
}
