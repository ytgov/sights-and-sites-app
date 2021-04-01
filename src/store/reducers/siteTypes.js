import {getSiteTypeFromString, SiteTypesRaw} from '~shared/mapping/mapSiteTypes';

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
        default:
            return state;
    }
}
