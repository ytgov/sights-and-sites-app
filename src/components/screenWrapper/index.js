import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, ImageBackground, StyleSheet} from 'react-native';

import styles from './styles';

const ScreenWrapper = ({children, backgroundImage, backgroundColor}) => {
    if (backgroundImage) {
        return (
            <View style={styles.wrapper}>
                <ImageBackground source={backgroundImage} style={styles.background}>
                    <View style={styles.overlay} />
                    <ScrollView>
                        <View style={styles.inner}>
                            {children}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    } else  {
        return (
            <View style={[styles.wrapper, {backgroundColor}]}>
                <ScrollView>
                    <View style={styles.inner}>
                        {children}
                    </View>
                </ScrollView>
            </View>
        )
    }


};

ScreenWrapper.propTypes = {
    backgroundImage: PropTypes.node,
    backgroundColor: PropTypes.string
}

ScreenWrapper.defaultProps = {
    backgroundImage: null,
    backgroundColor: 'red'
}

export default ScreenWrapper;
