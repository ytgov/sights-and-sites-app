import React from 'react';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Dimensions, Image, SafeAreaView, StyleSheet, View, Text, ImageBackground} from 'react-native';
import {H1} from '../../theme/typings';

import BackButton from './backButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const auroraOrange = require('./images/aurora-orange.png');

const ScreenParallaxWrapper = (props) => {

    const { backgroundImage, leadIcon, title, children } = props

    return (
        <ParallaxScrollView
            backgroundColor="blue"
            contentBackgroundColor="white"
            parallaxHeaderHeight={windowHeight}
            renderBackground={() => (
                <Image style={{ width: windowWidth, height: windowHeight, paddingBottom: 100}} source={backgroundImage} />
            )}
            renderForeground={() => (

                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <SafeAreaView>
                        <View style={{ margin: 18 }}>
                            <BackButton />
                        </View>
                    </SafeAreaView>

                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 40,
                    }}>
                        {leadIcon && <Image source={leadIcon} />}
                        <H1 style={{ textAlign: 'center', marginTop: 16}}>{title}</H1>
                    </View>
                </View>

            )}>
            <View>
                <ImageBackground source={auroraOrange}
                                 resizeMode={'cover'}
                                 style={{
                                     position: 'absolute',
                                     bottom: '100%',
                                     width: windowWidth,
                                     borderWidth: 0,
                                     height: 100 }}  />
                <View style={styles.bodyWrapper}>
                    {children}
                </View>
            </View>
        </ParallaxScrollView>
    );
};

ScreenParallaxWrapper.propTypes = {
    backgroundImage: PropTypes.node.isRequired,
    leadIcon: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default ScreenParallaxWrapper;

const styles = StyleSheet.create({
    bodyWrapper: {
        padding: 18
    }
})
