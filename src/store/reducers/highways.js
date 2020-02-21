import {SET_HIGHWAY_SELECTION} from '../types';

const initialState = {
    highways: [
        {
            id: 1,
            name: 'Alaska Highway',
            fr_name: 'Route de l’Alaska',
            roadNumber: 1
        },
        {
            id: 2,
            name: 'Klondike Highway',
            fr_name: 'Route du Klondike',
            roadNumber: 2
        },
        {
            id: 3,
            name: 'Haines Road',
            fr_name: 'Route de Haines',
            roadNumber: 3,
        },
        {
            id: 4,
            name: 'Robert Campbell Highway',
            fr_name: 'Route Campbell',
            roadNumber: 4,
        },
        {
            id: 5,
            name: 'Dempster Highway',
            fr_name: 'Route Dempster',
            roadNumber: 5,
        },
        {
            id: 6,
            name: 'Canol Road',
            fr_name: 'Route Canol',
            roadNumber: 6,
        },
        {
            id: 7,
            name: 'Atlin Road',
            fr_name: 'Route d’Atlin',
            roadNumber: 7,
        },
        {
            id: 8,
            name: 'Tagish Road',
            fr_name: 'Route de Tagish',
            roadNumber: 8
        },
        {
            id: 9,
            name: 'Top of the World Highway',
            fr_name: 'Route Top of the World',
            roadNumber: 9
        },
        {
            id: 10,
            name: 'Nahanni Range Road',
            fr_name: 'Route Nahanni Range',
            roadNumber: 10
        },
        {
            id: 11,
            name: 'Silver Trail',
            fr_name: 'Route Silver Trail',
            roadNumber: 11
        },
        {
            id: 14,
            name: 'Takhini Hot Springs Road',
            fr_name: 'Takhini Hot Springs',
            roadNumber: 14
        },
        {
            id: 15,
            name: 'Mitchell Road',
            fr_name: 'Route Mitchell',
            roadNumber: 15
        },
        {
            id: 37,
            name: 'Stewart-Cassiar Highway',
            fr_name: 'Route de Cassiar',
            roadNumber: 37
        }
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
