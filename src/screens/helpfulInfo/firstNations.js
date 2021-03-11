import React from 'react';
import {Body1, H2, H3} from '../../theme/typings';

import ScreenParallaxWrapper from '../../components/screenParallaxWrapper';
const bgFirstNations = require('./images/bg-first-nations.png');
const iconFirstNations = require('./images/icon-first-nations.png');

const FirstNationsScreen = () => {
    return (
        <ScreenParallaxWrapper backgroundImage={bgFirstNations}
                               leadIcon={iconFirstNations}
                               title={'First Nations in Yukon'}>
            <>
                <H2 black style={{ marginBottom: 32 }}>Sharing deep traditional and spiritual connections with the Yukon land</H2>
                <Body1 regular black>
                    Yukon is home to many First Nations with various political, cultural and linguistic
                    backgrounds. These groups share deep traditional and spiritual connections to their
                    ancestral lands. As you explore Yukom, please demonsdtrate respect for the sacred
                    land that sustains indigenous ways of life. More information is available at Yukon.ca,
                    Mapping the Way and at each Yuukon First Nations official website.
                </Body1>
            </>

        </ScreenParallaxWrapper>
    );
};

export default FirstNationsScreen;
