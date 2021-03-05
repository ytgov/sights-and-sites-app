import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {withNavigation} from 'react-navigation';

import {H2} from '../../../../theme/typings';
import styles from './title.styles';

const arrow = require('./images/arrow-back.png');

const Title = ({navigation, title, hasArrow}) => {
    return <View style={styles.wrapper}>
        {hasArrow && <TouchableWithoutFeedback onPress={() => navigation.pop()}>
            <Image source={arrow} style={styles.arrow} />
        </TouchableWithoutFeedback>}
        <H2>{title}</H2>
    </View>
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    hasArrow: PropTypes.bool
}

Title.defaultProps = {
    hasArrow: false
}

export default withNavigation(Title);