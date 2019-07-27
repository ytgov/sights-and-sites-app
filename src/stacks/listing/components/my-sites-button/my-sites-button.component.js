import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import MySitesButtonStyles from './my-sites-button.styles';

const mySitesNotActiveIcon = require('../../../../../assets/stacks/listing/my-sites-not-active-icon.png');

const MySitesButton = props => {
  return (
    <TouchableOpacity onPress={() => alert('Add to My Sites')}>
      <Image style={MySitesButtonStyles.mySitesIcon} source={mySitesNotActiveIcon} resizeMode='contain' />
    </TouchableOpacity>
  )
}

export default MySitesButton;