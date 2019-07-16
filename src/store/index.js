/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import INITIAL_STATE from './state';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(initialState = INITIAL_STATE) {
  let middleware = [thunk];
  if (__DEV__) {
    const logger = createLogger({ collapsed: true });
    middleware = [...middleware, logger];
  } else {
    middleware = [...middleware];
  }
  const store = createStore(persistedReducer, initialState,
    applyMiddleware(...middleware))
  const persistor = persistStore(store)
  return { store, persistor };
  // return createStore(
  //   rootReducer,
  //   initialState,
  //   applyMiddleware(...middleware)
  // );
};