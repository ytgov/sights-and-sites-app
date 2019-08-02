import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import MySitesButtonStyles from './my-sites-button.styles';

const mySitesNotActiveIcon = require('../../../../../assets/stacks/listing/my-sites-not-active-icon.png');
const mySitesActiveIcon = require('../../../../../assets/stacks/listing/my-sites-active-icon.png');

const MySitesButton = props => {
  const { id, isSiteInMySites, toggleMySitesStateDispatch, showAddToMySitesNotification } = props;
  return (
    <TouchableOpacity onPress={() => {
      if (!isSiteInMySites) {
        showAddToMySitesNotification();
      }
      toggleMySitesStateDispatch(id)
    }
    }
      style={MySitesButtonStyles.mySitesButton}
    >
      {isSiteInMySites && (<Image style={MySitesButtonStyles.mySitesIcon} source={mySitesActiveIcon} resizeMode='contain' />)}
      {!isSiteInMySites && (<Image style={MySitesButtonStyles.mySitesIcon} source={mySitesNotActiveIcon} resizeMode='contain' />)}
    </TouchableOpacity >
  )
}

export default MySitesButton;