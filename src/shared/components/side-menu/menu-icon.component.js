import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Image} from 'react-native';

export const SideMenuIconType = {
    APP_FEEDBACK            : 'app-feedback',
    APP_INFORMATION         : 'app-information',
    APP_INSTRUCTIONS        : 'app-instructions',
    CURRENT_CONDITIONS      : 'current-conditions',
    FIRST_NATIONS           : 'first-nations',
    WILDERNESS_TRAVEL_TIPS  : 'wilderness-travel-tips',
}

const getIcon = (type) => {
    switch (type) {
        case SideMenuIconType.APP_FEEDBACK:
            return require('./images/app-feedback.png');
        case SideMenuIconType.APP_INFORMATION:
            return require('./images/app-information.png');
        case SideMenuIconType.APP_INSTRUCTIONS:
            return require('./images/app-instructions.png');
        case SideMenuIconType.CURRENT_CONDITIONS:
            return require('./images/current-conditions.png');
        case SideMenuIconType.FIRST_NATIONS:
            return require('./images/first-nations.png');
        case SideMenuIconType.WILDERNESS_TRAVEL_TIPS:
            return require('./images/wilderness-travel-tips.png');
        default:
            return require('./images/app-information.png');
    }
}

const SideMenuIcon = ({type}) => {
    return (
        <Image
            source={getIcon(type)}
            style={{ height: 46, width: 46, resizeMode: 'contain' }} />
    );
}

SideMenuIcon.propTypes = {
    type: PropTypes.oneOf(_.values(SideMenuIconType)).isRequired,
}

export default SideMenuIcon;