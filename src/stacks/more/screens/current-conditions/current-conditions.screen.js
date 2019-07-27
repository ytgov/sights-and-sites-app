import React from 'react';
import { View, Image, TouchableOpacity, Linking, Fragment, SafeAreaView } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import { Helpers, COMMON, Caption, H2, H3, Body1, Subtitle1 } from '../../../../theme/theme';
import CurrentConditionStyles from './current-conditions.styles';
import Feedback from '../../components/feedback/feedback.component';

const currentConditionsIcon = require('../../../../../assets/stacks/more/current-conditions-icon.png');

class CurrentConditionsScreen extends React.Component {
  state = {

  }

  openLink(url) {
    Linking.openURL(url)
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={COMMON.content}>
        <Header style={COMMON.header}>
          <NavigationBackButton dark navigation={navigation} />
        </Header>
        <SafeAreaView />
        <SafeAreaView style={{ paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000' }}>
          <Content style={[COMMON.content]}>
            <View style={CurrentConditionStyles.contentPadded}>
              <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                <Image source={currentConditionsIcon} resizeMode='contain' style={{ width: 40, height: 40, marginBottom: 12 }} />
                <H2 black style={Helpers.textAlignCenter}>Current Conditions</H2>
                <View style={CurrentConditionStyles.separator} />
              </View>
              <View>
                <View style={CurrentConditionStyles.sectionTitleBox}>
                  <H3 black>Campground closures and warnings</H3>
                </View>
                <View style={CurrentConditionStyles.linkBox}>
                  <TouchableOpacity onPress={() => { this.openLink('https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/find-campground-or-recreation-site') }}>
                    <View style={CurrentConditionStyles.link}><Body1 black >yukon.ca</Body1></View>
                  </TouchableOpacity>
                </View>
                <Body1 regular black>
                  Information on Government of Yukon’s campgrounds, including campground maps, closures and public warnings, visit.
            </Body1>
                <View style={CurrentConditionStyles.separator} />
              </View>

              <View>
                <View style={CurrentConditionStyles.sectionTitleBox}>
                  <H3 black>Highway conditions</H3>
                </View>
                <View style={CurrentConditionStyles.linkBox}>
                  <TouchableOpacity onPress={() => { this.openLink('http://511yukon.ca/en/index.html') }}>
                    <View style={CurrentConditionStyles.link}><Body1 black>511yukon.ca</Body1></View>
                  </TouchableOpacity>
                </View>
                <Body1 regular black>
                  Yukon’s highway reports on current road conditions, warnings and closures.
            </Body1>
                <View style={CurrentConditionStyles.separator} />
              </View>

              <View>
                <View style={CurrentConditionStyles.sectionTitleBox}>
                  <H3 black>Fire Reports</H3>
                </View>
                <View style={CurrentConditionStyles.linkBox}>
                  <TouchableOpacity onPress={() => { this.openLink('https://yukon.ca/en/emergencies-and-safety/emergency-updates/fire-investigation-reports-and-safety-notices') }}>
                    <View style={CurrentConditionStyles.link}><Body1 black>yukon.ca</Body1></View>
                  </TouchableOpacity>
                </View>
                <Body1 regular black>
                  Current information on Yukon’s fire investigation reports and public safety notices.
            </Body1>
              </View>
            </View>
          </Content>
          <Feedback />
        </SafeAreaView>
      </Container>
    )
  }
}

export default CurrentConditionsScreen;