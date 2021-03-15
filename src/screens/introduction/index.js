import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ScreenIntroWrapper from '../../components/screenIntroWrapper';
import {Body} from '../../theme/typings';
import routes from '../../navigation/routes';

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

const IntroductionScreen = ({navigation}) => {

    const _renderItem = ({item, index}, parallaxProps) => {
        return (
            <ScreenIntroWrapper backgroundImage={item.backgroundImage}
                                parallaxProps={parallaxProps}
                                title={item.title}
                                text={item.text}
                                leadIcon={item.leadIcon}
                                key={index}>
                {index === 3 &&
                    <TouchableOpacity onPress={() => navigation.navigate(routes.STACK_BOTTOM_TAB)}>
                        <Body fontBold>{'Let’s get started'}</Body>
                    </TouchableOpacity>}

            </ScreenIntroWrapper>
        )
    }
    return (
        <Carousel
            data={slides}
            renderItem={_renderItem}
            sliderWidth={windowWidth}
            itemWidth={windowWidth}
            hasParallaxImages={true}
        />
    );
};

export default IntroductionScreen;
