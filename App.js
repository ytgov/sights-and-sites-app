import React from 'react';
import { AppLoading } from 'expo';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import AppRoot from './src';
import LoadResourcesAsync from './src/load-resources-async';

const store = configureStore();

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
      <Provider store={store} >
        <AppRoot />
      </Provider>
    );
  }
}
