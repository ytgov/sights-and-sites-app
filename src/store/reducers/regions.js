import {RESET_REGION} from '../types';

import {getRegionFromString, RegionNames} from '../../shared/mapping/mapRegions';

const initialState = {
    regions: [
        getRegionFromString(RegionNames.CAMPBELL),
        getRegionFromString(RegionNames.KLONDIKE),
        getRegionFromString(RegionNames.KLUANE),
        getRegionFromString(RegionNames.NORTH_YUKON),
        getRegionFromString(RegionNames.SILVER_TRAIL),
        getRegionFromString(RegionNames.SOUTHERN_LAKE),
        getRegionFromString(RegionNames.WATSON_LAKE),
        getRegionFromString(RegionNames.WHITE_HORSE),
    ]
};

export default function regionsReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_REGION: {
            return {
                ...state,
                regions: initialState.regions
            }
        }
        default:
            return state;
    }
}
