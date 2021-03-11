import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {Body1} from '../../../theme/typings';
import styles from './styles';

const arrow = require('./images/arrow.png');

const LabelArrow = ({label}) => {
    return (
        <View style={styles.wrapper}>
            <Body1>{label}</Body1>
            <Image source={arrow} style={styles.arrow} />
        </View>
    );
};

LabelArrow.propTypes = {
    label: PropTypes.string.isRequired
}

export default LabelArrow;

