import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import HTML from 'react-native-render-html';
import { YUKON_COLORS} from '../../theme/config';
import { YUKON_FONTS} from '../../theme/typings';

const HTMLElement = (props) => {
    const {html, style} = props;

    const styling = style || styles.baseFont;

    let renderableHtml = html;
    if (html.includes`\n\t`) {
        renderableHtml = renderableHtml.replace(/\n\t\n\t/g, `<br/><br/>`)
    }

    const contentWidth = useWindowDimensions().width;

    return (
        <HTML
            baseFontStyle={styling}
            html={renderableHtml}
            contentWidth={contentWidth}
            tagsStyles={styles}
            allowWhitespaceNodes={true}
        />

    )
};

const styles = StyleSheet.create({
    baseFont: {
        fontSize: 16,
        fontFamily: YUKON_FONTS.MONTSERRAT_REGULAR,
    },
    a: {
        color: YUKON_COLORS.neutral,
        borderBottomColor: YUKON_COLORS.primary,
        borderBottomWidth: 5,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
        textDecorationColor: YUKON_COLORS.primary,
    },
    strong: {
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD
    }
});

HTMLElement.propTypes = {
    html: PropTypes.string.isRequired
};

export default HTMLElement;

