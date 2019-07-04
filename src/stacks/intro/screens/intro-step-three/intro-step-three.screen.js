import React from 'react';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import i18n from '../../../../locale/locale';
import { Helpers, H1, H2, H3, Body1, Subtitle1 } from '../../../../theme/theme';
import IntroStepThreeStyles from './intro-step-three.styles';
import IntroDotsComponent from '../../components/intro-dots/intro-dots.component';

// TODO Refactor and move to separate service
const en = {
  title: 'My sites',
  subtitle: 'Save your favourite sites or create a wish list for future trips',
};
const fr = {
  title: 'Mes sites',
  subtitle: 'Enregistrez vos sites favoris ou créez une liste de souhaits pour de futurs voyages',
};

const introStepThreeBackground = require('../../../../../assets/stacks/intro/intro-step-three-background.jpg');
const heartIcon = require('../../../../../assets/stacks/intro/heart.png');

class IntroStepThreeScreen extends React.Component {
  state = {
  }

  componentWillMount() {
    // Load additional namespaces after initialization
    i18n.addResourceBundle('en', 'translation', en);
    i18n.addResourceBundle('fr', 'translation', fr);
  }

  render() {
    return (
      <ImageBackground source={introStepThreeBackground} style={{ width: '100%', height: '100%' }}>
        <Grid style={{ flex: 1 }}>
          <Row size={70}>
            <Col>
              <View style={[Helpers.flexCenter, IntroStepThreeStyles.header]}>
                <Image source={heartIcon} style={{ width: 40, height: 40, marginBottom: 10 }} resizeMode='contain' />
                <H1>{i18n.t('title')}</H1>
                <Subtitle1 style={IntroStepThreeStyles.subtitle}>
                  {i18n.t('subtitle')}
                </Subtitle1>
              </View>
            </Col>
          </Row>
          <Row size={30} style={[Helpers.justifyContentCenter, Helpers.alignItemsEnd, IntroStepThreeStyles.footer]}>
            <Col>
              <View >
                <TouchableOpacity style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]} onPress={() => { this.props.navigation.navigate('IntroStepFour') }}>
                  <Ionicons name="ios-arrow-forward" size={32} color="#FFF" />
                  <IntroDotsComponent active={3} />
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

export default IntroStepThreeScreen;