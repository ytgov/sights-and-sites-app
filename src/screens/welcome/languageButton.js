import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import styles from './languageButton.styles';

const LanguageButton = ({code, label}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.langCodeWrapper}>
                <Text style={styles.langCode}>{code}</Text>
            </View>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

LanguageButton.propTypes = {
    code: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default LanguageButton;
