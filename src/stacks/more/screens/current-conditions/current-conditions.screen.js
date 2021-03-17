import React from 'react';
import {Image, Linking, TouchableOpacity, View} from 'react-native';

import {Content, Root} from 'native-base';
import {Body1, COMMON, H2, H3, Helpers} from '../../../../theme/theme';
import CurrentConditionStyles from './current-conditions.styles';
import Feedback from '../../components/feedback/feedback.component';

const currentConditionsIcon = require('../../../../../assets/stacks/more/current-conditions-icon.png');
import i18n from '../../../../locale/locale';

/*
* @Deprecated
* @see ~screens/helpfulInfo/currentConditions.js
* */
class CurrentConditionsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Current Conditions',
        }
    }

    state = {}

    static openLink(url) {
        Linking.openURL(url)
    }

    render() {
        return i18n.language === 'en' ?  this.renderEn() : this.renderFr();
    }

    renderFr() {
        return (
            <Root>
                <Content style={[COMMON.content]}>
                    <View style={CurrentConditionStyles.contentPadded}>
                        <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                            <Image source={currentConditionsIcon} resizeMode='contain'
                                   style={{width: 40, height: 40, marginBottom: 12}}/>
                            <H2 black style={Helpers.textAlignCenter}>Conditions actuelles</H2>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>
                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>Fermetures et avertissements relatifs aux terrains de camping</H3>
                            </View>

                            <Body1 regular black>
                                Pour obtenir de plus amples renseignements sur les terrains de camping du Yukon, dont les cartes, les
                                dates de fermeture et les avertissements destinés au public, consultez le site
                            </Body1>
                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('https://yukon.ca/fr/find-campground-or-recreation-site.')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>

                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>État des routes au Yukon</H3>
                            </View>

                            <Body1 regular black>
                                Avant de prendre la route, consultez toujours les rapports actualisés sur les conditions routières, les
                                avertissements et les fermetures de routes. Pour ce faire, consultez le
                                site
                            </Body1>

                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('http://511yukon.ca/fr/index.html')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>511yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>

                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>Rapports sur les incendies</H3>
                            </View>

                            <Body1 regular black>
                                Vous trouverez ici les dernières informations sur les rapports d’enquête sur les incendies ainsi que les
                                avis concernant la sécurité publique :
                            </Body1>

                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('https://yukon.ca/fr/situations-durgence-et-securite/informations-en-situation-durgence/rapports-denquete-sur-les')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
                <Feedback/>
            </Root>
        )
    }
    renderEn() {
        return (
            <Root>
                <Content style={[COMMON.content]}>
                    <View style={CurrentConditionStyles.contentPadded}>
                        <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                            <Image source={currentConditionsIcon} resizeMode='contain'
                                   style={{width: 40, height: 40, marginBottom: 12}}/>
                            <H2 black style={Helpers.textAlignCenter}>Current Conditions</H2>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>
                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>Campground closures and warnings</H3>
                            </View>
                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/find-campground-or-recreation-site')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                            <Body1 regular black>
                                Information on Government of Yukon’s campgrounds, including campground maps,
                                closures and public warnings, visit.
                            </Body1>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>

                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>Highway conditions</H3>
                            </View>
                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('http://511yukon.ca/en/index.html')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>511yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                            <Body1 regular black>
                                Yukon’s highway reports on current road conditions, warnings and closures.
                            </Body1>
                            <View style={CurrentConditionStyles.separator}/>
                        </View>

                        <View>
                            <View style={CurrentConditionStyles.sectionTitleBox}>
                                <H3 black>Fire Reports</H3>
                            </View>
                            <View style={CurrentConditionStyles.linkBox}>
                                <TouchableOpacity onPress={() => {
                                    CurrentConditionsScreen.openLink('https://yukon.ca/en/emergencies-and-safety/emergency-updates/fire-investigation-reports-and-safety-notices')
                                }}>
                                    <View style={CurrentConditionStyles.link}><Body1
                                        black>yukon.ca</Body1></View>
                                </TouchableOpacity>
                            </View>
                            <Body1 regular black>
                                Current information on Yukon’s fire investigation reports and public safety
                                notices.
                            </Body1>
                        </View>
                    </View>
                </Content>
                <Feedback/>
            </Root>
        )
    }
}

export default CurrentConditionsScreen;
