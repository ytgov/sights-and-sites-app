import React from 'react';
import {SafeAreaView, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

import {YUKON_COLORS} from '~theme/config';
import {H1, Body} from '~theme/typings';
import styles from './styles';

import LanguageButton from './languageButton';
import {setLocale} from '~store/actions/locale';
import {connect} from 'react-redux';
import routes from '~navigation/routes';
import {setSelectLocaleAction} from '~store/actions/core';

const bgWelcome = require('./images/bg-welcome.png');
const logo = require('./images/logo.png');
const logoApp = require('./images/logo-app.png');

const WelcomeScreen = (props) => {
    const {
        navigation,
        dispatchSetLocale,
        dispatchSetSelectLocaleAction
    } = props

    const {i18n} = useTranslation();

    const setLanguage = (langCode) => {
        dispatchSetLocale(langCode);
        dispatchSetSelectLocaleAction(true);
        i18n.changeLanguage(langCode);
        navigation.navigate(routes.SCREEN_INTRODUCTION)
    }

    return (
        <ImageBackground source={bgWelcome}
                         style={{ flex: 1, backgroundColor: YUKON_COLORS.primary}}>
            <SafeAreaView style={{ flex: 1}}>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Image style={{marginBottom: 12}} source={logo} />
                        <H1 style={{marginBottom: 24}}>{'Sights and Sites'}</H1>

                        <Body fontMedium>{'Your guide to our roadside sites'}</Body>
                        <Body fontMedium>{'Votre guide concernant nos sites routier'}</Body>

                        <Image source={logoApp} style={{ marginTop: 24}} />
                    </View>

                    <View style={styles.footer}>
                        <Body fontMedium>{'Select a language'}</Body>
                        <Body fontMedium>{'Sélectionnez une langue'}</Body>

                        <View style={styles.buttons}>
                            <TouchableOpacity activeOpacity={0.7}
                                              onPress={() => setLanguage('en')}>
                                <LanguageButton code={'En'} label={'English'}/>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}
                                              onPress={() => setLanguage('fr')}>
                                <LanguageButton code={'Fr'} label={'Français'}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetLocale: value => dispatch(setLocale(value)),
        dispatchSetSelectLocaleAction: value => dispatch(setSelectLocaleAction(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);


