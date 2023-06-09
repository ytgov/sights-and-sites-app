import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActivityIndicator, ImageBackground} from 'react-native';
import routes from '../../../../navigation/routes';
import {Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {addGMListing, addListing, filterListing} from '../../../../store/actions/listing';
import axios from 'axios';
import {APP_CONFIG} from '../../../../config';

const background = require('../../../../../assets/common/common-background.jpg');

class LoadingScreen extends React.Component {
    state = {}

    componentDidMount() {
        const {
            navigation,
            locale,
            hasUserSelectedLocale,
            hasUserPassedOnboarding,
            filterListingDispatch,
            addListingDispatch
        } = this.props;
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
                    navigation.navigate(routes.SCREEN_APP_INSTRUCTIONS_1);
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
    }

    render() {
        return (
            <ImageBackground style={[Helpers.alignItemsCenter, Helpers.fullHeight, Helpers.justifyContentCenter]}
                             source={background}>
                <ActivityIndicator style={{}} size="large" color="#ffffff"/>
            </ImageBackground>
        )
    }
}

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
