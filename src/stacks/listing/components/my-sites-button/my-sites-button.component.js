import React from 'react';
import PropTypes from 'prop-types';
import {Image, TouchableOpacity} from 'react-native';
import MySitesButtonStyles from './my-sites-button.styles';

const mySitesNotActiveIcon = require('../../../../../assets/stacks/where-to/empty-heart.png');
const mySitesActiveIcon = require('../../../../../assets/stacks/where-to/heart.png');

const MySitesButton = props => {
    const {id, isSiteInMySites, toggleMySitesStateDispatch, showAddToMySitesNotification, filterListingDispatch} = props;
    return (
        <TouchableOpacity onPress={() => {
            if (!isSiteInMySites) {
                showAddToMySitesNotification();
            }
            toggleMySitesStateDispatch(id);
            filterListingDispatch();
        }
        }
                          style={MySitesButtonStyles.mySitesButton}
        >
            {isSiteInMySites && (
                <Image style={MySitesButtonStyles.mySitesIcon} source={mySitesActiveIcon} resizeMode='contain'/>)}
            {!isSiteInMySites && (
                <Image style={MySitesButtonStyles.mySitesIcon} source={mySitesNotActiveIcon} resizeMode='contain'/>)}
        </TouchableOpacity>
    )
}

MySitesButton.propTypes = {
    id: PropTypes.number.isRequired,
    isSiteInMySites: PropTypes.bool,
    toggleMySitesStateDispatch: PropTypes.func.isRequired,
    showAddToMySitesNotification: PropTypes.func.isRequired,
    filterListingDispatch: PropTypes.func.isRequired
}

MySitesButton.defaultProps = {
    isSiteInMySites: false
}

export default MySitesButton;
