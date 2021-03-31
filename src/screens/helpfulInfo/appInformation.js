import React from 'react';
import { useTranslation } from 'react-i18next';

import AccordionCustom from '~components/accordion/accordion.component';
import ScreenParallaxWrapper from '~components/screenParallaxWrapper';
import HTMLElement from '~components/htmlElement';
import i18n from '~app/locale/locale';
import Section from '~screens/siteDetails/section';
const bgAppInformation = require('./images/bg-app-information.png');
const iconAppInformation = require('./images/icon-app-information.png');
const swoosh = require('~swoosh/swoosh-kluane.png');

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
                            i18n.t('appInformation.termsConditions.questions.q3List.q3items.first'),
                            i18n.t('appInformation.termsConditions.questions.q3List.q3items.second'),
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

const AppInformationScreen = () => {
    const { t } = useTranslation();

    return (
        <ScreenParallaxWrapper backgroundImage={bgAppInformation}
                               leadIcon={iconAppInformation}
                               swoosh={swoosh}
                               bookmarkButton={false}
                               title={'App information'}>
            <Section title={t('appInformation.title')}>
                <HTMLElement html={t('appInformation.intro')} />
            </Section>
            <Section>
                <AccordionCustom data={accordionData}/>
            </Section>

        </ScreenParallaxWrapper>
    );
};

export default AppInformationScreen;
