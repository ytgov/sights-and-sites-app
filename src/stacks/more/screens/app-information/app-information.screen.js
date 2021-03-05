import React from 'react';
import {Image, View} from 'react-native';
import {Content, Root} from 'native-base';
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
        const accordionData = [
            {
                title: i18n.t('appInformation.locationServices.title'),
                content: '',
                QA: [
                    {
                        q: i18n.t('appInformation.locationServices.questions.q1'),
                        a: i18n.t('appInformation.locationServices.questions.a1'),
                    },
                    {
                        q: i18n.t('appInformation.locationServices.questions.q2'),
                        a: i18n.t('appInformation.locationServices.questions.a2'),
                    }
                ]

            },
            {
                title: i18n.t('appInformation.mobileData.title'),
                content: i18n.t('appInformation.mobileData.content'),
                QA: [
                    {
                        q: i18n.t('appInformation.mobileData.questions.q1'),
                        a: i18n.t('appInformation.mobileData.questions.a1'),
                    },
                    {
                        q: i18n.t('appInformation.mobileData.questions.q2'),
                        a: i18n.t('appInformation.mobileData.questions.a2'),
                    }
                ]
            },
            {
                title: i18n.t('appInformation.privacyPolicy.title'),
                content: i18n.t('appInformation.privacyPolicy.content'),
            },
            {
                title: i18n.t('appInformation.termsConditions.title'),
                content: '',
                QA: [
                    {
                        q: i18n.t('appInformation.termsConditions.questions.q1'),
                        a: i18n.t('appInformation.termsConditions.questions.a1'),
                    },
                    {
                        q: i18n.t('appInformation.termsConditions.questions.q2'),
                        a: i18n.t('appInformation.termsConditions.questions.a2'),
                    },
                    {
                        q: i18n.t('appInformation.termsConditions.questions.q3'),
                        a: i18n.t('appInformation.termsConditions.questions.a3'),
                        list: [
                            {
                                q: i18n.t('appInformation.termsConditions.questions.q3List.q1'),
                                a: i18n.t('appInformation.termsConditions.questions.q3List.a1')
                            },
                            {
                                q: i18n.t('appInformation.termsConditions.questions.q3List.q2'),
                                a: i18n.t('appInformation.termsConditions.questions.q3List.a2'),
                            },
                            {
                                a: i18n.t('appInformation.termsConditions.questions.q3List.a3'),
                                items: [
                                    i18n.t('appInformation.termsConditions.questions.q3items.first'),
                                    i18n.t('appInformation.termsConditions.questions.q3items.second'),
                                ]
                            }
                        ]
                    },
                    {
                        q: i18n.t('appInformation.termsConditions.questions.q4'),
                        a: i18n.t('appInformation.termsConditions.questions.a4'),
                        links: [
                            {
                                url: i18n.t('appInformation.termsConditions.questions.q4Links.url1'),
                                title: i18n.t('appInformation.termsConditions.questions.q4Links.title1'),
                            },
                            {
                                url: i18n.t('appInformation.termsConditions.questions.q4Links.url2'),
                                title: i18n.t('appInformation.termsConditions.questions.q4Links.title2'),
                            }
                        ]
                    }
                ],
            }
        ];
        return (
            <Root>
                <Content style={[COMMON.content]}>
                    <View style={AppInformationStyles.contentPadded}>
                        <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                            <Image source={appInformationIcon} resizeMode='contain'
                                   style={{width: 40, height: 40, marginBottom: 12}}/>
                            <H2 black style={Helpers.textAlignCenter}>{i18n.t('appInformation.title')}</H2>
                            <View style={AppInformationStyles.separator}/>
                        </View>
                        <View>
                            <Body1 regular black>{i18n.t('appInformation.intro')}</Body1>
                        </View>
                        <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, {
                            paddingTop: 10,
                            paddingBottom: 20
                        }]}>
                            <Image source={logo} resizeMode='contain' style={{width: 104, height: 41}}/>
                        </View>

                        <View>
                            <AccordionCustom data={accordionData}/>
                        </View>
                    </View>
                </Content>
                <Feedback/>
            </Root>
        )
    }
}

export default AppInformationScreen;
