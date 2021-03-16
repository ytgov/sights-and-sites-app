import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import {YUKON_FONTS} from '../../theme/typings';

const Badge = (props) => {
    const {label} = props

    return (
        <View style={{...styles.wrapper, ...props.style}}>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

Badge.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Badge;

const styles = StyleSheet.create({
    wrapper: {
        height: 14,
        width: 14,
        backgroundColor: 'white',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        textAlign: 'center',
        fontSize: 9,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    }
})
