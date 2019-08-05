import React from 'react';
import { View, Image, Linking, SafeAreaView } from 'react-native';
import { Root, Container, Header, Content } from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import { Helpers, COMMON, H2, Body1 } from '../../../../theme/theme';
import TravelTripsStyles from './travel-trips.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';

const travelTripsIcon = require('../../../../../assets/stacks/more/travel-trips-icon.png');

class CurrentConditionsScreen extends React.Component {
  openLink(url) {
    Linking.openURL(url)
  }

  state = {

  }

  render() {
    const { navigation } = this.props;
    const data = [
      { title: 'Protecting historic resources', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' },
      { title: 'More wilderness safety tips', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus vehicula tincidunt. Cras bibendum nisi vitae porttitor iaculis. Etiam luctus eros vitae lectus hendrerit dictum. Fusce posuere non turpis non pretium. Nullam tortor tellus, condimentum eu ipsum nec, dapibus tempor elit. Sed nec porttitor urna.' }
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
              <View style={TravelTripsStyles.contentPadded}>
                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <Image source={travelTripsIcon} resizeMode='contain' style={{ width: 40, height: 40, marginBottom: 12 }} />
                  <H2 black style={Helpers.textAlignCenter}>Wilderness Travel Tips</H2>
                  <View style={TravelTripsStyles.separator} />
                </View>

                <View>
                  <Body1 regular black>
                    This territory is home to 14 Yukon First Nations. Indigenous people have deep cultural and spiritual connections to the land. These connections are sacred and Indigenous people continue to live, travel and harvest throughout their Traditional Territories. Please journey respectfully through Yukon First Nations Traditional Territories. More information about Yukon First Nations is available at Yukon.ca and Mapping the Way.
                </Body1>
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

export default CurrentConditionsScreen;