import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import styles from './headerNavItem.styles';
import {YUKON_COLORS} from '../../theme/config';
import {setLocale} from '../../store/actions/locale';
import {setSelectLocaleAction} from '../../store/actions/core';
import {connect} from 'react-redux';

const HeaderNavItem = ({icon, label, isActive, onPress, locale}) => {
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

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale
    };
};

export default connect(mapStateToProps)(HeaderNavItem);


