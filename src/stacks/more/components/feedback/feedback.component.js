import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { H3 } from '../../../../theme/theme';
import FeedbackStyles from './feedback.styles';

const feedbackIcon = require('../../../../../assets/stacks/more/feedback-icon.png');

const Feedback = props => {
  return (
    <View>
      <TouchableOpacity onPress={() => { alert('General Enquiries') }} style={[FeedbackStyles.button, FeedbackStyles.buttonWithBorder]}>
        <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain' />
        <H3 style={FeedbackStyles.text}>General Enquiries</H3>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { alert('App Feedback') }} style={FeedbackStyles.button}>
        <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain' />
        <H3 style={FeedbackStyles.text}>App Feedback</H3>
      </TouchableOpacity>
    </View>
  )
}

export default Feedback;