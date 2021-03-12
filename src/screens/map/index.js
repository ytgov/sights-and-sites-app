import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';

const windowWidth = Dimensions.get('window').width;

const MapScreen = () => {
    const ratio = 750 / 350;

    const getTest = (k) => {
        const width = windowWidth * k
        const height = parseInt((width * ratio).toFixed(0))
        const url = `https://picsum.photos/${width}/${height}`
        return (
            <View style={{ marginBottom: 50 }}>
                <View style={{
                    top: 16, left: 16, height: 50,
                    position: 'absolute',
                    zIndex: 10,
                    backgroundColor: 'black',
                    padding: 8
                }}>
                    <Text style={{ color: 'white'}}>{width} x {height}</Text>
                    <Text style={{ color: 'white'}}>{url}</Text>
                </View>
                <Image source={{uri: url}}
                       style={{
                           width: width,
                           height: height, resizeMode: 'contain' }} />
            </View>
        )
    }

    return (
        <ScrollView>
            {getTest(1)}
            {getTest(2)}
        </ScrollView>
    );
};

MapScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.MAP} />
});

export default MapScreen;
