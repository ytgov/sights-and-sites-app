import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { setLocale } from '../../../../store/actions/locale';
import { setSelectLocaleAction } from '../../../../store/actions/core';
import { Container, PageContent, Helpers, H1, H2, H3, Body1, Subtitle1 } from '../../../../theme/theme';
import WelcomeScreenStyles from './welcome.styles';
import { LanguageSwitchIcon } from './welcome.styled-components';
import i18n from '../../../../locale/locale';

const logoCircle = require('../../../../../assets/common/logo-circle.png');
const logoWhite = require('../../../../../assets/common/logo-white.png');
const welcomeScreenBackgroundImage = require('../../../../../assets/stacks/welcome/welcome-background.jpg');

class WelcomeScreen extends React.Component {
  state = {
  }

  selectLanguage(language) {
    this.props.setLocale(language);
    this.props.setSelectLocaleAction(true);
    i18n.changeLanguage(this.props.locale);
    this.props.navigation.navigate('IntroStepOne');
  }

  render() {
    return (
      <ImageBackground style={Helpers.fullHeight} source={welcomeScreenBackgroundImage}>
        <Grid>
          <Row>
            <Col>
              <View style={[Helpers.flexCenter, WelcomeScreenStyles.welcomeBox]}>
                <Image style={WelcomeScreenStyles.circleLogo} source={logoCircle} resizeMode="cover" />
                <H1>Welcome</H1>
                <H1>Bienvenue</H1>
              </View>
            </Col>
          </Row>
          <Row style={Helpers.justifyContentCenter}>
            <Col>
              <View style={Helpers.flexCenter}>
                <Image style={WelcomeScreenStyles.logoWhite} source={logoWhite} resizeMode="contain" />
                <Subtitle1 style={WelcomeScreenStyles.subtitle}>Your guide to our roadside sites.
                  Votre guide concernant nos sites routiers.</Subtitle1>
              </View>
            </Col>
          </Row>
          <Row style={[Helpers.alignItemsEnd, Helpers.justifyContentCenter, WelcomeScreenStyles.footer]}>
            <Col style={Helpers.flexCenter}>
              <TouchableOpacity onPress={() => {
                this.selectLanguage('en');
              }}>
                <View style={Helpers.flexCenter}>
                  <LanguageSwitchIcon>
                    <H3>en</H3>
                  </LanguageSwitchIcon>
                  <Body1 bold>ENGLISH</Body1>
                </View>
              </TouchableOpacity>
            </Col>
            <Col style={Helpers.flexCenter}>
              <TouchableOpacity onPress={() => {
                this.selectLanguage('fr');
              }}>
                <View style={Helpers.flexCenter}>
                  <LanguageSwitchIcon>
                    <H3>fr</H3>
                  </LanguageSwitchIcon>
                  <Body1 bold>FRANÇAIS</Body1>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      </ImageBackground >

    );
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLocale: value => dispatch(setLocale(value)),
    setSelectLocaleAction: value => dispatch(setSelectLocaleAction(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);