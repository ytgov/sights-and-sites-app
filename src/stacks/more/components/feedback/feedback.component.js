import React from 'react';
import { View, Image, TouchableOpacity, Linking } from 'react-native';
import { ActionSheet } from 'native-base';
import { H3 } from '../../../../theme/theme';
import FeedbackStyles from './feedback.styles';

const feedbackIcon = require('../../../../../assets/stacks/more/feedback-icon.png');

const phone = '867-667-5386';
const email = 'heritage.planning@gov.yk.ca';

class Feedback extends React.Component {
  state = {

  }

  onFeedbackAction(title) {
    const buttons = [phone, email, 'Cancel'];
    const cancelIndex = 2;
    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex: cancelIndex,
        title
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            Linking.openURL(`tel:+${phone.replace(/-/g, '')}`);
            break;
          case 1:
            Linking.openURL(`mailto: ${email} `);
            break;
          default:
            break;
        }
      }
    )
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => { this.onFeedbackAction('General Enquiries') }} style={[FeedbackStyles.button, FeedbackStyles.buttonWithBorder]}>
          <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain' />
          <H3 style={FeedbackStyles.text}>General Enquiries</H3>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { this.onFeedbackAction('App Feedback') }} style={FeedbackStyles.button}>
          <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain' />
          <H3 style={FeedbackStyles.text}>App Feedback</H3>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Feedback;