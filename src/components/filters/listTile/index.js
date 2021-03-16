import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Body1} from '../../../theme/typings';

import {styles, leadingStyle} from './styles'

const ListTile = (props) => {
    const {
        label,
        onClick,
        checked,
        leadingIcon,
        leadingIconActive,
        trailingIcon,
        trailingIconActive,
        trailingIconStyle
    } = props

    const leadingIconActiveWithFallback = leadingIconActive ? leadingIconActive : leadingIcon;
    const trailingIconActiveWithFallback = trailingIconActive ? trailingIconActive : trailingIcon;

    let leading = null;
    if (leadingIcon) {
        leading = <View style={leadingStyle.wrapper}>
            <Image source={checked ? leadingIconActiveWithFallback : leadingIcon} />
        </View>
    }

    let trailing = null;

    if (trailingIcon) {

        // if trailingIcon is a referenced image (represented as number)
        if (typeof trailingIcon === 'number') {
            trailing = <Image style={trailingIconStyle}
                              source={checked ? trailingIconActiveWithFallback : trailingIcon} />
        }
        // else trailingIcon is a component
        else {
            trailing = trailingIcon
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.wrapper}>
                {leading}
                <View style={styles.labelWrapper}>
                    {typeof label === 'string'
                        ? <Body1>{label}</Body1>
                        : label}

                </View>
                {trailing}
            </View>
        </TouchableWithoutFeedback>
    );
};

ListTile.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    leadingIcon: PropTypes.node,
    leadingIconActive: PropTypes.node,
    trailingIcon: PropTypes.node,
    trailingIconActive: PropTypes.node,
    trailingIconStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number
    ]),
    onClick: PropTypes.func.isRequired,
}

ListTile.defaultProps = {
    checked: false,
    icon: null,
    leadingIcon: null,
    leadingIconActive: null,
    trailingIcon: null,
    trailingIconActive: null,
}

export default ListTile;

