import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, ImageBackground, SafeAreaView, Text} from 'react-native';

import styles from './styles';

const ScreenWrapper = ({children, backgroundImage, backgroundColor, footer}) => {
    if (backgroundImage) {
        return (
            <View style={styles.wrapper}>
                <ImageBackground source={backgroundImage} style={styles.background}>
                    <View style={styles.overlay} />
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={styles.inner}>
                            {children}
                        </View>
                    </ScrollView>
                    {footer}
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
                    {footer}
                </View>
            </SafeAreaView>
        )
    }
};

ScreenWrapper.propTypes = {
    backgroundImage: PropTypes.node,
    backgroundColor: PropTypes.string,
    footer: PropTypes.node
}

ScreenWrapper.defaultProps = {
    backgroundImage: null,
    backgroundColor: 'white',
    footer: null
}

export default ScreenWrapper;
