import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import {Body1, COMMON, H2, Helpers} from '../../../../theme/theme';
import AppInformationStyles from './app-information.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';
import i18n from '../../../../locale/locale';

const appInformationIcon = require('../../../../../assets/stacks/more/app-information-icon.png');
const logo = require('../../../../../assets/common/logo.png');


class AppInformationScreen extends React.Component {
    state = {}

    render() {
        const {navigation} = this.props;
        const fr_data = [
            {
                title: 'Géolocalisation',
                content: '',
                QA: [
                    {
                        q: 'Pourquoi l\'application souhaite-t-elle accéder à ma position?',
                        a: `L'application utilise l'emplacement fourni par votre appareil pour vous montrer des résultats utiles, comme les sites à proximité. \n
Cette application ne stocke pas l'emplacement, elle est uniquement utilisée dans votre appareil. Vous pouvez activer les paramètres de localisation dans l'application ou sur votre appareil.`
                    },
                    {
                        q: 'Je ne souhaite pas activer les services de localisation',
                        a: 'Aucun problème! Vous pouvez quand même rechercher et filtrer des lieux. Cependant, vous ne pourrez ' +
                            'pas naviguer jusqu’à ces lieux ou voir les lieux situés à proximité dans l’application. \n\n' +
                            'Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, ' +
                            'au besoin.'
                    }
                ]

            },
            {
                title: 'Données mobiles',
                content: 'Si votre appareil est connecté à Internet, il utilisera les données mobiles pour mettre l’application à jour, au besoin.',
                QA: [
                    {
                        q: 'Puis-je utiliser l\'application hors ligne?',
                        a: `L’application fonctionne entièrement hors ligne. Les cartes se téléchargent sur votre appareil si vous autorisez l’application à le faire.`
                    },
                    {
                        q: 'Quand les données de l’application sont-elles mises à jour?',
                        a:
                            `L’application est mise à jour périodiquement lorsque de nouvelles données sont disponibles, par exemple :

\u2022 Nouveaux lieux
\u2022 Services relatifs à des lieux existants
\u2022 Itinéraires
\u2022 Détails sur les cartes
            `
                    }
                ]
            },
            {
                title: 'Politique de confidentialité',
                content: `Le gouvernement du Yukon s'engage à protéger votre vie privée. La collecte, l'utilisation, la divulgation, la conservation et l'élimination des informations recueillies via les propriétés en ligne du gouvernement du Yukon, telles que nos sites Web, se font conformément à la Loi sur l'accès à l'information et la protection de la vie privée et à la Loi sur les archives.

Le but de cette déclaration de confidentialité est de vous informer des renseignements personnels qui peuvent être recueillis auprès de vous lorsque vous interagissez avec le gouvernement du Yukon en ligne.`
            },
            {
                title: 'Termes et conditions',
                content: '',
                QA: [
                    {
                        q: 'Avis de non responsabilité',
                        a: 'Ces renseignements sont distribués « tels quels » et ne présentent aucune garantie exprimée ou implicite. L’information peut être utilisée à la condition qu’il soit formellement entendu que ni le gouvernement, ni ses ministres, employés ou agents ne seront responsables des pertes ou des dommages de quelque nature que ce soit qui pourraient résulter de l’utilisation des renseignements fournis dans cette application ou sur les sites externes pour lesquels elle offre des liens.',
                    },
                    {
                        q: 'Avis de confidentialité',
                        a: 'Le gouvernement du Yukon s’engage à protéger vos renseignements personnels. La collecte, l’utilisation, la divulgation, la conservation et l’élimination de l’information recueillie à partir des ressources en ligne du gouvernement du Yukon telles que les sites Web et les applications mobiles sont faits en conformité avec la Loi sur l’accès à l’information et la protection des renseignements personnels et la Loi sur les archives.\n \n' +
                            'Le présent avis de confidentialité a pour objet de vous faire savoir quels renseignements personnels pourraient être recueillis lorsque vous utilisez cette application.',
                    },
                    {
                        q: 'Collecte de renseignements personnels',
                        a: 'La collecte de renseignements personnels recueillis à partir des sites Web du gouvernement est effectuée conformément au paragraphe 29c) de la Loi sur l’accès à l’information et la protection de la vie privée aux fins indiquées ci-après : \n',
                        list: [
                            {
                                q: '1. Communiquer avec le ministère du Tourisme et de la Culture, gouvernement du Yukon',
                                a: 'Si vous choisissez d’envoyer par courriel une demande de renseignements ou des commentaires généraux sur l’application mobile, vos renseignements personnels peuvent être utilisés pour répondre à votre courriel.\n' +
                                    'Les courriels et autres méthodes électroniques utilisées pour communiquer avec le gouvernement du Yukon ne sont pas protégés, à moins d’indication contraire, clairement énoncée. Il est donc recommandé de ne pas transmettre de renseignements personnels de nature délicate par ces moyens.'
                            },
                            {
                                q: '2. Fichier de journalisation',
                                a: 'Nous recueillons les informations que votre appareil envoie lorsque vous utilisez notre application mobile (« fichier de journalisation »).'
                            },
                            {
                                a: 'Le fichier de journalisation contient des informations telles que :',
                                items: [
                                    'l’adresse de protocole Internet (adresse IP) de votre ordinateur,',
                                    'la date et l’heure de la demande.'
                                ]
                            }
                        ]
                    },
                    {
                        q: 'Renseignements :',
                        a: 'Pour toute question, veuillez contacter la Section des lieux d’intérêt historique, ministère du Tourisme et de la Culture, gouvernement du Yukon.\n',
                        links: [
                            {
                                url: 'mailto:Heritage.planning@gov.yk.ca',
                                title: 'Heritage.planning@gov.yk.ca'
                            },
                            {
                                url: 'tel:1-867-667-5386',
                                title: '1-867-667-5386'
                            }
                        ]
                    }
                ],
            }
        ];
        const en_data = [
            {
                title: 'Location Services',
                content: '',
                QA: [
                    {
                        q: 'Why does the app want to access my location?',
                        a: `The app uses the location provided by your device to show you helpful results, like nearby sites.
This app does not store the location, it is only used within your device. You can enable location settings within the app or on your device.`
                    },
                    {
                        q: 'I don’t want to enable location services',
                        a: 'No problem! You can still search and filter sites, however you will not be able to navigate to these sites or see nearby sites within the app.'
                    }
                ]

            },
            {
                title: 'Mobile Data',
                content: ' If your device is connected to the internet, it will use mobile data to update the app if required.',
                QA: [
                    {
                        q: 'Can I use the app offline?',
                        a: `The app functions entirely offline. The maps are downloaded to your device when you give the app permission to do so.`
                    },
                    {
                        q: 'When is the information in the app updated? ',
                        a:
                            `The app is updated periodically with new data when it becomes available. This includes:

\u2022 New sites
\u2022 Existing site services
\u2022 Directions
\u2022 Map details
            `
                    }
                ]
            },
            {
                title: 'Privacy Policy',
                content: `The Government of Yukon is committed to protecting your privacy. The collection, use, disclosure, retention, and disposal of information collected via Government of Yukon online properties, such as our websites is done in compliance with the Access to Information and Protection of Privacy Act and the Archives Act.

The purpose of this privacy statement is to inform you of the personal information that may be collected from you when you interact with the Government of Yukon online.`
            },
            {
                title: 'Terms & Conditions',
                content: '',
                QA: [
                    {
                        q: 'Disclaimer',
                        a: 'This information is distributed "as is" and does not represent any expressed or implied warranties. Information may be used on the condition that it is formally understood that neither the government nor its ministers, employees or agents will be liable for loss or damage of any kind that may result from the use of the information provided in this application or on external sites to which it offers links.',
                    },
                    {
                        q: 'Privacy Notice',
                        a: 'The Government of Yukon is committed to protecting your personal information. The collection, use, disclosure, retention and disposal of information collected from Yukon government online resources such as websites and mobile applications is done in accordance with the access to information and the protection of personal information and the Archives Act. \n \n ' +
                            'The purpose of this privacy notice is to let you know what personal information may be collected while using this application.',
                    },
                    {
                        q: 'Collection of personal information',
                        a: 'The collection of personal information collected from government websites is carried out in accordance with section 29 (c) of the Access to Information and Protection of Privacy Act for the purposes indicated below: \n',
                        list: [
                            {
                                q: '1. Contact the Department of Tourism and Culture, Government of Yukon',
                                a: 'If you choose to email an inquiry or general feedback on the mobile app, your personal information may be used to respond to your email.\n' +
                                    'E-mail and other electronic methods used to communicate with the Yukon government are not protected unless clearly stated otherwise. It is therefore recommended not to transmit sensitive personal information by these means.'
                            },
                            {
                                q: '2. Log file',
                                a: 'We collect the information that your device sends when you use our mobile application ("log file").'
                            },
                            {
                                a: 'The log file contains information such as:',
                                items: [
                                    'The Internet Protocol address (IP address) of your computer,',
                                    'The date and time of the request.'
                                ]
                            }
                        ]
                    },
                    {
                        q: 'Information :',
                        a: 'If you have any questions, please contact the Places of Historic Interest Section, Department of Tourism and Culture, Government of Yukon.\n',
                        links: [
                            {
                                url: 'mailto:Heritage.planning@gov.yk.ca',
                                title: 'Heritage.planning@gov.yk.ca'
                            },
                            {
                                url: 'tel:1-867-667-5386',
                                title: '1-867-667-5386'
                            }
                        ]
                    }
                ],
            }
        ];
        const locale = i18n.language
        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={AppInformationStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={appInformationIcon} resizeMode='contain'
                                           style={{width: 40, height: 40, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>{i18n.language === 'en' ? 'App Information' : 'Renseignements sur l’application'}</H2>
                                    <View style={AppInformationStyles.separator}/>
                                </View>

                                <View>
                                    {
                                        i18n.language === 'en' ?
                                            (
                                                <Body1 regular black>
                                                    The Yukon Road Trip app is your guide to Government of Yukon’s road
                                                    accessible
                                                    campgrounds, wildlife viewing, cultural and historical points of
                                                    interest.
                                                    Connect with the natural and cultural history that surrounds you.
                                                </Body1>
                                            ) :
                                            (
                                                <Body1 regular black>
                                                    Cette appli est votre guide sur les terrains de camping, la vie sauvage ainsi que les lieux d’intérêt culturel
                                                    et historique qui sont accessibles par le réseau routier du Yukon. Explorez les sites par route ou par
                                                    région ou bien recherchez un site à proximité. Découvrez l’histoire naturelle et culturelle qui vous
                                                    entoure.
                                                </Body1>
                                            )
                                    }
                                </View>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, {
                                    paddingTop: 10,
                                    paddingBottom: 20
                                }]}>
                                    <Image source={logo} resizeMode='contain' style={{width: 104, height: 41}}/>
                                </View>

                                <View>
                                    <AccordionCustom data={i18n.language === 'en' ? en_data : fr_data}/>
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

export default AppInformationScreen;
