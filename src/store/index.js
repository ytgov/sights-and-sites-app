/* eslint-disable no-undef */
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createEpicMiddleware} from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';
import INITIAL_STATE from './state';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const epicMiddleware = createEpicMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = INITIAL_STATE) {
  let middleware = [thunk, epicMiddleware];
  if (__DEV__) {
    const logger = createLogger({collapsed: true});
    middleware = [...middleware, logger];
    middleware = [...middleware];
  } else {
    middleware = [...middleware];
  }
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleware),
  );
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);

  // UNCOMMENT TO CLEAR THE PERSISTED STORE
  // persistor.purge();

  return {store, persistor};
}
