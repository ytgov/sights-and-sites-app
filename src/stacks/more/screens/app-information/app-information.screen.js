import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { Root, Container, Header, Content } from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import { Helpers, COMMON, H2, Body1 } from '../../../../theme/theme';
import AppInformationStyles from './app-information.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';

const appInformationIcon = require('../../../../../assets/stacks/more/app-information-icon.png');
const logo = require('../../../../../assets/common/logo.png');



class AppInformationScreen extends React.Component {
  state = {

  }

  render() {
    const { navigation } = this.props;
    const data = [
      { 
        title: 'Location Services', 
        content: '',
        QA:[
          {
            q:"Why does the app want to access my location?",
            a:`The app uses the location provided by your device to show you helpful results, like nearby sites.
This app does not store the location, it is only used within your device. You can enable location settings within the app or on your device.`
          },
          {
            q:"I don’t want to enable location services",
            a:"No problem! You can still search and filter sites, however you will not be able to navigate to these sites or see nearby sites within the app."
          }
        ]
      
      },
      { 
        title: 'Mobile Data', 
        content: ' If your device is connected to the internet, it will use mobile data to update the app if required.',
        QA:[
          {
            q:"Can I use the app offline?",
            a:`The app functions entirely offline. The maps are downloaded to your device when you give the app permission to do so.`
          },
          {
            q:"When is the information in the app updated? ",
            a:
            `The app is updated periodically with new data when it becomes available. This includes:

\u2022 New sites
\u2022 Existing site services
\u2022 Directions
\u2022 Map details
            `
          }
        ]
      },
      { 
        title: 'Privacy Policy', 
        content:`The Government of Yukon is committed to protecting your privacy. The collection, use, disclosure, retention, and disposal of information collected via Government of Yukon online properties, such as our websites is done in compliance with the Access to Information and Protection of Privacy Act and the Archives Act.

The purpose of this privacy statement is to inform you of the personal information that may be collected from you when you interact with the Government of Yukon online.`
      },
      { title: 'Terms & Conditions', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' }
    ];

    return (
      <Root>
        <Container style={COMMON.content}>
          <Header style={COMMON.header}>
            <NavigationBackButton dark navigation={navigation} />
          </Header>
          <SafeAreaView />
          <SafeAreaView style={{ paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000' }}>
            <Content style={[COMMON.content]}>
              <View style={AppInformationStyles.contentPadded}>
                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <Image source={appInformationIcon} resizeMode='contain' style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <H2 black style={Helpers.textAlignCenter}>App Information</H2>
                  <View style={AppInformationStyles.separator} />
                </View>

                <View>
                  <Body1 regular black>
                    The Yukon Road Trip app is your guide to Government of Yukon’s road accessible campgrounds, wildlife viewing, cultural and historical points of interest. Connect with the natural and cultural history that surrounds you.
                    
                </Body1>
                </View>

                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, { paddingTop: 10, paddingBottom: 20 }]}>
                  <Image source={logo} resizeMode='contain' style={{ width: 104, height: 41 }} />
                </View>

                <View>
                  <AccordionCustom data={data} />
                </View>
              </View>
            </Content>
            <Feedback />
          </SafeAreaView>
        </Container>
      </Root>
    )
  }
}

export default AppInformationScreen;