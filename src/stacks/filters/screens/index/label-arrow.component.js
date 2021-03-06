import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet} from 'react-native';
import {Body1} from '../../../../theme/typings';

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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrow: {
        marginLeft: 12
    }
})