import { TOGGLE_LISTING_VIEW, FILTER_LISTING, INCREMENT_LISTING_PAGE } from '../types';
import { APP_CONFIG } from '../../config';

const { itemsToShow } = APP_CONFIG.listing;

const initialState = {
  filteringInProgress: false,
  selectedListingView: 'MAP',
  listingItemsCount: 0,
  currentListingPage: 1,
  listingPagesLimit: 1,
  listingRaw: [
    {
      id: 1,
      uri: 'https://www.mountainphotography.com/images/xl/20160904-Twin-Lakes.jpg',
      highway: 1,
      region: 1,
      siteTypes: [1, 2],
      indexes: {
        en: {
          title: 'fivefingerrapidsen'
        },
        fr: {
          title: 'fivefingerrapidsfr'
        }
      },
      en: {
        title: 'Five Finger Rapids',
        descriprtion: 'EN With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'EN Klondike Highway, km 380'
        }
      },
      fr: {
        title: 'Five Finger Rapids',
        descriprtion: 'FR With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'FR Klondike Highway, km 380'
        }
      }
    },
    {
      id: 2,
      uri: 'https://www.mountainphotography.com/images/xl/20160831-Talus-Lake-Tent.jpg',
      highway: 2,
      region: 2,
      siteTypes: [1],
      indexes: {
        en: {
          title: 'carmacks'
        },
        fr: {
          title: 'carmacks'
        }
      },
      en: {
        title: 'Carmacks',
        descriprtion: 'EN With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 2,
          name: 'EN Klondike Highway, km 380'
        }
      },
      fr: {
        title: 'Five Finger Rapids FR',
        descriprtion: 'FR With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 2,
          name: 'FR Klondike Highway, km 380'
        }
      }
    },
    {
      id: 3,
      uri: 'https://s23835.pcdn.co/wp-content/uploads/2015/09/Canada-Yukon-Kluane-House-2.jpg',
      highway: 2,
      region: 2,
      siteTypes: [1, 2, 3, 4],
      indexes: {
        en: {
          title: 'devilselbow'
        },
        fr: {
          title: 'devilselbow'
        }
      },
      en: {
        title: 'Devil`s Elbow',
        descriprtion: 'EN With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'EN Klondike Highway, km 380'
        }
      },
      fr: {
        title: 'Devil`s Elbow',
        descriprtion: 'FR With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'FR Klondike Highway, km 380'
        }
      }
    },
    {
      id: 4,
      uri: 'https://s23835.pcdn.co/wp-content/uploads/2015/09/Canada-Yukon-Kluane-House-2.jpg',
      highway: 3,
      region: 3,
      siteTypes: [1, 4],
      indexes: {
        en: {
          title: 'montagueroadhouse'
        },
        fr: {
          title: 'montagueroadhouse'
        }
      },
      en: {
        title: 'Montague Road House',
        descriprtion: 'EN With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'EN Klondike Highway, km 380'
        }
      },
      fr: {
        title: 'Montague Road House',
        descriprtion: 'FR With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.',
        highway: {
          number: 1,
          name: 'FR Klondike Highway, km 380'
        }
      }
    }
  ],
  listingFiltered: []
}

function filterListing(filters, listingRaw) {
  const { highwaysFilter, mySitesFilter, mySites, nearMeFilter, regionsFilter, sitesTypeFilter } = filters;
  let result = listingRaw;

  if (!highwaysFilter.length && !mySitesFilter && !nearMeFilter && !regionsFilter.length && !sitesTypeFilter.length) {
    return listingRaw;
  }
  if (highwaysFilter.length) {
    result = listingRaw.filter(item => highwaysFilter.includes(item.highway))
  }
  if (regionsFilter.length) {
    result = listingRaw.filter(item => regionsFilter.includes(item.region))
  }
  if (mySitesFilter) {
    result = listingRaw.filter(item => mySites.includes(item.id))
  }

  // Site Type
  if (sitesTypeFilter.length) {
    result = result.filter(item => sitesTypeFilter.filter(element => item.siteTypes.includes(element)).length >= 1)
  }
  return result;
}

export default function coreReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LISTING_VIEW: {
      return {
        ...state,
        selectedListingView: action.payload
      }
    }
    case FILTER_LISTING: {
      const listingFiltered = filterListing(action.payload, [...state.listingRaw]);
      return {
        ...state,
        listingFiltered,
        listingItemsCount: listingFiltered.length,
        listingPagesLimit: Math.ceil(listingFiltered.length / itemsToShow),
        currentListingPage: 1
      }
    }
    case INCREMENT_LISTING_PAGE: {
      return {
        ...state,
        currentListingPage: state.currentListingPage + 1
      }
    }
    default:
      return state;
  }
}