import React from 'react';
import {Body1, H2, H3} from '../../theme/typings';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
const bgAppInformation = require('./images/bg-app-information.png');
const iconAppInformation = require('./images/icon-app-information.png');

const AppInformationScreen = () => {
    return (
        <ScreenParallaxWrapper backgroundImage={bgAppInformation}
                               leadIcon={iconAppInformation}
                               title={'App information'}>
            <>
                <H2 black style={{ marginBottom: 32 }}>Let the Yukon Road Trip app be your guide</H2>
                <Body1 regular black>
                    The Yukon Road Trip app is your guide to Government of Yukon’s road accessible
                    campgrounds, wildlife viewing, cultural and historical points of interest.
                    Connect with the natural and cultural history that surrounds you.
                </Body1>
            </>

        </ScreenParallaxWrapper>
    );
};

export default AppInformationScreen;
