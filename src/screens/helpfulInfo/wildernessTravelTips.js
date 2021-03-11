import React from 'react';
import {Body1, H2, H3} from '../../theme/typings';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
const bgWilderness = require('./images/bg-wilderness-travel-tips.png');
const iconWilderness = require('./images/icon-wilderness.png');

const WildernessTravelTipsScreen = () => {
    return (
        <ScreenParallaxWrapper backgroundImage={bgWilderness}
                               leadIcon={iconWilderness}
                               title={'Wilderness Travel Tips'}>
            <>
                <H2 black style={{ marginBottom: 32 }}>Tips for safe roadside wildlife viewing</H2>
                <Body1 regular black>
                    STOP only when it is safe to do so, checking for traffic and clear sightlines.
                    LOOK from the safety of your car. Use binoculars or a zoom lens for a closer look.
                    LEAVE within one minute to keep wildlife safe. Animals that become too habituated to humans are at risk of being killed.
                </Body1>
            </>

        </ScreenParallaxWrapper>
    );
};

export default WildernessTravelTipsScreen;
