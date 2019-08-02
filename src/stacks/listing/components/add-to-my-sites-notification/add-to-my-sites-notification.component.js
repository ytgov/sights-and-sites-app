import React from 'react';
import { View, Image } from 'react-native';
import AddToMySitesNotificationStyles from './add-to-my-sites-notification.styles';
import { Body1 } from '../../../../theme/theme';

const heartIcon = require('../../../../../assets/stacks/listing/my-sites-active-icon.png');

const AddToMySitesNotification = props => {
  const { visible } = props;
  return (
    visible ?
      (<View style={AddToMySitesNotificationStyles.notificationBox}>
        <Image source={heartIcon} resizeMode='contain' style={AddToMySitesNotificationStyles.icon} />
        <Body1 style={AddToMySitesNotificationStyles.text}>Added! To see all your sites, tap the heart below</Body1>
      </View>) : null
  )
}

export default AddToMySitesNotification;