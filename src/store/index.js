/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import INITIAL_STATE from './state';

export default function configureStore(initialState = INITIAL_STATE) {
  let middleware = [thunk];
  if (__DEV__) {
    const logger = createLogger({ collapsed: true });
    middleware = [...middleware, logger];
  } else {
    middleware = [...middleware];
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
};