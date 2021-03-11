import {SET_HIGHWAY_SELECTION} from '../types';
import filterHighways from '../../screens/filters/data/filterHighways';

const initialState = {
    highways: filterHighways
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
