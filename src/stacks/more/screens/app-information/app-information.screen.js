import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import {Body1, COMMON, H2, Helpers} from '../../../../theme/theme';
import AppInformationStyles from './app-information.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';

const appInformationIcon = require('../../../../../assets/stacks/more/app-information-icon.png');
const logo = require('../../../../../assets/common/logo.png');


class AppInformationScreen extends React.Component {
    state = {}

    render() {
        const {navigation} = this.props;
        const fr_data = [
            {
                title: 'Services de location',
                content: '',
                QA: [
                    {
                        q: 'Pourquoi l\'application souhaite-t-elle accéder à ma position?',
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
        const data = [
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
                                    <H2 black style={Helpers.textAlignCenter}>App Information</H2>
                                    <View style={AppInformationStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>
                                        The Yukon Road Trip app is your guide to Government of Yukon’s road accessible
                                        campgrounds, wildlife viewing, cultural and historical points of interest.
                                        Connect with the natural and cultural history that surrounds you.

                                    </Body1>
                                </View>

                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, {
                                    paddingTop: 10,
                                    paddingBottom: 20
                                }]}>
                                    <Image source={logo} resizeMode='contain' style={{width: 104, height: 41}}/>
                                </View>

                                <View>
                                    <AccordionCustom data={fr_data}/>
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
