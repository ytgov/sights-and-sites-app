import React from 'react';
import { View } from 'react-native';
import IntroDotsStyles from './intro-dots.styles';

const IntroDotsComponent = props => {
  return (
    <View style={IntroDotsStyles.dotsBox}>
      <View style={[IntroDotsStyles.dot, props.active === 1 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, props.active === 2 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, props.active === 3 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, props.active === 4 && IntroDotsStyles.dotActive]} />
    </View>
  )
}

export default IntroDotsComponent;