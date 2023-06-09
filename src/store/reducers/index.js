import {combineReducers} from 'redux';
import coreReducer from './core';
import localeReducer from './locale';
import highwaysReducer from './highways';
import regionsReducer from './regions';
import siteTypesReducer from './siteTypes';
import filtersReducer from './filters';
import listingReducer from './listing';
import searchReducer from './search';

const rootReducer = combineReducers({
    searchStore: searchReducer,
    coreStore: coreReducer,
    localeStore: localeReducer,
    filtersStore: filtersReducer,
    highwaysStore: highwaysReducer,
    regionsStore: regionsReducer,
    siteTypesStore: siteTypesReducer,
    listingStore: listingReducer
});

export default rootReducer;
