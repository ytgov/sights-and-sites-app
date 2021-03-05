import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {H2} from '../../../../theme/typings';
import styles from './title.styles';

const arrow = require('./images/arrow-back.png');

const Title = ({title, hasArrow}) => {
    return (
        <View style={styles.wrapper}>
            {hasArrow &&
                <Image source={arrow} style={styles.arrow} />}
            <H2>{title}</H2>
        </View>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    hasArrow: PropTypes.bool
}

Title.defaultProps = {
    hasArrow: false
}

export default Title;