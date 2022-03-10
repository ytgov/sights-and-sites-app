import React from 'react';
import {useTranslation} from 'react-i18next';
import Section from '~screens/siteDetails/section';
import HTMLElement from '~components/htmlElement';
import ScreenParallaxWrapper from '~components/screenParallaxWrapper';
import AccordionCustom from '~components/accordion/accordion.component';

const bgWilderness = require('./images/bg-wilderness-travel-tips.png');
const iconWilderness = require('./images/icon-wilderness.png');
const swoosh = require('~swoosh/swoosh-silver-trail.png');

const WildernessTravelTipsScreen = () => {
  const {t} = useTranslation();

  const accordionData = [
    {
      title: t('travelTips.data.title1'),
      content_italicized: t('travelTips.data.content_italicized1'),
      content: t('travelTips.data.content1'),
      contacts: [
        {
          name: t('travelTips.data.contacts1.name1'),
          contact: t('travelTips.data.contacts1.contact1'),
        },
        {
          name: t('travelTips.data.contacts1.name2'),
          contact: t('travelTips.data.contacts1.contact2'),
        },
      ],
    },
    {
      title: t('travelTips.data.title2'),
      content: t('travelTips.data.content2'),
      url: t('travelTips.data.url2'),
    },
  ];

  return (
    <ScreenParallaxWrapper
      backgroundImage={bgWilderness}
      swoosh={swoosh}
      leadIcon={iconWilderness}
      bookmarkButton={false}
      title={t('travelTips.title')}>
      <Section title={t('travelTips.section.title')}>
        <HTMLElement html={t('travelTips.section.stop')} />
        <HTMLElement html={t('travelTips.section.look')} />
        <HTMLElement html={t('travelTips.section.leave')} />
      </Section>

      <Section>
        <AccordionCustom data={accordionData} />
      </Section>
    </ScreenParallaxWrapper>
  );
};

export default WildernessTravelTipsScreen;
