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
      { title: 'Location Services', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' },
      { title: 'Mobile Data', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' },
      { title: 'Privacy Policy', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' },
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
                    Version 1.0
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