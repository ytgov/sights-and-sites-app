import React from 'react';
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Dimensions, SafeAreaView, Image, View, ImageBackground, ScrollView} from 'react-native';
import {Image as ImageCache} from 'react-native-expo-image-cache';

import {H1} from '~theme/typings';
import {YUKON_COLORS} from '~theme/config';
import BackButton from './backButton';
import BookmarkButton from './bookmarkButton';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const auroraOrange = require('./images/aurora-orange.png');
const overlay = require('./images/overlay.png');

const ScreenParallaxWrapper = (props) => {

    const {
        backgroundImage,
        leadIcon,
        title,
        children,
        swoosh,
        leadIconStyle,
        bookmarkButton,
        bookmarkActive,
        bookmarkOnClick,
        search
    } = props

    const headerHeight = windowHeight;

    return (
        <ScrollView scrollIndicatorInsets={{ right: 1 }} >
            <ParallaxScrollView
                backgroundColor={YUKON_COLORS.primary_200}
                contentBackgroundColor="white"
                contentContainerStyle={{flex: 1}}
                parallaxHeaderHeight={headerHeight}
                outputScaleValue={1.2} // max zoom level
                renderFixedHeader={() => {
                    return (search && <View style={{width: windowWidth}}>
                        {search}
                    </View>)
                }}
                stickyHeaderHeight={search ? 120 : 0}
                renderBackground={() => {
                    return <View>
                        {
                            typeof backgroundImage === 'string'
                            ? <ImageCache
                                tint={'light'}
                                transitionDuration={300}
                                resizeMode='cover'
                                // fallback={fallback}
                                uri={backgroundImage}
                                style={{
                                    width: windowWidth,
                                    height: headerHeight,
                                    paddingBottom: 100
                                }} />
                            : <Image style={{
                                width: windowWidth,
                                height: headerHeight,
                                paddingBottom: 100
                            }} source={backgroundImage} />
                        }
                        <Image source={overlay} style={{
                            position: 'absolute',
                            bottom: 0, left: 0, width: windowWidth,
                            resizeMode: 'cover',
                        }}/>
                    </View>
                }}
                renderForeground={() => (
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <SafeAreaView>
                            <View style={{ margin: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <BackButton />
                                {
                                    bookmarkButton
                                        ? <BookmarkButton onClick={bookmarkOnClick} active={bookmarkActive} />
                                        : null
                                }
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
        </ScrollView>
    );
};

ScreenParallaxWrapper.propTypes = {
    backgroundImage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    leadIcon: PropTypes.node,
    leadIconStyle: PropTypes.object,
    title: PropTypes.string.isRequired,
    swoosh: PropTypes.node,
    bookmarkButton: PropTypes.bool,
    bookmarkActive: PropTypes.bool,
    bookmarkOnClick: PropTypes.func,
    search: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
}

ScreenParallaxWrapper.defaultProps = {
    swoosh: auroraOrange,
    bookmarkButton: true,
    bookmarkActive: false,
    bookmarkOnClick: () => {},
    search: null,
}

export default ScreenParallaxWrapper;

