import {getHighwayFromString, HighwayNames} from '~shared/mapping/mapHighways';

const initialState = {
    highways: [
        getHighwayFromString(HighwayNames.ALASKA),
        getHighwayFromString(HighwayNames.ATLIN),
        getHighwayFromString(HighwayNames.CANOL),
        getHighwayFromString(HighwayNames.DEMPSTER),
        getHighwayFromString(HighwayNames.HAINES),
        getHighwayFromString(HighwayNames.KLONDIKE),
        getHighwayFromString(HighwayNames.NAHANNI_RANGE),
        getHighwayFromString(HighwayNames.ROBERT_CAMPBELL),
        getHighwayFromString(HighwayNames.SILVER_TRAIL),
        getHighwayFromString(HighwayNames.TAGISH),
        getHighwayFromString(HighwayNames.TOP_OF_THE_WORLD),
    ]
}

export default function highwaysReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
