import React from 'react';
import { AppLoading } from 'expo';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/store';
import AppRoot from './src';
import LocationGate from './src/shared/components/location-gate/location-gate.component';
import NetworkGate from './src/shared/components/netwrok-gate/netwrok-gate.component';
import LoadResourcesAsync from './src/load-resources-async';
import * as Sentry from 'sentry-expo';
import AppUpdater from './src/shared/components/AppUpdater';

Sentry.init({
  dsn: 'https://98306b38a625451ab47ea15a41a77c1b@sentry.io/1795244',
  enableInExpoDevelopment: false,
  debug: true
});

const { store, persistor } = configureStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  componentDidMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={LoadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NetworkGate>
            <LocationGate>
              <AppUpdater/>
              <AppRoot />
            </LocationGate>
          </NetworkGate>
        </PersistGate>
      </Provider>
    );
  }
}
