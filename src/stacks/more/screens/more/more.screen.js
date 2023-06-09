import React from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import i18n from '../../../../locale/locale';
import {Body1, COMMON, H2, H3, Helpers, Subtitle1} from '../../../../theme/theme';
import MoreStyles from './more.styles';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import LanguageSwitchIcon from './more.styled-components'
import {connect} from 'react-redux';
import {setLocale} from '../../../../store/actions/locale';
import {setSelectLocaleAction} from '../../../../store/actions/core';
import axios from 'axios';
import {APP_CONFIG} from '../../../../config';
import {addListing, filterListing} from '../../../../store/actions/listing';

const moreBakcground = require('../../../../../assets/common/common-background.jpg');
const currentConditionsIcon = require('../../../../../assets/stacks/more/current-conditions-icon.png');
const traditionalTerritoriesIcon = require('../../../../../assets/stacks/more/traditional-territories-icon.png');
const travelTripsIcon = require('../../../../../assets/stacks/more/travel-trips-icon.png');
const appInformationIcon = require('../../../../../assets/stacks/more/app-information-icon.png');

class MoreScreen extends React.Component {
    state = {}

    async selectLanguage(language) {
        const {locale, setLocaleDispatch, setSelectLocaleActionDispatch, navigation} = this.props;
        setLocaleDispatch(language);
        setSelectLocaleActionDispatch(true);
        await i18n.changeLanguage(language);
        this.reloadSites(language)
        navigation.navigate('Loading');
    }

    reloadSites(language) {
        console.info("Reload Sites")
        const {
            addListingDispatch,
            filterListingDispatch,
            hasUserPassedOnboarding,
        } = this.props;
        axios.get(APP_CONFIG.placesUrl, {
            headers: {
                'accept-language': language,
                'api-key': APP_CONFIG.apiKey
            }
        })
            .then(async res => {
                console.info("Success!!", res)
                await addListingDispatch(res.data.data);
                filterListingDispatch();
            })
            .catch(err => {
                console.info("error ==>", err)
            })
    }

    render() {
        const {navigation} = this.props;
        return (
            <Root>
                <Container>
                    <ImageBackground source={moreBakcground} style={{width: '100%', height: '100%'}}>
                        <Header style={COMMON.header} iosBarStyle="light-content">
                            <NavigationBackButton navigation={navigation}/>
                        </Header>

                        <Content>
                            <View style={[Helpers.flexCenter]}>
                                <H2>{i18n.t('more.title')}</H2>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('CurrentConditions')
                                }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <View style={{position: 'relative'}}>
                                        <Image source={currentConditionsIcon} resizeMode='contain'
                                               style={{width: 40, height: 40}}/>
                                    </View>
                                    <Subtitle1
                                        style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('currentConditions.title')}</Subtitle1>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('TraditionalTerritories')
                                }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <View style={{position: 'relative'}}>
                                        <Image source={traditionalTerritoriesIcon} resizeMode='contain'
                                               style={{width: 55, height: 55}}/>
                                    </View>

                                    <Subtitle1
                                        style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('traditionalTerritories.title')}</Subtitle1>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('TravelTrips')
                                }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <View style={{position: 'relative'}}>
                                        <Image source={travelTripsIcon} resizeMode='contain'
                                               style={{width: 55, height: 55}}/>
                                    </View>
                                    <Subtitle1
                                        style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('travelTrips.title')}</Subtitle1>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('AppInformation')
                                }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <View style={{position: 'relative'}}>
                                        <Image source={appInformationIcon} resizeMode='contain'
                                               style={{width: 40, height: 40}}/>
                                    </View>
                                    <Subtitle1
                                        style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('appInformation.title')}</Subtitle1>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('IntroStepOne')
                                }} style={[MoreStyles.btnBox, Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <View style={{position: 'relative'}}>
                                        <Image source={currentConditionsIcon} resizeMode='contain'
                                               style={{width: 40, height: 40}}/>
                                    </View>
                                    <Subtitle1
                                        style={[MoreStyles.btnText, Helpers.textAlignCenter]}>{i18n.t('appInformation.onboarding')}</Subtitle1>
                                </TouchableOpacity>

                                <View style={MoreStyles.LanguageLayout}>
                                    <TouchableOpacity onPress={() => {
                                        this.selectLanguage('en');
                                    }}>
                                        <View style={Helpers.flexCenter}>
                                            <LanguageSwitchIcon>
                                                <H3 style={MoreStyles.languageSwitchText}>en</H3>
                                            </LanguageSwitchIcon>
                                            <Body1 bold>ENGLISH</Body1>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => {
                                        this.selectLanguage('fr');
                                    }}>
                                        <View style={Helpers.flexCenter}>
                                            <LanguageSwitchIcon>
                                                <H3 style={MoreStyles.languageSwitchText}>fr</H3>
                                            </LanguageSwitchIcon>
                                            <Body1 bold>FRANÇAIS</Body1>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Content>
                    </ImageBackground>
                </Container>
            </Root>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale,
        hasUserSelectedLocale: state.coreStore.hasUserSelectedLocale,
        hasUserPassedOnboarding: state.coreStore.hasUserPassedOnboarding,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLocaleDispatch: value => dispatch(setLocale(value)),
        setSelectLocaleActionDispatch: value => dispatch(setSelectLocaleAction(value)),
        addListingDispatch: (value) => dispatch(addListing(value)),
        filterListingDispatch: value => dispatch(filterListing(value)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen);
