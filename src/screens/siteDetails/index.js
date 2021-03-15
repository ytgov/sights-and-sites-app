import React from 'react';
import _ from 'lodash';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
import {H3, Body} from '../../theme/typings';
import SiteType from './siteType';
import Section from './section';
import WebLink, {WebLinkIcon, WebLinkType} from '../../components/webLink';

import {shareOnSocialMedia} from '../../shared/services/share';

const bgPlaceholder = require('./images/bg-placeholder.png');
const swooshYellow = require('./images/swoosh-yellow.png');
const swooshTeal = require('./images/swoosh-teal.png');

const BOOKING_URL = 'https://yukon.ca/en/road-trip-app';

const SiteDetailsScreen = (props) => {
    const {t} = useTranslation();

    const {navigation} = props
    const item = navigation.getParam('item');

    const {
        site_name,
        site_description,
        site_directions,
        warning,
        region: { swoosh, map },
        site_types,
        highway_name,
        highway_km,
        secondary_road_km,
        secondary_road_name
    } = item

    const directions = [
        {
            label: t('siteDetails.sectionDirections.highway'),
            content: highway_name || ''
        },
        {
            label: t('siteDetails.sectionDirections.highwayKm'),
            content: `${highway_km} km`
        },
        {
            label: t('siteDetails.sectionDirections.secondaryRoad'),
            content: secondary_road_name || ''
        },
        {
            label: t('siteDetails.sectionDirections.secondaryRoadKm'),
            content: `${secondary_road_km} km`
        },
        {
            label: t('siteDetails.sectionDirections.siteDirections'),
            content: site_directions || ''
        },
    ]

    const helpfulLinks = [
        {
            label: t('siteDetails.sectionHelpfulLinks.getCampingPermit'),
            url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/get-camping-permit'
        },
        {
            label: t('siteDetails.sectionHelpfulLinks.rulesSafety'),
            url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/rules-and-safety-campgrounds-and-recreation-sites'
        },
        {
            label: t('siteDetails.sectionHelpfulLinks.guideToCamping'),
            url: 'https://yukon.ca/en/guide-camping-yukon'
        },
        {
            label: t('siteDetails.sectionHelpfulLinks.map'),
            url: 'https://yukon.ca/en/map-government-campground-recreation-sites'
        }
    ]

    return (
        <ScreenParallaxWrapper backgroundImage={bgPlaceholder}
                               title={site_name}
                               leadIcon={map}
                               leadIconStyle={{ height: 42 }}
                               swoosh={swoosh}
                               >
            <Section title={t('siteDetails.siteTypes.title')}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    {site_types.map((item, i) =>
                        <SiteType key={i}
                                  name={item.name}
                                  icon={item.icon}
                                  style={{width: '50%', marginTop: 16}} />)}
                </View>
            </Section>

            {_.isNull(warning) &&
                <Section title={t('siteDetails.sectionInfo.title')}
                         backgroundColor={'#fdf6e9'}
                         swoosh={swooshYellow}>
                    <Body black>
                        <Body fontBold black>{'Warning:'}</Body> {warning}
                    </Body>
                </Section>}


            <Section title={t('siteDetails.sectionDescription.title')}>
                <Body black>{site_description}</Body>
            </Section>

            <Section title={t('siteDetails.sectionDirections.title')}
                     backgroundColor={'#eaf4f6'}
                     swoosh={swooshTeal}>

                {directions.map((item, i) => {
                    if (item.content === '') return;
                    return (
                        <Body key={i}
                              black
                              style={{ marginBottom: 12 }}>
                            <Body fontBold black>{`${item.label}: `}</Body> {item.content}
                        </Body>
                    )
                })}
            </Section>

            <Section title={t('siteDetails.sectionHelpfulLinks.title')}>
                {helpfulLinks.map((item, i) =>
                    <WebLink label={item.label}
                             key={i}
                             type={WebLinkType.LINK}
                             icon={WebLinkIcon.EXT_LINK}
                             url={item.url} />)}
            </Section>

            <Section title={t('siteDetails.sectionBooking.title')}
                     backgroundColor={'#224c5a'}
                     swoosh={swooshTeal}
                     whiteTitle={true}>
                <Body>{t('siteDetails.sectionBooking.text')}</Body>
                <WebLink label={t('siteDetails.sectionBooking.linkLabel')}
                         type={WebLinkType.BUTTON_YELLOW}
                         icon={WebLinkIcon.EXT_LINK}
                         url={BOOKING_URL}
                         containerStyle={{marginVertical: 20}} />

                <Body>{t('siteDetails.sectionBooking.extra')}</Body>
            </Section>

            <Section title={t('siteDetails.sectionSupport.title')}>
                <Body black>{t('siteDetails.sectionSupport.text')}</Body>
                <WebLink label={t('siteDetails.sectionSupport.shareButton')}
                         type={WebLinkType.BUTTON_TEAL}
                         icon={WebLinkIcon.SHARE}
                         containerStyle={{marginVertical: 20}}
                         url={'#'}
                         // @TODO: check for network to show/hide share button?
                         onPress={() => shareOnSocialMedia(site_name, site_description)}
                />
            </Section>

        </ScreenParallaxWrapper>
    );
};

SiteDetailsScreen.propTypes = {

}

SiteDetailsScreen['navigationOptions'] = {
    headerMode: 'none',
    header: null
}

export default SiteDetailsScreen;
