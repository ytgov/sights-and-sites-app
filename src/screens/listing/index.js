import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';

const ListingScreen = () => {
    return (
        <ScreenWrapper>
            <Text>ListingScreen</Text>
        </ScreenWrapper>
    );
};

ListingScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.LIST} />
})

export default ListingScreen;
