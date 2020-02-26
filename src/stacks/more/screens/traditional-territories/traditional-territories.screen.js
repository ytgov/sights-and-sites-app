import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import {Body1, COMMON, H2, Helpers} from '../../../../theme/theme';
import TraditionalTerritoriesStyles from './traditional-territories.styles';
import Feedback from '../../components/feedback/feedback.component';
import i18n from '../../../../locale/locale';
import CurrentConditionsScreen from '../current-conditions/current-conditions.screen';

const traditionalTerritoriesIcon = require('../../../../../assets/stacks/more/traditional-territories-icon.png');

class TraditionalTerritoriesScreen extends React.Component {
    state = {}

    render() {
        return i18n.language === 'en' ? this.renderEn() : this.renderFr();
    }

    renderFr() {
        const {navigation} = this.props;
        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={TraditionalTerritoriesStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={traditionalTerritoriesIcon} resizeMode='contain'
                                           style={{width: 55, height: 55, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>Les peuples autochtones du Yukon</H2>
                                    <View style={TraditionalTerritoriesStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>
                                        Le Yukon est un territoire où vivent un grand nombre de groupes autochtones
                                        ayant divers héritages
                                        politiques, culturels et linguistiques. Ces groupes ont en commun un profond
                                        attachement sentimental
                                        et spirituel pour leur territoire ancestral. Durant votre exploration du Yukon,
                                        veuillez respecter le
                                        caractère sacré du territoire à l’origine du mode de vie des Autochtones. Vous
                                        trouverez de plus amples
                                        renseignements sur

                                        <Text style={{color: '#08f'}} onPress={() => {
                                            CurrentConditionsScreen.openLink('https://yukon.ca/fr/about-yukon-first-nations')
                                        }}>
                                            {' '}Yukon.ca{' '}
                                        </Text>
                                         et sur
                                        <Text style={{color: '#08f'}} onPress={() => {
                                            CurrentConditionsScreen.openLink('https://mappingtheway.ca/')
                                        }}>
                                            {' '}Mapping the Way{' '}
                                        </Text>
                                        (en anglais).
                                    </Body1>
                                </View>
                            </View>
                        </Content>
                        <Feedback/>
                    </SafeAreaView>
                </Container>
            </Root>
        )
    }

    renderEn() {
        const {navigation} = this.props;
        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={TraditionalTerritoriesStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={traditionalTerritoriesIcon} resizeMode='contain'
                                           style={{width: 55, height: 55, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>First Nations in Yukon</H2>
                                    <View style={TraditionalTerritoriesStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>
                                        Yukon is home to many First Nations with various political, cultural and linguistic backgrounds. These groups share deep traditional and spiritual connections to their ancestral lands. As you explore Yukon, please demonstrate respect for the sacred land that sustains Indigenous ways of life. More information is available at
                                        <Text style={{color: '#08f'}} onPress={() => {
                                            CurrentConditionsScreen.openLink('https://yukon.ca/en/about-yukon-first-nations')
                                        }}>
                                            {' '}Yukon.ca{' '}
                                        </Text>
                                        ,
                                        <Text style={{color: '#08f'}} onPress={() => {
                                            CurrentConditionsScreen.openLink('https://mappingtheway.ca/')
                                        }}>
                                            {' '}Mapping the Way{' '}
                                        </Text>
                                        and at each Yukon First Nations official website.
                                    </Body1>
                                </View>
                            </View>
                        </Content>
                        <Feedback/>
                    </SafeAreaView>
                </Container>
            </Root>
        )
    }
}

export default TraditionalTerritoriesScreen;
