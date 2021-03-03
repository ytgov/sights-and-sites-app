import React from 'react';
import PropTypes from 'prop-types';
import {SimpleLineIcons} from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

const NavigationBackButton = ({dark, navigation}) => {
    const arrowColor = dark ? '#929496' : '#FFFFFF'

    return (
        <SimpleLineIcons.Button name="arrow-left"
                                size={18}
                                color={arrowColor}
                                iconStyle={{marginRight: 0}}
                                backgroundColor={'transparent'}
                                underlayColor={'transparent'}
                                onPress={() => navigation.goBack(null)}
        />
    )
}

NavigationBackButton.propTypes = {
    dark: PropTypes.bool
}

NavigationBackButton.defaultProps = {
    dark: false
}

export default withNavigation(NavigationBackButton);
