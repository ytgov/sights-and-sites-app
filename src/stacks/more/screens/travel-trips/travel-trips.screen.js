import React from 'react';
import {Image, Linking, SafeAreaView, Text, View} from 'react-native';
import {Container, Content, Header, Root} from 'native-base';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import {Body1, COMMON, H2, Helpers} from '../../../../theme/theme';
import TravelTripsStyles from './travel-trips.styles';
import Feedback from '../../components/feedback/feedback.component';
import AccordionCustom from '../../components/accordion/accordion.component';

const travelTripsIcon = require('../../../../../assets/stacks/more/travel-trips-icon.png');

class TravelTripsScreen extends React.Component {
    state = {}

    static openLink(url) {
        Linking.openURL(url)
    }

    render() {
        const {navigation} = this.props;
        const data = [
            {
                title: 'Protecting historic resources',
                content: 'Yukon’s historic resources are protected under the Historic Resources Act. Do no remove an artifact from an archaeological or historic site. Artifacts belong to all Yukoners and are held in the public trust. To report a find, contact',
                contacts: [
                    {
                        name: 'Yukon Archaeology ',
                        contact: '867-667-5983'
                    },
                    {
                        name: 'Government of Yukon Toll-Free line ',
                        contact: '1-800-661-0408'
                    }
                ]
            },
            {
                title: 'More wilderness safety tips',
                content: `Before exploring a trail be sure to learn about the area and make a plan. There are many trails that head off into Yukon’s wilderness for hundreds of kilometers. `,
                url: 'https://yukon.ca/en/outdoor-recreation-and-wildlife/wilderness-safety/travel-safely-yukon-wilderness'
            }
        ];

        return (
            <Root>
                <Container style={COMMON.content}>
                    <Header style={COMMON.header}>
                        <NavigationBackButton dark navigation={navigation}/>
                    </Header>
                    <SafeAreaView/>
                    <SafeAreaView style={{paddingLeft: 0, padingRight: 0, flex: 1, backgroundColor: '#000'}}>
                        <Content style={[COMMON.content]}>
                            <View style={TravelTripsStyles.contentPadded}>
                                <View style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter]}>
                                    <Image source={travelTripsIcon} resizeMode='contain'
                                           style={{width: 55, height: 55, marginBottom: 12}}/>
                                    <H2 black style={Helpers.textAlignCenter}>Wilderness Travel Tips</H2>
                                    <View style={TravelTripsStyles.separator}/>
                                </View>

                                <View>
                                    <Body1 regular black>Tips for safe roadside wildlife viewing:{'\n'}</Body1>
                                    <Text>
                                        <Body1 bold black>STOP </Body1>
                                        <Body1 regular black>only when it is safe to do so, checking for traffic and
                                            clear sightlines.{'\n'}</Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>LOOK </Body1>
                                        <Body1 regular black>from the safety of your car. Use binoculars or a zoom lens
                                            for a closer look. {'\n'} </Body1>
                                    </Text>
                                    <Text>
                                        <Body1 bold black>LEAVE </Body1>
                                        <Body1 regular black>within one minute to keep wildlife safe. Animals that
                                            become too habituated to humans are at risk of being killed. {'\n'} </Body1>
                                    </Text>
                                </View>

                                <View>
                                    <AccordionCustom data={data}/>
                                </View>
                            </View>
                        </Content>
                        <Feedback/>
                    </SafeAreaView>
                </Container>
            </Root>
        )
    }
}

export default TravelTripsScreen;
