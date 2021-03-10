import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, TouchableWithoutFeedback} from 'react-native';
import {Body1} from '../../../theme/typings';

import {styles, leadingStyle} from './styles'

const Index = (props) => {
    const {
        label,
        onClick,
        checked,
        leadingIcon,
        leadingIconActive,
        trailingIcon,
        trailingIconActive
    } = props

    const [isChecked, setIsCheck] = useState(checked);

    const leadingIconActiveWithFallback = leadingIconActive ? leadingIconActive : leadingIcon;
    const trailingIconActiveWithFallback = trailingIconActive ? trailingIconActive : trailingIcon;

    let leading = null;
    if (leadingIcon) {
        leading = <View style={leadingStyle.wrapper}>
            <Image source={isChecked ? leadingIconActiveWithFallback : leadingIcon} />
        </View>
    }

    let trailing = null;
    if (trailingIcon) {
        trailing = <Image source={isChecked ? trailingIconActiveWithFallback : trailingIcon} />
    }

    // Handle onPress event.
    const _onPress = () => {
        setIsCheck(!isChecked)
        onClick()
    }

    return (
        <TouchableWithoutFeedback onPress={_onPress}>
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

Index.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    leadingIcon: PropTypes.node,
    leadingIconActive: PropTypes.node,
    trailingIcon: PropTypes.node,
    trailingIconActive: PropTypes.node,
    onClick: PropTypes.func.isRequired,
}

Index.defaultProps = {
    checked: false,
    icon: null,
    leadingIcon: null,
    leadingIconActive: null,
    trailingIcon: null,
    trailingIconActive: null,
}

export default Index;

