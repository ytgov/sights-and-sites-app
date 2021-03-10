import React from 'react';
import {Text} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';

const MapScreen = () => {
    return (
        <ScreenWrapper>
            <Text>MapScreen</Text>
        </ScreenWrapper>
    );
};

MapScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.MAP} />
});

export default MapScreen;
