import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {H3} from '../../theme/typings';

import styles from './section.styles';
import {YUKON_COLORS} from '../../theme/config';

const Section = (props) => {
    const {title, children, backgroundColor, swoosh, whiteTitle} = props

    let wrapperStyles = styles.section
    if (backgroundColor !== 'white') {
        wrapperStyles = {
            ...wrapperStyles,
            backgroundColor: backgroundColor,
            paddingVertical: 50
        }
    }

    if (swoosh) {
        wrapperStyles = {
            ...wrapperStyles,
            paddingBottom: 100,
            marginBottom: 0
        }
    }

    return (
        <>
            <View style={wrapperStyles}>
                {
                    title
                        ? <H3 style={{
                            marginBottom: 16,
                            color: whiteTitle ? 'white' : YUKON_COLORS.neutral
                        }}>{title}</H3>
                        : null
                }
                {children}
            </View>

            {swoosh &&
                <Image style={{ position: 'relative', marginTop: -50, marginBottom: 50}}
                       source={swoosh} />}
        </>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    whiteTitle: PropTypes.bool,
    backgroundColor: PropTypes.string,
    swoosh: PropTypes.node
}

Section.defaultProps = {
    title: "",
    whiteTitle: false,
    backgroundColor: 'white',
    swoosh: null,
}

export default Section;
