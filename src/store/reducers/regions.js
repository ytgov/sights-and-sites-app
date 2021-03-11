import {RESET_REGION} from '../types';

import filterRegions from '../../screens/filters/data/filterRegions';

const initialState = {
    regions: filterRegions
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
