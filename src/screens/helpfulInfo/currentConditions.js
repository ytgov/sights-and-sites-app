import React from 'react';
import {View, Text, Image, Dimensions, SafeAreaView} from 'react-native';

import {Body1, H2} from '../../theme/typings';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
import CurrentConditionStyles from '../../stacks/more/screens/current-conditions/current-conditions.styles';

const bgCurrentConditions = require('./images/bg-current-conditions.png');
const iconCurrentConditions = require('./images/icon-current-conditions.png');


const CurrentConditionsScreen = () => {
    return (
        <ScreenParallaxWrapper backgroundImage={bgCurrentConditions}
                               leadIcon={iconCurrentConditions}
                               title={'Current Conditions'}>
            <>
                <H2 black>Campground closures and warning</H2>
                <Body1 regular black>
                    Information on Government of Yukon’s campgrounds, including campground maps,
                    closures and public warnings, visit.
                </Body1>
                <View style={CurrentConditionStyles.separator}/>

            </>

        </ScreenParallaxWrapper>
    );
};

export default CurrentConditionsScreen;
