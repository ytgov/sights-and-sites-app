import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setLocale } from '../../../../store/actions/locale';
import { setSelectLocaleAction } from '../../../../store/actions/core';
import { Container, PageContent, Raw, Col, H1, H2, Subtitle1 } from '../../../../theme/theme';

const logoCircle = require('../../../../../assets/common/logo-circle.png');
const logoWhite = require('../../../../../assets/common/logo-white.png');
const welcomeScreenBackgroundImage = require('../../../../../assets/stacks/welcome/welcome-background.jpg');

class WelcomeScreen extends React.Component {
  state = {
  }

  selectLanguage(language) {
    this.props.setLocale(language);
    this.props.setSelectLocaleAction(true);
    this.props.navigation.navigate('IntroStepOne');
  }

  render() {
    return (
      <ImageBackground style={{ width: '100%', height: '100%' }} source={welcomeScreenBackgroundImage}>

        <Container>
          <PageContent>
            <View style={{ paddingTop: 200 }}>
              <Raw>
                <Col>
                  <Image style={{ width: 56, height: 56 }} source={logoCircle} resizeMode="cover" />
                </Col>
              </Raw>
              <Raw>
                <Col>
                  <H1>Welcome</H1>
                </Col>
              </Raw>
              <Raw>
                <Col>
                  <H1>Bienvenue</H1>
                </Col>
              </Raw>
              <Raw>
                <Col>
                  <Image style={{ width: 169, height: 61 }} source={logoWhite} resizeMode="contain" />
                </Col>
              </Raw>
              {/* <Image source={logoWhite} resizeMode="contain" /> */}
              <Subtitle1>Your guide to our roadside sites.
              Votre guide concernant nos sites routiers.</Subtitle1>
              <TouchableOpacity onPress={() => {
                this.selectLanguage('EN');
              }}>
                <H1>Set language to ENG </H1>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                this.selectLanguage('FR');
              }}>
                <H2>Set language to FR</H2>
              </TouchableOpacity>
            </View>
          </PageContent>
        </Container>
      </ImageBackground>

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