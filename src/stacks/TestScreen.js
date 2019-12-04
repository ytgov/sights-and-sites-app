import React from 'react';
import {Container, Content, Text, View} from 'native-base';


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

                    <Mapbox.MapView></Mapbox.MapView>

                </Content>
            </Container>
        )
    }

}
