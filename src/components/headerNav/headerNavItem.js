import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import styles from './headerNavItem.styles';
import {YUKON_COLORS} from '../../theme/config';
import {connect} from 'react-redux';
import Badge from './badge';

const HeaderNavItem = ({icon, label, isActive, onPress, badge}) => {
    const bgColor = isActive ? YUKON_COLORS.primary_600 : YUKON_COLORS.primary_200
    return (
        <TouchableHighlight
            underlayColor={YUKON_COLORS.primary_600}
            style={[styles.wrapper, { backgroundColor: bgColor }]} onPress={onPress}>
            <>
                <Image source={icon} />
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}>{label}</Text>
                    {badge !== 0 && <Badge label={badge} style={{ marginLeft: 4}} />}
                </View>
            </>
        </TouchableHighlight>
    );
};

HeaderNavItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    badge: PropTypes.node,
    isActive: PropTypes.bool,
    onPress: PropTypes.func.isRequired
}

HeaderNavItem.defaultProps = {
    isActive: false,
    badge: 0
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale
    };
};

export default connect(mapStateToProps)(HeaderNavItem);


