import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Body1} from '../../../../theme/typings';

const ListTile = (props) => {
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
        trailing = <View style={trailingStyle.wrapper}>
            <Image source={isChecked ? trailingIconActiveWithFallback : trailingIcon} />
        </View>
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

ListTile.propTypes = {
    checked: PropTypes.bool,
    label: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    leadingIcon: PropTypes.node,
    leadingIconActive: PropTypes.node,
    trailingIcon: PropTypes.node,
    trailingIconActive: PropTypes.node,
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

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 2,
    },
    labelWrapper: {
        flex: 1,
        marginHorizontal: 16
    },
    icon: {
        height: 46,
        width: 46
    }
})

const leadingStyle = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    default: {
        // height: 29,
        // width: 29,
        resizeMode: 'contain',
    },
    active: {
        position: 'absolute',
        // top: 6,
        // left: 6,
        resizeMode: 'contain'
    }
})

const trailingStyle = StyleSheet.create({

})