import React from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import {Body1, COMMON, H2, Helpers} from '../../../../theme/theme';
import TravelTripsStyles from './travel-trips.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';
import i18n from '../../../../locale/locale';

const travelTripsIcon = require('../../../../../assets/stacks/more/travel-trips-icon.png');

class TravelTripsScreen extends React.Component {
    state = {}

    static openLink(url) {
        Linking.openURL(url)
    }

    render() {
        return i18n.language === 'en' ? this.renderEn() : this.renderFr();
    }

    renderFr() {
        const {navigation} = this.props;
        const data = [
            {
                title: 'Préservation du patrimoine historique',
                content_italicized: 'La Loi sur le patrimoine historique',
                content: ' garantit la préservation du patrimoine historique du Yukon.  Ne ' +
                    'déplacez jamais un artéfact d’un lieu archéologique ou historique. Pour signaler une découverte, ' +
                    'contactez Archéologie Yukon par téléphone au 867-667-5983 ou au 1-800-661-0408, poste 5983 (sans ' +
                    'frais au Yukon). Les artéfacts appartiennent aux Yukonnais et le gouvernement du Yukon en est le ' +
                    'dépositaire.',
            },
            {
                title: 'Règles de sécurité à suivre dans la nature',
                content: `Avant de partir à la découverte d’un sentier, renseignez-vous sur le secteur et faites-vous un plan. Au Yukon, de nombreux sentiers ont une longueur de plusieurs centaines de kilomètres.`,
                url: 'https://yukon.ca/fr/plein-air-faune-et-flore/securite-en-milieu-sauvage/se-deplacer-en-toute-securite-dans-la-nature',
                url_text: 'Consultez le site pour obtenir d’autres conseils sur le tourisme d’aventure.'
            }
        ];

        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={TravelTripsStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={travelTripsIcon} resizeMode='contain'
                                           style={{width: 55, height: 55, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>Se déplacer dans la nature</H2>
                                    <View style={TravelTripsStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>Conseils pour observer la faune sans danger à proximité de la route:{'\n'}</Body1>
                                    <Text>
                                        <Body1 bold black>ARRÊTEZ-VOUS </Body1>
                                        <Body1 regular black>
                                            seulement quand vous pouvez le faire en toute sécurité, c’est-à-dire après
                                            avoir vérifié
                                            la circulation et vous être assuré que votre véhicule est bien
                                            visible.{'\n'}
                                        </Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>REGARDEZ </Body1>
                                        <Body1 regular black>
                                            sans sortir de votre véhicule. Utilisez des jumelles ou un objectif à focale
                                            variable pour voir
                                            de plus près.{'\n'}
                                        </Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>REPARTEZ </Body1>
                                        <Body1 regular black>
                                            dans un délai d’une minute pour garantir la sécurité des animaux. Les
                                            animaux qui
                                            s’habituent aux êtres humains risquent de se faire tuer.{'\n'}
                                        </Body1>
                                    </Text>
                                </View>

                                <View>
                                    <AccordionCustom data={data}/>
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
        const data = [
            {
                title: 'Protecting historic resources',
                content: 'Yukon’s historic resources are protected under the Historic Resources Act. Do no remove an artifact from an archaeological or historic site. Artifacts belong to all Yukoners and are held in the public trust. To report a find, contact',
                contacts: [
                    {
                        name: 'Yukon Archaeology',
                        contact: '867-667-5983'
                    },
                    {
                        name: 'Government of Yukon Toll-Free line',
                        contact: '1-800-661-0408'
                    }
                ]
            },
            {
                title: 'More wilderness safety tips',
                content: `Before exploring a trail be sure to learn about the area and make a plan. There are many trails that head off into Yukon’s wilderness for hundreds of kilometers. `,
                url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/wilderness-safety/travel-safely-yukon-wilderness'
            }
        ];

        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={TravelTripsStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={travelTripsIcon} resizeMode='contain'
                                           style={{width: 55, height: 55, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>Wilderness Travel Tips</H2>
                                    <View style={TravelTripsStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>Tips for safe roadside wildlife viewing:{'\n'}</Body1>
                                    <Text>
                                        <Body1 bold black>STOP </Body1>
                                        <Body1 regular black>only when it is safe to do so, checking for traffic and
                                            clear sightlines.{'\n'}</Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>LOOK </Body1>
                                        <Body1 regular black>from the safety of your car. Use binoculars or a zoom lens
                                            for a closer look. {'\n'} </Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>LEAVE </Body1>
                                        <Body1 regular black>within one minute to keep wildlife safe. Animals that
                                            become too habituated to humans are at risk of being killed. {'\n'} </Body1>
                                    </Text>
                                </View>

                                <View>
                                    <AccordionCustom data={data}/>
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

export default TravelTripsScreen;
