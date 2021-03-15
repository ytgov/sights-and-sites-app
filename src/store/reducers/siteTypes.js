import {RESET_SITE_TYPE} from '../types';
import {getSiteTypeFromString, SiteTypes} from '../../shared/mapping/mapSiteTypes';

const initialState = {
    siteTypes: [
        getSiteTypeFromString(SiteTypes.CAMPING),
        getSiteTypeFromString(SiteTypes.RECREATION),
        getSiteTypeFromString(SiteTypes.WILDLIFE_LANDSCAPE),
        getSiteTypeFromString(SiteTypes.HISTORY_CULTURE),
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
