import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import {addListing, filterListing} from '../../store/actions/listing';

import {APP_CONFIG} from '../../config';
import i18n from '../../locale/locale';
import routes from '../../navigation/routes';
import styles from './styles';

const logoYukonRoadTrips = require('./images/yukon-roadtrip-app.png');

const LoadingScreen = (props) => {

    useEffect(() => {
        const {
            navigation,
            locale,
            hasUserSelectedLocale,
            hasUserPassedOnboarding,
            filterListingDispatch,
            addListingDispatch
        } = props;
        // TODO: remove in production
        // addListingDispatch([]);

        axios.get(APP_CONFIG.placesUrl, {
            headers: {
                'accept-language': i18n.language,
                'api-key': APP_CONFIG.apiKey
            }
        })
            .then(async res => {
                await addListingDispatch(res.data.data);
                filterListingDispatch();
                if (!hasUserPassedOnboarding || !hasUserSelectedLocale) {
                    navigation.navigate(routes.SCREEN_WELCOME);
                    return false;
                }
                await i18n.changeLanguage(locale);
                navigation.navigate(routes.STACK_BOTTOM_TAB);
            })
            .catch(err => {
                if (!hasUserPassedOnboarding || !hasUserSelectedLocale) {
                    navigation.navigate(routes.SCREEN_WELCOME);
                    return false;
                }
                i18n.changeLanguage(locale);
                navigation.navigate(routes.STACK_BOTTOM_TAB);
            })
    }, [])

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
    filterListingDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        hasUserSelectedLocale: state.coreStore.hasUserSelectedLocale,
        hasUserPassedOnboarding: state.coreStore.hasUserPassedOnboarding,
        locale: state.localeStore.locale
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterListingDispatch: value => dispatch(filterListing(value)),
        addListingDispatch: (value) => dispatch(addListing(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
