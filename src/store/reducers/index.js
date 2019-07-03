import { combineReducers } from 'redux';
import coreReducer from './core';
import localeReducer from './locale';

const rootReducer = combineReducers({
  coreStore: coreReducer,
  localeStore: localeReducer
});

export default rootReducer;
