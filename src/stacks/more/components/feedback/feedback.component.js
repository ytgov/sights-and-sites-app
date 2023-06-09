import React from 'react';
import {Image, Linking, TouchableOpacity, View} from 'react-native';
import {ActionSheet} from 'native-base';
import {H3} from '../../../../theme/theme';
import FeedbackStyles from './feedback.styles';
import i18n from '../../../../locale/locale';

const feedbackIcon = require('../../../../../assets/stacks/more/feedback-icon.png');

const phone = '1-867-667-5386';
const email = 'heritage.planning@gov.yk.ca';

class Feedback extends React.Component {
    state = {}

    static onFeedbackAction(title) {
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
                        Linking.openURL(`tel:+${phone}`);
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
                <TouchableOpacity onPress={() => {
                    Feedback.onFeedbackAction(i18n.language === 'en' ? 'General Enquiries' : 'Renseignements')
                }} style={[FeedbackStyles.button, FeedbackStyles.buttonWithBorder]}>
                    <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain'/>
                    <H3 style={FeedbackStyles.text}>{i18n.language === 'en' ? 'General Enquiries' : 'Renseignements'}</H3>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Feedback.onFeedbackAction(i18n.language === 'en' ? 'App Feedback' : 'Commentaires sur l’application')
                }} style={FeedbackStyles.button}>
                    <Image source={feedbackIcon} style={FeedbackStyles.icon} resizeMode='contain'/>
                    <H3 style={FeedbackStyles.text}>{i18n.language === 'en' ? 'App Feedback' : 'Commentaires sur l’application'}</H3>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Feedback;
