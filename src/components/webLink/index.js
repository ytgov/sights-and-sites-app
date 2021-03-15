import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';

import {Body} from '../../theme/typings';
import {YUKON_COLORS} from '../../theme/config';

export const WebLinkType = {
    LINK: 'ext-link',
    BUTTON_YELLOW: 'btn-yellow',
    BUTTON_TEAL: 'btn-teal'
}

export const WebLinkIcon = {
    EXT_LINK: require('./images/icon-ext-link.png'),
    SHARE: require('./images/icon-share.png')
}

const WebLink = ({label, url, type, icon, containerStyle, onPress}) => {

    let wrapper = {
        ...containerStyle,
        flexDirection: 'row'
    }
    let innerWrapper = styles.innerWrapper;

    if (type !== WebLinkType.LINK) {
        wrapper = {
            ...wrapper,
            ...styles.wrapperButton,
            backgroundColor: type === WebLinkType.BUTTON_TEAL ? YUKON_COLORS.primary_200 : YUKON_COLORS.primary,
        }
    } else {
        innerWrapper = {
            ...innerWrapper,
            ...styles.wrapperLink
        }
    }

    return (
        <TouchableOpacity onPress={() => onPress(url)}>
            <View style={wrapper}>
                <View style={innerWrapper}>
                    <Body fontBold
                          style={{ color: type === WebLinkType.BUTTON_TEAL ? 'white' : 'black'}}
                        >{label}</Body>
                    {icon &&
                        <Image source={icon} style={{ marginLeft: 8 }} />}
                </View>
            </View>
        </TouchableOpacity>
    );
};

WebLink.propTypes = {
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        WebLinkType.LINK,
        WebLinkType.BUTTON_YELLOW,
        WebLinkType.BUTTON_TEAL
    ]).isRequired,
    icon: PropTypes.oneOf([
        WebLinkIcon.EXT_LINK,
        WebLinkIcon.SHARE
    ]),
    containerStyle: PropTypes.object,
    onPress: PropTypes.func
}

WebLink.defaultProps = {
    icon: null,
    containerStyle: {},
    // Open weblink using default browser
    onPress: async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (!supported) {
            console.log("Can't handle url: " + url);
        } else {
            return Linking.openURL(url);
        }
    }
}

export default WebLink;

const styles = StyleSheet.create({
    wrapperLink: {
        marginBottom: 12,
        borderBottomColor: YUKON_COLORS.primary,
        borderBottomWidth: 3,
    },
    wrapperButton: {
        flexDirection: 'column',
        backgroundColor: YUKON_COLORS.primary,
        paddingVertical: 20,
        alignItems: 'center'
    },
    innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
