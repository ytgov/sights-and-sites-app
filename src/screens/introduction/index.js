import React, {useState, useRef} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import {useTranslation} from 'react-i18next';

import ScreenIntroWrapper from '~components/screenIntroWrapper';
import {Body} from '~theme/typings';
import routes from '~navigation/routes';
import {setOnboardingFinished} from '~store/actions/core';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const IntroductionScreen = ({navigation, dispatchSetOnboardingFinished}) => {
    const {t} = useTranslation()
    const slides = [
        {
            leadIcon: require('./images/icon-1.png'),
            title: t('intro.one.title'),
            text: [
                t('intro.one.text')
            ],
            backgroundImage: require('./images/bg-intro-1.jpg'),
        },
        {
            leadIcon: require('./images/icon-2.png'),
            title: t('intro.two.title'),
            text: [
                t('intro.two.text')
            ],
            backgroundImage: require('./images/bg-intro-2.jpg')
        },
        {
            leadIcon: require('./images/icon-3.png'),
            title: t('intro.three.title'),
            text: [
                t('intro.three.text')
            ],
            backgroundImage: require('./images/bg-intro-3.jpg')
        },
        {
            leadIcon: require('./images/icon-4.png'),
            title: t('intro.four.title'),
            text: [
                t('intro.four.text_1'),
                t('intro.four.text_2'),
            ],
            backgroundImage: require('./images/bg-intro-4.jpg')
        },
    ]

    const [entries] = useState(slides)
    const [activeSlide, setActiveSlide] = useState(0)
    const carouselRef = useRef()

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
                        onPress={() => {
                            dispatchSetOnboardingFinished();
                            navigation.navigate(routes.STACK_BOTTOM_TAB);
                        }}>
                        <Body fontBold>{t('intro.start')}</Body>
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
