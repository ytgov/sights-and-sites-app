import React, {useState, useRef, useEffect} from 'react';
import {
  isEmpty as _isEmpty,
  isArray as _isArray,
  isUndefined as _isUndefined,
  chunk as _chunk,
} from 'lodash';
import {
  Animated,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

import {
  hideHeader,
  hideSearch,
  setCurrentScreenName,
} from '~store/actions/core';
import {setFavorites} from '~store/actions/filters';

import ScreenParallaxWrapper from '~components/screenParallaxWrapper';
import {Body, H3} from '~theme/typings';
import SiteType from './siteType';
import Section from './section';
import WebLink, {WebLinkIcon, WebLinkType} from '~components/webLink';
import Service from '~components/service';
import HTMLElement from '~components/htmlElement';

import {shareOnSocialMedia} from '~app/shared/services/share';
import {toastWithIcon} from '~app/shared/services/notify';

import getMockNearSites from './near-sites';
import Swiper from 'react-native-swiper';
import SiteCard from '~components/siteCard';
import {YUKON_COLORS} from '~theme/config';
import routes from '~navigation/routes';
import styles from './styles';
import SearchBox from '~components/searchBox';

const bgPlaceholder = require('./images/bg-placeholder.png');
const swooshYellow = require('./images/swoosh-yellow.png');
const swooshTeal = require('./images/swoosh-teal.png');

const BOOKING_URL = 'https://yukon.ca/en/road-trip-app';

const SiteDetailsScreen = props => {
  const {t} = useTranslation();
  const windowWidth = useWindowDimensions().width;
  const {
    navigation,
    dispatchHideHeader,
    filtersStore,
    listingRaw,
    dispatchSetFavorites,
    dispatchHideSearch,
    dispatchSetCurrentScreenName,
    isSearchVisible,
    isHeaderVisible,
    locale,
  } = props;

  const [myFavorites, setMyFavorites] = useState(
    (filtersStore && filtersStore.myFavorites) || [],
  );
  const [item, setItem] = useState({});

  /* Animation */
  const currentProgressBarWidth = useRef(new Animated.Value(0)).current;
  const renderPagination = (index, total) => {
    const realIndex = index + 1;
    const fullWidth =
      windowWidth - 32; /* Full screen width less container margins (16 * 2)*/
    const width = (realIndex * fullWidth) / total;

    Animated.timing(currentProgressBarWidth, {
      toValue: width,
      duration: 200,
      useNativeDriver: false,
    }).start();

    const animatedStyles = {
      width: currentProgressBarWidth,
    };

    return (
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, animatedStyles]} />
      </View>
    );
  };

  useEffect(() => {
    const site_id = navigation.getParam('site_id');
    const i = listingRaw.find(i => i.site_id === site_id);
    if (!_isUndefined(i)) {
      setItem(i);
    }

    if (isSearchVisible) {
      dispatchHideSearch();
    }
    if (isHeaderVisible) {
      dispatchHideHeader();
    }
  }, [item, locale]);

  if (_isEmpty(item)) {
    return null;
  }

  const {
    site_id,
    site_name,
    site_description,
    site_directions,
    images: {roadtrip_portrait},
    warning,
    region: {swoosh, map},
    site_types,
    highway_name,
    highway_km,
    latitude,
    longitude,
    secondary_road_km,
    secondary_road_name,
    nearby_sites,
    services,
  } = item;

  /* Near Sites Mock/Functionality */
  const randomNearSites = Math.round(Math.random() * 9) + 1;

  const mockNearSites = nearby_sites || getMockNearSites(randomNearSites);
  const plainNearSitesIds = Object.keys(mockNearSites)
    .map(key => mockNearSites[key])
    .sort((itemA, itemB) =>
      Number(itemA.distance) > Number(itemB.distance) ? 1 : -1,
    );

  const nearBySites = plainNearSitesIds.map(item => {
    const site = listingRaw.find(site => {
      return site.site_id === Number(item.site_id);
    });
    return {
      ...item,
      ...site,
      ...{
        images: !_isArray(site.images)
          ? site.images
          : {roadtrip_portrait: '', roadtrip_landscape: ''},
      },
    };
  });

  /* Near Sites Mock/Functionality */

  const isFavoriteSite =
    myFavorites.length && myFavorites.find(site => site_id === site.site_id);

  const onBookmarkClick = () => {
    let newMyFavorites;

    if (!isFavoriteSite) {
      toastWithIcon(t('favorites.addedToFavorites'), 'heart', {
        containerStyle: {
          width: windowWidth,
        },
      });
      newMyFavorites = [...myFavorites, item];
    } else {
      newMyFavorites = myFavorites.filter(site => site_id !== site.site_id);
    }

    setMyFavorites(newMyFavorites);
    dispatchSetFavorites(newMyFavorites);
  };

  const directions = [
    {
      label: t('siteDetails.sectionDirections.highway'),
      content: highway_name || '',
    },
    {
      label: t('siteDetails.sectionDirections.highwayKm'),
      content: `${highway_km} km`,
    },
    {
      label: t('siteDetails.sectionDirections.secondaryRoad'),
      content: secondary_road_name || '',
    },
    {
      label: t('siteDetails.sectionDirections.secondaryRoadKm'),
      content: `${secondary_road_km} km`,
    },
    {
      label: t('siteDetails.sectionDirections.GPS'),
      content: `${latitude}°N ${longitude}°W`,
    },
    {
      label: t('siteDetails.sectionDirections.siteDirections'),
      content: site_directions || '',
    },
  ];

  const helpfulLinks = [
    {
      label: t('siteDetails.sectionHelpfulLinks.getCampingPermit'),
      url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/get-camping-permit',
    },
    {
      label: t('siteDetails.sectionHelpfulLinks.rulesSafety'),
      url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/camping/rules-and-safety-campgrounds-and-recreation-sites',
    },
    {
      label: t('siteDetails.sectionHelpfulLinks.guideToCamping'),
      url: 'https://yukon.ca/en/guide-camping-yukon',
    },
    {
      label: t('siteDetails.sectionHelpfulLinks.map'),
      url: 'https://yukon.ca/en/map-government-campground-recreation-sites',
    },
  ];

  const search = (isSearchVisible && <SearchBox />) || null;

  return (
    <ScreenParallaxWrapper
      backgroundImage={roadtrip_portrait}
      title={site_name}
      leadIcon={map}
      leadIconStyle={{height: 42}}
      swoosh={swoosh}
      bookmarkButton={true}
      bookmarkActive={!!isFavoriteSite}
      bookmarkOnClick={onBookmarkClick}
      search={search}>
      <NavigationEvents
        onDidFocus={() => {
          dispatchHideHeader();
          dispatchHideSearch();
          dispatchSetCurrentScreenName(routes.SCREEN_SITE_DETAILS);
        }}
        onWillBlur={() => {
          dispatchSetCurrentScreenName(null);
        }}
      />

      <Section title={t('siteDetails.siteTypes.title')}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {site_types &&
            site_types.length &&
            site_types.map((item, i) => {
              return (
                <SiteType
                  key={i}
                  name={t(`filterTypes.${item.id}`)}
                  icon={item.icon}
                  style={{width: '50%', marginTop: 16}}
                />
              );
            })}
        </View>
      </Section>

      {!_isEmpty(warning) && (
        <Section
          title={t('siteDetails.sectionInfo.title')}
          backgroundColor={'#fdf6e9'}
          swoosh={swooshYellow}>
          <Body black>
            <Body fontBold black>
              {'Warning:'}
            </Body>{' '}
            {warning}
          </Body>
        </Section>
      )}

      <Section title={t('siteDetails.sectionDescription.title')}>
        <Body black>{site_description.replace(/&nbsp;/g, ' ')}</Body>
      </Section>

      {services.length > 0 && (
        <Section title={t('siteDetails.sectionServices.title')}>
          <View style={{flexDirection: 'row'}}>
            {services.map((item, i) => (
                <View key={item.id}>
                  <Service key={item.id} item={item} />
                </View>
            ))}
          </View>

          {/*<Swiper*/}
          {/*    showsButtons={false}*/}
          {/*    height={59 * 4}*/}
          {/*    showsPagination={true}*/}
          {/*    renderPagination={renderPagination}*/}
          {/*>*/}
          {/*    {_chunk(services, 4).map((items) => {*/}
          {/*        return items.map((item, i) =>*/}
          {/*            <View style={{ backgroundColor: i % 2 == 0 ? '#f5f5f5' : 'transparent'}}>*/}
          {/*                <Service key={item.id} item={item} />*/}
          {/*            </View>);*/}
          {/*    })}*/}
          {/*</Swiper>*/}
        </Section>
      )}

      <Section
        title={t('siteDetails.sectionDirections.title')}
        backgroundColor={'#eaf4f6'}
        swoosh={swooshTeal}>
        {directions.map((item, i) => {
          if (item.content === '') {
            return;
          }
          return (
            <Body key={i} black style={{marginBottom: 12}}>
              <Body fontBold black>{`${item.label}: `}</Body> {item.content}
            </Body>
          );
        })}
      </Section>

      <Section title={t('siteDetails.sectionHelpfulLinks.title')}>
        {helpfulLinks.map((item, i) => (
          <WebLink
            label={item.label}
            key={i}
            type={WebLinkType.LINK}
            icon={WebLinkIcon.EXT_LINK}
            url={item.url}
          />
        ))}
      </Section>

      {/*<Section title={t('siteDetails.sectionBooking.title')}*/}
      {/*         backgroundColor={'#224c5a'}*/}
      {/*         swoosh={swooshTeal}*/}
      {/*         whiteTitle={true}>*/}
      {/*    <Body>{t('siteDetails.sectionBooking.text')}</Body>*/}
      {/*    <WebLink label={t('siteDetails.sectionBooking.linkLabel')}*/}
      {/*             type={WebLinkType.BUTTON_YELLOW}*/}
      {/*             icon={WebLinkIcon.EXT_LINK}*/}
      {/*             url={BOOKING_URL}*/}
      {/*             containerStyle={{marginVertical: 20}} />*/}
      {/*    <HTMLElement whiteText={true} html={t('siteDetails.sectionBooking.extra')} />*/}
      {/*</Section>*/}

      {/*<Section title={t('siteDetails.sectionSupport.title')}>*/}
      {/*    <Body black>{t('siteDetails.sectionSupport.text')}</Body>*/}
      {/*    <WebLink label={t('siteDetails.sectionSupport.shareButton')}*/}
      {/*             type={WebLinkType.BUTTON_TEAL}*/}
      {/*             icon={WebLinkIcon.SHARE}*/}
      {/*             containerStyle={{marginVertical: 20}}*/}
      {/*             url={'#'}*/}
      {/*             // @TODO: check for network to show/hide share button?*/}
      {/*             onPress={() => shareOnSocialMedia(site_name, site_description)}*/}
      {/*    />*/}
      {/*</Section>*/}

      {/* {nearBySites && nearBySites.length > 0 && (
        <View>
          <H3
            style={{
              marginBottom: 36,
              paddingHorizontal: 16,
              color: YUKON_COLORS.neutral,
            }}>
            {t('siteDetails.nearBySites')}
          </H3>
          <View style={{flex: 1, marginBottom: 30}}>
            <Swiper
              showsButtons={false}
              height={460}
              showsPagination={true}
              renderPagination={renderPagination}>
              {nearBySites.map(item => {
                const {site_name} = item;

                if (!site_name) {
                  return null;
                }
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    key={item.site_id}
                    onPress={() =>
                      navigation.push(routes.SCREEN_SITE_DETAILS, {
                        site_id: item.site_id,
                      })
                    }>
                    <SiteCard data={item} />
                  </TouchableOpacity>
                );
              })}
            </Swiper>
          </View>
        </View>
      )} */}
    </ScreenParallaxWrapper>
  );
};

SiteDetailsScreen.propTypes = {};

SiteDetailsScreen.navigationOptions = {
  headerMode: 'none',
  headerShown: false,
};

const mapStateToProps = state => ({
  filtersStore: state.filtersStore,
  locale: state.localeStore.locale,
  listingRaw: state.listingStore.listingRaw,
  isSearchVisible: state.coreStore.searchVisible,
  isHeaderVisible: state.coreStore.headerVisible,
});

const mapDispatchToProps = dispatch => ({
  dispatchHideHeader: () => dispatch(hideHeader()),
  dispatchSetFavorites: value => dispatch(setFavorites(value)),
  dispatchHideSearch: () => dispatch(hideSearch()),
  dispatchSetCurrentScreenName: value => dispatch(setCurrentScreenName(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteDetailsScreen);
