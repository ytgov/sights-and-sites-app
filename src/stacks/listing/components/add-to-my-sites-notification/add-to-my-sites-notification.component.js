import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';
import AddToMySitesNotificationStyles from './add-to-my-sites-notification.styles';
import i18n from '../../../../locale/locale';
import {Body1} from '../../../../theme/theme';

const heartIcon = require('../../../../../assets/stacks/listing/my-sites-active-icon.png');

const AddToMySitesNotification = props => {
    const {visible} = props;
    return (
        visible ?
            (<View style={AddToMySitesNotificationStyles.notificationBox}>
                <Image source={heartIcon} resizeMode='contain' style={AddToMySitesNotificationStyles.icon}/>
                <Body1 style={AddToMySitesNotificationStyles.text}>{i18n.t('notifications.onAddToMySites')}</Body1>
            </View>) : null
    )
}

AddToMySitesNotification.propTypes = {
    visible: PropTypes.bool
}

AddToMySitesNotification.defaultProps = {
    visible: false
}

export default AddToMySitesNotification;
