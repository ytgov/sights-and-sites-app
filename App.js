import React from 'react';
import {UIManager, Image, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/store';
import AppRoot from './src';
import LocationGate from './src/shared/components/location-gate/location-gate.component';
import NetworkGate from './src/shared/components/netwrok-gate/netwrok-gate.component';
import LoadResourcesAsync from './src/load-resources-async';
import * as Sentry from 'sentry-expo';
import AppUpdater from './src/shared/components/AppUpdater';
import * as SplashScreen from 'expo-splash-screen';

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

  async componentDidMount() {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    await LoadResourcesAsync();
    this.setState({ isLoadingComplete: true }, async () => {
      await SplashScreen.hideAsync();
    });
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
          <View style={{flex: 1}}>
            <Image source={require('./assets/splash.png')} />
          </View>
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
