import React from 'react';
import { ImageBackground, View, Text } from 'react-native';

const introStepOneBackground = require('../../../../../assets/stacks/intro/intro-step-one-bg.jpg');

class IntroStepOneScreen extends React.Component {
  state = {
  }

  render() {
    return (
      <ImageBackground source={introStepOneBackground} style={{ width: '100%', height: '100%' }}>
        <View>
          <Text>Into step one</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default IntroStepOneScreen;