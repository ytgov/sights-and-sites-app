import React, {useState, useRef} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';

import ScreenIntroWrapper from '../../components/screenIntroWrapper';
import {Body} from '../../theme/typings';
import routes from '../../navigation/routes';
import {setOnboardingFinished} from '../../store/actions/core';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const slides = [
    {
        leadIcon: require('./images/icon-1.png'),
        title: 'Where to?',
        text: ['Explore by highway, by region or near you'],
        backgroundImage: require('./images/bg-intro-1.jpg'),
    },
    {
        leadIcon: require('./images/icon-2.png'),
        title: 'Choose a site',
        text: ['Explore over 280 Yukon sites, even when you’re offline'],
        backgroundImage: require('./images/bg-intro-2.jpg')
    },
    {
        leadIcon: require('./images/icon-3.png'),
        title: 'My sites',
        text: ['Save your favourite sites or create a wish list for future trips'],
        backgroundImage: require('./images/bg-intro-3.jpg')
    },
    {
        leadIcon: require('./images/icon-4.png'),
        title: 'Permissions',
        text: [
            'Your device may ask you to grant permissions for the app.',
            'Enable Location Services to show sites near you, and how to navigate to these sites. You can change your preferences on your device.'
        ],
        backgroundImage: require('./images/bg-intro-4.jpg')
    },
]

const IntroductionScreen = ({navigation, dispatchSetOnboardingFinished}) => {
    const [entries] = useState(slides)
    const [activeSlide, setActiveSlide] = useState(0)
    const carouselRef = useRef()

    const getLocationPermissions = async () => {
        const {status} = await Permissions.askAsync(
            Permissions.LOCATION
        );

        // 20200911 drogers: Apple will not accept the app unless it can be run without location
        //permissions enabled.
        if (status !== 'granted') {
           //error(i18n.t('notifications.permissionsRequest'));
        } else {
           dispatchSetOnboardingFinished()
            navigation.navigate(routes.STACK_BOTTOM_TAB);
        }
    }

    const _renderItem = ({item, index}, parallaxProps) => {
        return (
            <ScreenIntroWrapper backgroundImage={item.backgroundImage}
                                parallaxProps={parallaxProps}
                                title={item.title}
                                text={item.text}
                                leadIcon={item.leadIcon}
                                key={index}>
                {index === 3 &&
                    <TouchableOpacity style={{ flexDirection: 'row'}}
                        onPress={() => getLocationPermissions()}>
                        <Body fontBold>{'Let’s get started'}</Body>
                        <MaterialIcons name="chevron-right" size={24} color="white" />
                    </TouchableOpacity>}

            </ScreenIntroWrapper>
        )
    }

    const pagination = <Pagination
        carouselRef={carouselRef}
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        tappableDots={true}
        containerStyle={{
            position: 'absolute',
            bottom: 80,
            left: 0,
            right: 0,
        }}
        dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'white'
        }}
        inactiveDotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white'
        }}
        dotContainerStyle={{
            marginHorizontal: 6
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
    />


    return (
        <>
            <Carousel
                ref={carouselRef}
                data={entries}
                renderItem={_renderItem}
                sliderWidth={windowWidth}
                slideStyle={{ width: windowWidth }}
                itemWidth={windowWidth}
                hasParallaxImages={true}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {pagination}
        </>

    );
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchSetOnboardingFinished: value => dispatch(setOnboardingFinished(value)),
    };
};

export default connect(null, mapDispatchToProps)(IntroductionScreen);
