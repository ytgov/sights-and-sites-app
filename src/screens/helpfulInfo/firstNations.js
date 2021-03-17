import React                    from 'react';
import {useTranslation}         from 'react-i18next';
import Section                  from '~screens/siteDetails/section';
import HTMLElement              from '~components/htmlElement';
import ScreenParallaxWrapper    from '~components/screenParallaxWrapper';

const bgFirstNations = require('./images/bg-first-nations.png');
const iconFirstNations = require('./images/icon-first-nations.png');

const FirstNationsScreen = () => {
    const { t } = useTranslation();
    const blocks = [
        'sharing',
    ];

    return (
        <ScreenParallaxWrapper backgroundImage={bgFirstNations}
                               leadIcon={iconFirstNations}
                               title={t('firstNation.title')}>
            {
                blocks && blocks.length && blocks.map(block => {
                    return (
                        <Section title={t(`firstNation.${block}.title`)}>
                            <HTMLElement html={t(`firstNation.${block}.description`)} />
                        </Section>
                    );
                })
            }

        </ScreenParallaxWrapper>
    );
};

export default FirstNationsScreen;
