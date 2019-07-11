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
      name: 'Northen and Arctic',
      image: region1Image
    },
    {
      id: 2,
      name: 'Silver Trail',
      image: region2Image
    },
    {
      id: 3,
      name: 'Klondike',
      image: region3Image
    },
    {
      id: 4,
      name: 'Campbell',
      image: region4Image
    },
    {
      id: 5,
      name: 'Kluane',
      image: region5Image
    },
    {
      id: 6,
      name: 'Whitehorse',
      image: region6Image
    },
    {
      id: 7,
      name: 'Watson Lake',
      image: region7Image
    },
    {
      id: 8,
      name: 'Southern Lakes',
      image: region8Image
    }
  ]
}

export default function regionsReducer(state = initialState) {
  return state;
}