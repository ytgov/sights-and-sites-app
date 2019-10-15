import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Col, Grid, Row} from 'react-native-easy-grid';
import PropTypes from 'prop-types';
import {setLocale} from '../../../../store/actions/locale';
import {setSelectLocaleAction} from '../../../../store/actions/core';
import {Body1, H1, H3, Helpers, Subtitle1} from '../../../../theme/theme';
import WelcomeScreenStyles from './welcome.styles';
import LanguageSwitchIcon from './welcome.styled-components';
import i18n from '../../../../locale/locale';

const logoCircle = require('../../../../../assets/common/logo-circle.png');
const logoWhite = require('../../../../../assets/common/logo-white.png');
const welcomeScreenBackgroundImage = require('../../../../../assets/stacks/welcome/welcome-background.jpg');

class WelcomeScreen extends React.Component {
    state = {}

    selectLanguage(language) {
        const {locale, setLocaleDispatch, setSelectLocaleActionDispatch, navigation} = this.props;
        setLocaleDispatch(language);
        setSelectLocaleActionDispatch(true);
        i18n.changeLanguage(locale);
        navigation.navigate('IntroStepOne');
    }

    render() {
        return (
            <ImageBackground style={Helpers.fullHeight} source={welcomeScreenBackgroundImage}>
                <Grid>
                    <Row>
                        <Col>
                            <View style={[Helpers.flexCenter, WelcomeScreenStyles.welcomeBox]}>
                                <Image style={WelcomeScreenStyles.circleLogo} source={logoCircle} resizeMode="cover"/>
                                <H1>Welcome</H1>
                                <H1>Bienvenue</H1>
                            </View>
                        </Col>
                    </Row>
                    <Row style={Helpers.justifyContentCenter}>
                        <Col>
                            <View style={Helpers.flexCenter}>
                                <Image style={WelcomeScreenStyles.logoWhite} source={logoWhite} resizeMode="contain"/>
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
                                        <H3 style={WelcomeScreenStyles.languageSwitchText}>en</H3>
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
                                        <H3 style={WelcomeScreenStyles.languageSwitchText}>fr</H3>
                                    </LanguageSwitchIcon>
                                    <Body1 bold>FRANÇAIS</Body1>
                                </View>
                            </TouchableOpacity>
                        </Col>
                    </Row>
                </Grid>
            </ImageBackground>

        );
    }
}

WelcomeScreen.propTypes = {
    locale: PropTypes.string,
    setLocaleDispatch: PropTypes.func.isRequired,
    setSelectLocaleActionDispatch: PropTypes.func.isRequired
}

WelcomeScreen.defaultProps = {
    locale: ''
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLocaleDispatch: value => dispatch(setLocale(value)),
        setSelectLocaleActionDispatch: value => dispatch(setSelectLocaleAction(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
