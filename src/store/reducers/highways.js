import { SET_HIGHWAY_SELECTION } from '../types';

const initialState = {
  highways: [
    {
      id: 1,
      name: 'Alaska Highway',
      roadNumber: 1
    },
    {
      id: 2,
      name: 'Klondike Highway',
      roadNumber: 2
    },
    {
      id: 3,
      name: 'Haines Riad',
      roadNumber: 3,
    },
    {
      id: 4,
      name: 'Campbell Highway',
      roadNumber: 4,
    },
    {
      id: 5,
      name: 'Dempster Highway',
      roadNumber: 5,
    },
    {
      id: 6,
      name: 'Canol Highway',
      roadNumber: 6,
    },
    {
      id: 7,
      name: 'Atlin Road',
      roadNumber: 7,
    },
    {
      id: 8,
      name: 'Tagish Road',
      roadNumber: 8
    },
    {
      id: 9,
      name: 'Top of the World Highway',
      roadNumber: 9
    },
    {
      id: 10,
      name: 'Nahanni Range Road',
      roadNumber: 10
    },
    {
      id: 11,
      name: 'Silver Trail',
      roadNumber: 11
    },
    {
      id: 14,
      name: 'Takhini Hot Springs Road',
      roadNumber: 14
    },
    {
      id: 15,
      name: 'Mitchell Road',
      roadNumber: 15
    },
    {
      id: 37,
      name: 'Cassiar Highway',
      roadNumber: 37
    }
  ]
}

export default function highwaysReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HIGHWAY_SELECTION: {
      return {
        highways: action.payload
      }
    }
    default:
      return state;
  }
}