import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import IntroDotsStyles from './intro-dots.styles';

const IntroDotsComponent = props => {
  const { active } = props;
  return (
    <View style={IntroDotsStyles.dotsBox}>
      <View style={[IntroDotsStyles.dot, active === 1 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, active === 2 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, active === 3 && IntroDotsStyles.dotActive]} />
      <View style={[IntroDotsStyles.dot, active === 4 && IntroDotsStyles.dotActive]} />
    </View>
  )
}

IntroDotsComponent.propTypes = {
  active: PropTypes.number.isRequired
};

export default IntroDotsComponent;