import React from 'react';
import { View, StatusBar } from 'react-native';
import RootNavigation from './stacks/stacks';

class AppRoot extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content"/>
        <RootNavigation />
      </View>
    );
  }
}

export default AppRoot;