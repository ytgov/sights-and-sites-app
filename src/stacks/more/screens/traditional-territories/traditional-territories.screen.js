import React from 'react';
import { View, Image, Linking, SafeAreaView } from 'react-native';
import { Root, Container, Header, Content } from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import { Helpers, COMMON, H2, Body1 } from '../../../../theme/theme';
import TraditionalTerritoriesStyles from './traditional-territories.styles';
import Feedback from '../../components/feedback/feedback.component';

const traditionalTerritoriesIcon = require('../../../../../assets/stacks/more/traditional-territories-icon.png');

class CurrentConditionsScreen extends React.Component {
  openLink(url) {
    Linking.openURL(url)
  }

  state = {

  }

  render() {
    const { navigation } = this.props;
    return (
      <Root>
        <Container style={COMMON.content}>
          <Header style={COMMON.header}>
            <NavigationBackButton dark navigation={navigation} />
          </Header>
          <SafeAreaView />
          <SafeAreaView style={{ paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000' }}>
            <Content style={[COMMON.content]}>
              <View style={TraditionalTerritoriesStyles.contentPadded}>
                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <Image source={traditionalTerritoriesIcon} resizeMode='contain' style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <H2 black style={Helpers.textAlignCenter}>About Traditional Territories</H2>
                  <View style={TraditionalTerritoriesStyles.separator} />
                </View>

                <View>
                  <Body1 regular black>
                    This territory is home to 14 Yukon First Nations. Indigenous people have deep cultural and spiritual connections to the land. These connections are sacred and Indigenous people continue to live, travel and harvest throughout their Traditional Territories. Please journey respectfully through Yukon First Nations Traditional Territories. More information about Yukon First Nations is available at Yukon.ca and Mapping the Way.
                </Body1>
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

export default CurrentConditionsScreen;