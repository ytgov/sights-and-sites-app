import React from 'react';
import {Container, Content, Text, View} from 'native-base';
// import MapboxGL from '@react-native-mapbox-gl/maps';


export default class TestScreen extends React.Component{

    render() {
        return (
            <Container>
                <Content>
                    <View style={{padding: 20}}>
                        <Text>
                            Hello From Test Screen
                        </Text>
                    </View>


                </Content>
            </Container>
        )
    }

}
