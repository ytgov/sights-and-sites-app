import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import styles from './headerNavItem.styles';
import {YUKON_COLORS} from '../../theme/config';

const HeaderNavItem = ({icon, label, isActive, onPress,}) => {
    const bgColor = isActive ? YUKON_COLORS.primary_600 : YUKON_COLORS.primary_200
    return (
        <TouchableHighlight
            underlayColor={YUKON_COLORS.primary_600}
            style={[styles.wrapper, { backgroundColor: bgColor }]} onPress={onPress}>
            <>
                <Image source={icon} />
                <Text style={styles.label}>{label}</Text>
            </>
        </TouchableHighlight>
    );
};

HeaderNavItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    onPress: PropTypes.func.isRequired
}

HeaderNavItem.defaultProps = {
    isActive: false
}

export default HeaderNavItem;


