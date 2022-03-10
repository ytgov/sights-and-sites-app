import React from 'react';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import NetworkGate from './src/shared/components/netwrok-gate/netwrok-gate.component';
import configureStore from './src/store';
import AppRoot from './src';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NetworkGate>
          <RootSiblingParent>
            <AppRoot />
          </RootSiblingParent>
        </NetworkGate>
      </PersistGate>
    </Provider>
  );
};

export default App;
