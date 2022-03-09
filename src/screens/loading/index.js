import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {
  addLocalizedListing,
  filterListing,
  setListing,
} from '~store/actions/listing';

import {APP_CONFIG} from '~app/config';
import i18n from '../../locale/locale';
import routes from '~navigation/routes';
import styles from './styles';

const logoYukonRoadTrips = require('./images/yukon-roadtrip-app.png');

const LoadingScreen = props => {
  useEffect(() => {
    const {
      navigation,
      locale,
      hasUserSelectedLocale,
      hasUserPassedOnboarding,
      listingLocalized,
      dispatchFilterListing,
      dispatchSetListing,
      dispatchAddLocalizedListing,
    } = props;
    // TODO: remove in production
    // addListingDispatch([]);

    const fetchData = async (langCode = 'en') => {
      const response = await axios.get(APP_CONFIG.placesUrl, {
        headers: {
          'accept-language': langCode,
          'api-key': APP_CONFIG.apiKey,
        },
      });
      return response.data.data;
    };

    const fetchLocalizedData = async () => {
      const enList = await fetchData('en');
      const frList = await fetchData('fr');

      await dispatchAddLocalizedListing(enList, 'en');
      await dispatchAddLocalizedListing(frList, 'fr');
    };

    fetchLocalizedData().then(() => {
      const activeListing = listingLocalized[locale];
      dispatchSetListing(activeListing);
      dispatchFilterListing();
      if (!hasUserPassedOnboarding || !hasUserSelectedLocale) {
        navigation.navigate(routes.SCREEN_WELCOME);
        return false;
      }
      i18n.changeLanguage(locale).catch(err => console.log(err));

      navigation.navigate(routes.STACK_BOTTOM_TAB);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Image source={logoYukonRoadTrips} />
    </View>
  );
};

LoadingScreen.propTypes = {
  hasUserSelectedLocale: PropTypes.bool.isRequired,
  hasUserPassedOnboarding: PropTypes.bool.isRequired,
  locale: PropTypes.string.isRequired,
  dispatchFilterListing: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    hasUserSelectedLocale: state.coreStore.hasUserSelectedLocale,
    hasUserPassedOnboarding: state.coreStore.hasUserPassedOnboarding,
    locale: state.localeStore.locale,
    listingLocalized: state.listingStore.listingLocalized,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchFilterListing: () => dispatch(filterListing()),
    dispatchSetListing: sites => dispatch(setListing(sites)),
    dispatchAddLocalizedListing: (list, langCode) =>
      dispatch(addLocalizedListing(list, langCode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
