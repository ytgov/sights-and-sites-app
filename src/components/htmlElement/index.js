import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import HTML from 'react-native-render-html';
import { YUKON_COLORS } from '~theme/config';
import { YUKON_FONTS} from '~theme/typings';

const HTMLElement = (props) => {
    const {
        html,
        style,
        whiteText
    } = props;

    let styling = style || styles.baseFont;

    const contentWidth = useWindowDimensions().width;
    return (
        <HTML
            baseFontStyle={{...styling}}
            html={html}
            contentWidth={contentWidth}
            tagsStyles={{
                ...styles,
                a: {
                    ...styles.a,
                    color: whiteText ? 'white' : 'black'
                }
            }}
            // allowWhitespaceNodes={true}
        />
    )
};

const styles = StyleSheet.create({
    baseFont: {
        color: YUKON_COLORS.neutral_100,
        fontSize: 16,
        fontFamily: YUKON_FONTS.MONTSERRAT_REGULAR,
        lineHeight: 26,
    },
    a: {
        color: YUKON_COLORS.neutral,
        borderBottomColor: YUKON_COLORS.primary,
        borderBottomWidth: 5,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        textDecorationColor: YUKON_COLORS.primary,
    },
    ul: {
        paddingLeft: 0,
    },
    p: {
      marginBottom: 12,
    },
    strong: {
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    }
});

HTMLElement.propTypes = {
    html: PropTypes.string.isRequired,
    whiteText: PropTypes.bool
};

HTMLElement.defaultProps = {
    whiteText: false
}

export default HTMLElement;

