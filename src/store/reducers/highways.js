import {SET_HIGHWAY_SELECTION} from '../types';
import {getHighwayFromString, HighwayNames} from '../../shared/mapping/mapHighways';

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
        case SET_HIGHWAY_SELECTION: {
            return {
                highways: initialState.highways
            }
        }
        default:
            return state;
    }
}
