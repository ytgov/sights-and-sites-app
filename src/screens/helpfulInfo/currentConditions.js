import React                    from 'react';
import { useTranslation }       from 'react-i18next';
import ScreenParallaxWrapper    from '~components/screenParallaxWrapper';
import Section                  from '~screens/siteDetails/section';
import HTMLElement              from '~components/htmlElement';

const bgCurrentConditions = require('./images/bg-current-conditions.png');
const iconCurrentConditions = require('./images/icon-current-conditions.png');

const CurrentConditionsScreen = () => {
    const { t } = useTranslation();

    const blocks = [
        'campground',
        'highway',
        'fireReport',
    ];

    return (
        <ScreenParallaxWrapper backgroundImage={bgCurrentConditions}
                               leadIcon={iconCurrentConditions}
                               title={t('currentConditions.title')}>
            {
                blocks && blocks.length && blocks.map((block, i) => {
                    return (
                        <Section key={i}
                                 title={t(`currentConditions.${block}.title`)}>
                            <HTMLElement html={t(`currentConditions.${block}.description`)} />
                        </Section>
                    );
                })
            }
        </ScreenParallaxWrapper>
    );
};

export default CurrentConditionsScreen;
