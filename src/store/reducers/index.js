import { combineReducers } from 'redux';
import coreReducer from './core';
import localeReducer from './locale';
import highwaysReducer from './highways';
import regionsReducer from './regions';
import filtersReducer from './filters';

const rootReducer = combineReducers({
  coreStore: coreReducer,
  localeStore: localeReducer,
  filtersStore: filtersReducer,
  highwaysStore: highwaysReducer,
  regionsStore: regionsReducer
});

export default rootReducer;
