import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActivityIndicator, ImageBackground} from 'react-native';
import {Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {addListing, filterListing} from '../../../../store/actions/listing';

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
        addListingDispatch([]);

        filterListingDispatch();
        setTimeout(() => {
            if (!hasUserPassedOnboarding || !hasUserSelectedLocale) {
                navigation.navigate('Welcome');
                return false;
            }
            i18n.changeLanguage(locale);
            navigation.navigate('Main');
            return true;
        }, 1000)
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
