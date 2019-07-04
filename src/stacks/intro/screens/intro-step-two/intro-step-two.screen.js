import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../../../locale/locale';
import { Helpers, H1, H2, H3, Body1, Subtitle1 } from '../../../../theme/theme';
import IntroStepOneStyles from './intro-step-two.styles';
import IntroDotsComponent from '../../components/intro-dots/intro-dots.component';

// TODO Refactor and move to separate service
const en = {
  title: 'Choose a site',
  subtitle: 'Explore over 230 Yukon sites, even when you’re offline',
};
const fr = {
  title: 'Choisissez un site',
  subtitle: 'Explorez plus de 230 sites du Yukon, même lorsque vous êtes hors ligne',
};

const introStepTwoBackground = require('../../../../../assets/stacks/intro/intro-step-two-background.jpg');
const filterIcon = require('../../../../../assets/stacks/intro/filter.png');

class IntroStepTwoScreen extends React.Component {
  state = {
  }

  componentWillMount() {
    // Load additional namespaces after initialization
    i18n.addResourceBundle('en', 'translation', en);
    i18n.addResourceBundle('fr', 'translation', fr);
  }

  render() {
    return (
      <ImageBackground source={introStepTwoBackground} style={{ width: '100%', height: '100%' }}>
        <Grid style={{ flex: 1 }}>
          <Row size={70}>
            <Col>
              <View style={[Helpers.flexCenter, IntroStepOneStyles.header]}>
                <Image source={filterIcon} style={{ width: 40, height: 40, marginBottom: 10 }} resizeMode='contain' />
                <H1>{i18n.t('title')}</H1>
                <Subtitle1 style={IntroStepOneStyles.subtitle}>
                  {i18n.t('subtitle')}
                </Subtitle1>
              </View>
            </Col>
          </Row>
          <Row size={30} style={[Helpers.justifyContentCenter, Helpers.alignItemsEnd, IntroStepOneStyles.footer]}>
            <Col>
              <View >
                <TouchableOpacity style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]} onPress={() => { this.props.navigation.navigate('IntroStepThree') }}>
                  <Ionicons name="ios-arrow-forward" size={32} color="#FFF" />
                  <IntroDotsComponent active={2} />
                  <Body1 bold>{i18n.t('actionNext')}</Body1>
                </TouchableOpacity>
              </View>
              <View />
            </Col>
          </Row>
        </Grid>
      </ImageBackground >
    );
  }
}

export default IntroStepTwoScreen;