import React from 'react';
import {Provider} from 'react-redux';
import NetworkGate from './src/shared/components/netwrok-gate/netwrok-gate.component';

import configureStore from './src/store';
import AppRoot from './src';
// import {PersistGate} from 'redux-persist/integration/react';

const {store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      {/*<PersistGate loading={null} persistor={persistor}>*/}
      <NetworkGate>
        <AppRoot />
      </NetworkGate>
      {/*</PersistGate>*/}
    </Provider>
  );
};

export default App;
