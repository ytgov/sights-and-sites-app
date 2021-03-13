import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import {H1, Body} from '../../theme/typings';

const windowHeight = Dimensions.get('window').height;

const ScreenIntroWrapper = ({children, backgroundImage, title, text, leadIcon, parallaxProps}) => {
    return (
        <View style={{ flex: 1}}>
            <ParallaxImage source={backgroundImage}
                          containerStyle={styles.imageContainer}
                          style={styles.image}
                          parallaxFactor={0.7}
                           {...parallaxProps} />
            <SafeAreaView style={{ position: 'absolute', top: 0, bottom: 0}}>
                <View style={{ paddingHorizontal: 50, paddingTop: windowHeight * 0.2, flex: 1, alignItems: 'center', }}>
                    <Image source={leadIcon} style={{marginBottom: 16}} />
                    <H1 style={{marginBottom: 16}}>{title}</H1>
                    {text.map((item, i) =>
                        <Body fontMedium
                              key={i}
                              style={{marginBottom: 32, textAlign: 'center'}}>
                            {item}
                        </Body>)}

                </View>

                {children &&
                    <View style={{ padding: 32, alignItems: 'center'}}>
                        {children}
                    </View>}

            </SafeAreaView>

        </View>
    );
};

ScreenIntroWrapper.propTypes = {
    backgroundImage: PropTypes.node.isRequired,
    leadIcon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.arrayOf(PropTypes.string),
    parallaxProps: PropTypes.object
}

export default ScreenIntroWrapper;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 0,
    },
    image: {
        //...StyleSheet.absoluteFillObject,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        resizeMode: 'contain',
        padding: 10,
        backgroundColor: 'red'

    },
})
