import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Col, Grid, Row} from 'react-native-easy-grid';
import {Ionicons} from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import GestureRecognizer from 'react-native-swipe-gestures';
import i18n from '../../../../locale/locale';
import routes from '../../../../navigation/routes';
import {Body1, H1, H3, Helpers, Subtitle1} from '../../../../theme/theme';
import IntroStepFourStyles from './intro-step-four.styles';
import IntroDotsComponent from '../../components/intro-dots/intro-dots.component';
import {error} from '../../../../shared/services/notify';
import SwipeConfig from '../swipe-config';
import {setOnboardingFinished} from '../../../../store/actions/core';

// TODO Refactor and move to separate service
const en = {
    title: 'Permissions',
    subtitle: 'Your device may ask you to grant permissions for the app:',
    permissionsRequired: 'Location Services',
    permissionsRequireInfo: `Enable this to show sites near you,
    and how to navigate to these sites.
    You can change your preference
    on your device.`,
    ready: 'Ready',
    actionStart: 'LET’S GET STARTED'
};
const fr = {
    title: 'Les permissions',
    subtitle: 'Votre appareil peut vous demander d’accorder des autorisations pour l’application:',
    permissionsRequired: 'Services de location',
    permissionsRequireInfo: `Activez cette option pour afficher les sites proches de vous,
    et comment naviguer sur ces sites.
    Vous pouvez changer votre préférence
    sur votre appareil.`,
    ready: 'Vous êtes prêt?',
    actionStart: 'COMMENÇONS'
};

const introStepFourBackground = require('../../../../../assets/common/common-background.jpg');
const checkCircleIcon = require('../../../../../assets/stacks/intro/check-circle.png');

class IntroStepFourScreen extends React.Component {
    state = {}

    UNSAFE_componentWillMount() {
        // Load additional namespaces after initialization
        i18n.addResourceBundle('en', 'translation', en);
        i18n.addResourceBundle('fr', 'translation', fr);
    }

    onSwipeBackward() {
        const {navigation} = this.props;
        navigation.navigate(routes.SCREEN_APP_INSTRUCTIONS_3);
    }

    onSubmit() {
        this.getLocationPermissions();
    }

    async getLocationPermissions() {
        const {navigation, setOnboardingFinishedDispatch} = this.props;
        const {status} = await Permissions.askAsync(
            Permissions.LOCATION
        );

//      20200911 drogers: Apple will not accept the app unless it can be run without location
//      permissions enabled.
//        if (status !== 'granted') {
//            error(i18n.t('notifications.permissionsRequest'));
//        } else {
        setOnboardingFinishedDispatch();
        navigation.navigate(routes.STACK_DRAWER);
//        }
    }

    render() {
        return (
            <GestureRecognizer
                onSwipeRight={() => this.onSwipeBackward()}
                config={SwipeConfig}
            >
                <ImageBackground source={introStepFourBackground} style={{width: '100%', height: '100%'}}>
                    <Grid style={{flex: 1}}>
                        <Row size={70}>
                            <Col>
                                <View style={[Helpers.flexCenter, IntroStepFourStyles.header]}>
                                    <Image source={checkCircleIcon} style={{width: 40, height: 40, marginBottom: 10}}
                                           resizeMode='contain'/>
                                    <H1>{i18n.t('title')}</H1>
                                    <Subtitle1 style={IntroStepFourStyles.subtitle}>
                                        {i18n.t('subtitle')}
                                    </Subtitle1>
                                    <H3>
                                        {i18n.t('permissionsRequired')}
                                    </H3>
                                    <Subtitle1 style={IntroStepFourStyles.subtitle}>
                                        {i18n.t('permissionsRequireInfo')}
                                    </Subtitle1>
                                </View>
                            </Col>
                        </Row>
                        <Row size={30}
                             style={[Helpers.justifyContentCenter, Helpers.alignItemsEnd, IntroStepFourStyles.footer]}>
                            <Col>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <H3 style={Helpers.textAlignCenter}>
                                        {i18n.t('ready')}?
                                    </H3>
                                    <TouchableOpacity onPress={() => {
                                        this.onSubmit()
                                    }} style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                        <Ionicons name="ios-arrow-forward" size={32} color="#FFF"
                                                  style={[IntroStepFourStyles.checkIcon, Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]}/>
                                        <IntroDotsComponent active={4}/>
                                        <Body1 bold style={Helpers.textAlignCenter}>{i18n.t('actionStart')}</Body1>
                                    </TouchableOpacity>
                                </View>
                                <View/>
                            </Col>
                        </Row>
                    </Grid>
                </ImageBackground>
            </GestureRecognizer>
        );
    }
}

IntroStepFourScreen.propTypes = {
    setOnboardingFinishedDispatch: PropTypes.func.isRequired
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        setOnboardingFinishedDispatch: value => dispatch(setOnboardingFinished(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroStepFourScreen);
