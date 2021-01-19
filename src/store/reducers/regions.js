import {RESET_REGION} from '../types';

const region1Image = require('../../../assets/stacks/where-to/region1.png');
const region2Image = require('../../../assets/stacks/where-to/region2.png');
const region3Image = require('../../../assets/stacks/where-to/region3.png');
const region4Image = require('../../../assets/stacks/where-to/region4.png');
const region5Image = require('../../../assets/stacks/where-to/region5.png');
const region6Image = require('../../../assets/stacks/where-to/region6.png');
const region7Image = require('../../../assets/stacks/where-to/region7.png');
const region8Image = require('../../../assets/stacks/where-to/region8.png');

const initialState = {
    regions: [
        {
            id: 1,
            name: 'North Yukon',
            fr_name: 'Nord et Arctique',
            image: region1Image
        },
        {
            id: 2,
            name: 'Silver Trail',
            fr_name: 'Silver Trail',
            image: region2Image
        },
        {
            id: 3,
            name: 'Klondike',
            fr_name: 'Klondike',
            image: region3Image
        },
        {
            id: 4,
            name: 'Campbell',
            fr_name: 'Campbell',
            image: region4Image
        },
        {
            id: 5,
            name: 'Kluane',
            fr_name: 'Kluane',
            image: region5Image
        },
        {
            id: 6,
            name: 'Whitehorse',
            fr_name: 'Whitehorse',
            image: region6Image
        },
        {
            id: 7,
            name: 'Watson Lake',
            fr_name: 'Watson Lake',
            image: region7Image
        },
        {
            id: 8,
            name: 'Southern Lakes',
            fr_name: 'Lac du Sud',
            image: region8Image
        }
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
