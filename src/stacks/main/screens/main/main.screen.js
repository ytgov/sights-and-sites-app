import React from 'react';
import { View, Text } from 'react-native';

class MainScreen extends React.Component {
  state = {}

  render() {
    return (
      <View style={{ paddingTop: 100, paddingLeft: 20 }}>
        <Text>Main Stack</Text>
      </View>
    );
  }
}

export default MainScreen;