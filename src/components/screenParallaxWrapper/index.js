import React from 'react';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Dimensions, Image, SafeAreaView, StyleSheet, View, Text, ImageBackground} from 'react-native';
import {H1} from '../../theme/typings';

import BackButton from './backButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const auroraOrange = require('./images/aurora-orange.png');
const shadow = require('./images/shadow.png');

const ScreenParallaxWrapper = (props) => {

    const { backgroundImage, leadIcon, title, children, swoosh, leadIconStyle } = props
    const headerHeight = windowHeight - 100

    return (
        <ParallaxScrollView
            backgroundColor="blue"
            contentBackgroundColor="white"
            parallaxHeaderHeight={headerHeight}
            renderBackground={() => (
                <Image style={{ width: windowWidth, height: headerHeight, paddingBottom: 100}} source={backgroundImage} />
            )}
            renderForeground={() => (

                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <Image source={shadow} style={{
                        position: 'absolute',
                        bottom: 0, left: 0, width: windowWidth,
                        resizeMode: 'cover',
                    }}/>
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
                        {leadIcon &&
                            <Image source={leadIcon}
                                    style={leadIconStyle}
                                    resizeMode={'contain'} />}
                        <H1 style={{ textAlign: 'center', marginTop: 16}}>{title}</H1>
                    </View>
                </View>
            )}>
            <View>
                <ImageBackground source={swoosh}
                                 resizeMode={'cover'}
                                 style={{
                                     position: 'absolute',
                                     bottom: '100%',
                                     width: windowWidth,
                                     borderWidth: 0,
                                     height: 100 }}  />
                <View style={{ marginTop: 16, marginBottom: 16 }}>
                    {children}
                </View>
            </View>
        </ParallaxScrollView>
    );
};

ScreenParallaxWrapper.propTypes = {
    backgroundImage: PropTypes.node.isRequired,
    leadIcon: PropTypes.node,
    leadIconStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    swoosh: PropTypes.node
}

ScreenParallaxWrapper.defaultProps = {
    swoosh: auroraOrange
}

export default ScreenParallaxWrapper;

