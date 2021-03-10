import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text, StyleSheet} from 'react-native';
import {YUKON_FONTS} from '../theme/typings';
import {YUKON_COLORS} from '../theme/config';

const BottomTabItem = ({icon, label, bigIcon}) => {
    let iconComponent = <Image source={icon} />
    let wrapperStyles = styles.wrapper

    if (bigIcon) {
        iconComponent = <View style={styles.bigIconWrapper}>
            <Image source={icon} style={styles.bigIcon} />
        </View>

        wrapperStyles = {
            ...wrapperStyles,
            width: 150
        }
    }

    return (
        <View style={wrapperStyles}>
            {iconComponent}
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};

BottomTabItem.propTypes = {
    icon: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    bigIcon: PropTypes.bool
}

BottomTabItem.defaultProps = {
    bigIcon: false
}

export default BottomTabItem;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 16,
        height: 44,
    },
    bigIconWrapper: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: YUKON_COLORS.primary_200,
        marginBottom: 12,
        borderRadius: 32,
        height: 60,
        width: 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigIcon: {
        resizeMode: 'contain'
    },
    text: {
        color: 'white',
        marginTop: 4,
        fontSize: 12,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    }
})
