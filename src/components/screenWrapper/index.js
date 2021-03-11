import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, ImageBackground, SafeAreaView} from 'react-native';

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
            <SafeAreaView style={{ flex: 1 }}>
                <View style={[styles.wrapper, {backgroundColor}]}>
                    <ScrollView>
                        <View style={styles.inner}>
                            {children}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
};

ScreenWrapper.propTypes = {
    backgroundImage: PropTypes.node,
    backgroundColor: PropTypes.string
}

ScreenWrapper.defaultProps = {
    backgroundImage: null,
    backgroundColor: 'white'
}

export default ScreenWrapper;
