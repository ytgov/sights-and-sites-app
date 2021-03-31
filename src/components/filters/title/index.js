import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import {H2} from '~theme/typings';
import styles from './styles';

const arrow = require('./images/arrow-back.png');

const Title = ({navigation, title, hasArrow}) => {
    return <View style={styles.wrapper}>
        {hasArrow &&
            <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.arrowWrapper}
                    onPress={() => navigation.pop()}>
                <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>}
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
