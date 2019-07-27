import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-expo-image-cache';
import { Container, Header, Row, Col, Content, Footer, FooterTab } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import SiteDetailsStyles from './site-details.styles';
import { COMMON, Body1, Helpers, Caption, H2, Subtitle1 } from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import SiteFooterTabs from '../../components/site-footer-tabs/site-footer-tabs.component';
import MySitesButton from '../../components/my-sites-button/my-sites-button.component';
import SiteAmenties from '../../components/site-amenties/site-amenties.component';
import SiteCardInfo from '../../components/site-card-info/site-card-info.component';
import SiteWarning from '../../components/site-warning/site-warning.component';

class SiteDetails extends React.Component {
  state = {
    siteAmenties: [
      {
        id: 1,
        image: require('../../../../../assets/stacks/listing/amenties/1.png')
      },
      {
        id: 2,
        image: require('../../../../../assets/stacks/listing/amenties/2.png')
      },
      {
        id: 3,
        image: require('../../../../../assets/stacks/listing/amenties/3.png')
      },
      {
        id: 4,
        image: require('../../../../../assets/stacks/listing/amenties/4.png')
      },
      {
        id: 5,
        image: require('../../../../../assets/stacks/listing/amenties/5.png')
      },
      {
        id: 6,
        image: require('../../../../../assets/stacks/listing/amenties/6.png')
      },
      {
        id: 7,
        image: require('../../../../../assets/stacks/listing/amenties/1.png')
      },
      {
        id: 8,
        image: require('../../../../../assets/stacks/listing/amenties/2.png')
      },
      {
        id: 9,
        image: require('../../../../../assets/stacks/listing/amenties/3.png')
      },
    ]
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    console.log('ITEM');
    console.log(item);
    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' };
    const { uri } = item;

    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content">
          <NavigationBackButton navigation={navigation} />
        </Header>
        <Content>
          <View style={COMMON.content}>
            <View style={[SiteDetailsStyles.siteImgBox]}>
              <Image {...{ preview, uri }} resizeMode='cover' style={SiteDetailsStyles.siteImg} />
              <MySitesButton />
            </View>
          </View>
          <View style={[COMMON.content, SiteDetailsStyles.siteContentBox]}>
            <SiteCardInfo item={item} />
            <SiteAmenties items={this.state.siteAmenties} />
            <SiteWarning />
            <Body1 black regular>
              With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.
            </Body1>
          </View>
          <NearbySites navigation={navigation} />
        </Content>
        <SiteFooterTabs {...this.props} />
      </Container>
    )
  }
}

export default SiteDetails;