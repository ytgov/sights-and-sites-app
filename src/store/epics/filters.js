import { filter, map } from 'rxjs/operators';
import { RESET_FILTERS, SET_HIGHWAY_FILTERS, SET_REGION_FILTERS, SET_SITES_TYPE_FILTER, SET_MY_SITES_FILTERS } from '../types';
import { filterListing } from '../actions/listing';

const listingFilter = (action$) => action$.pipe(
  filter(action => {
    // TODO update this ugly condition
    return action.type === SET_HIGHWAY_FILTERS || action.type === SET_REGION_FILTERS || action.type === RESET_FILTERS || action.type === SET_SITES_TYPE_FILTER || action.type === SET_MY_SITES_FILTERS
  }),
  map(() => filterListing())
);

export default listingFilter