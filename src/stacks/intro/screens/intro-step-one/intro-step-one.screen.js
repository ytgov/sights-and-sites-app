import React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, View, Text, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import i18n from '../../../../locale/locale';
import { Helpers, H1, H2, H3, Body1, Subtitle1 } from '../../../../theme/theme';
import IntroStepOneStyles from './intro-step-one.styles';
import IntroDotsComponent from '../../components/intro-dots/intro-dots.component';
import SwipeConfig from '../swipe-config';

// TODO Refactor and move to separate service
const en = {
  title: 'Where to?',
  subtitle: 'Explore by highway, by region or near you',
};
const fr = {
  title: 'Vers quoi?',
  subtitle: 'Explorez par autoroute, par région ou près de chez vous',
};

const introStepOneBackground = require('../../../../../assets/stacks/intro/intro-step-one-background.jpg');
const dotIcon = require('../../../../../assets/stacks/intro/dot.png');

class IntroStepOneScreen extends React.Component {
  state = {
  }

  componentWillMount() {
    // Load additional namespaces after initialization
    i18n.addResourceBundle('en', 'translation', en);
    i18n.addResourceBundle('fr', 'translation', fr);
    i18n.changeLanguage(this.props.locale);
  }

  onSwipeForward() {
    this.props.navigation.navigate('IntroStepTwo');
  }

  render() {
    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeForward()}
        config={SwipeConfig}>
        <ImageBackground source={introStepOneBackground} style={{ width: '100%', height: '100%' }}>
          <Grid style={{ flex: 1 }}>
            <Row size={70}>
              <Col>
                <View style={[Helpers.flexCenter, IntroStepOneStyles.header]}>
                  <Image source={dotIcon} style={{ width: 40, height: 40, marginBottom: 10 }} resizeMode='contain' />
                  <H1>{i18n.t('title')}</H1>
                  <Subtitle1 style={IntroStepOneStyles.subtitle}>
                    {i18n.t('subtitle')}
                  </Subtitle1>
                </View>
              </Col>
            </Row>
            <Row size={30} style={[Helpers.justifyContentCenter, Helpers.alignItemsEnd, IntroStepOneStyles.footer]}>
              <Col>
                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('IntroStepTwo') }}>
                    <Ionicons name="ios-arrow-forward" size={32} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
                    <IntroDotsComponent active={1} />
                    <Body1 bold style={Helpers.textAlignCenter}>
                      {i18n.t('actionNext')}
                    </Body1>
                  </TouchableOpacity>
                </View>
                <View />
              </Col>
            </Row>
          </Grid>
        </ImageBackground >
      </GestureRecognizer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale
  };
};

export default connect(mapStateToProps, () => { return {} })(IntroStepOneScreen);