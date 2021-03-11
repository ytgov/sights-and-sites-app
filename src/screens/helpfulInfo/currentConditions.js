import React from 'react';
import {Body1, H2, H3} from '../../theme/typings';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
const bgCurrentConditions = require('./images/bg-current-conditions.png');
const iconCurrentConditions = require('./images/icon-current-conditions.png');

const CurrentConditionsScreen = () => {
    return (
        <ScreenParallaxWrapper backgroundImage={bgCurrentConditions}
                               leadIcon={iconCurrentConditions}
                               title={'Current Conditions'}>
            <>
                <H2 black style={{ marginBottom: 32 }}>Campground closures and warning</H2>
                <Body1 regular black>
                    Information on Government of Yukon’s campgrounds, including campground maps,
                    closures and public warnings, visit yukon.ca.
                </Body1>

                <H3 black style={{ marginBottom: 12, marginTop: 24}}>Highway conditions</H3>
                <Body1 regular black>
                    Yukon’s highway reports on current road conditions, warnings and closures, visit 511yukon.ca
                </Body1>

                <H3 black style={{ marginBottom: 12, marginTop: 24}}>Fire reports</H3>
                <Body1 regular black>
                    Current information on Yukon’s fire investigation reports and public safety notices, visit yukon.ca
                </Body1>

            </>

        </ScreenParallaxWrapper>
    );
};

export default CurrentConditionsScreen;
