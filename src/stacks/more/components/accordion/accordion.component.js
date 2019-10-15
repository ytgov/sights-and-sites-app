import React from 'react';
import {Accordion} from 'native-base';
import {Image, Linking, TouchableOpacity, View} from 'react-native';
import AccordionType from '../../../../types/accordion.type';
import {Body1, H3} from '../../../../theme/theme';
import moreComonStyles from '../../screens/more.common.styles'

const accordionClosedIcon = require('../../../../../assets/stacks/more/accordion-closed-icon.png');
const accordionOpenedIcon = require('../../../../../assets/stacks/more/accordion-opened-icon.png');

const AccordionCustom = props => {
    const {data} = props;
    return (
        <Accordion
            animation
            style={{
                backgroundColor: 'transparent',
                borderTopWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderBottomWidth: 0,
            }}
            renderHeader={(item, expanded) => <View style={{
                flexDirection: 'row',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 5,
                paddingRight: 5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderBottomColor: '#CBCBCB',
                borderBottomWidth: 1
            }}>
                <Image source={expanded ? accordionOpenedIcon : accordionClosedIcon} resizeMode='contain'
                       style={{width: 20, height: 20, marginRight: 17}}/>
                <H3 black>{item.title}</H3>
            </View>}
            renderContent={item => <View style={{
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 5,
                paddingRight: 5,
                borderBottomColor: '#CBCBCB',
                borderBottomWidth: 1
            }}>
                <Body1 regular black>
                    {item.content ? item.content + '\n' : null}

                </Body1>
                {item.url ?
                    <View style={moreComonStyles.linkBox}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(item.url)
                        }}>
                            <View style={moreComonStyles.link}><Body1 black>More safe travel tips?</Body1></View>
                        </TouchableOpacity>
                    </View>
                    : null
                }
                {item.contacts ?
                    item.contacts.map((m, i) => <Body1 key={i} bold black>{m.name} At {m.contact}</Body1>)
                    : null
                }

                {
                    item.QA ?
                        item.QA.map((m, i) => {
                            return (
                                <View key={i}>
                                    <Body1 bold black> {m.q + '\n'}</Body1>
                                    <Body1 regular black>{m.a + '\n'}</Body1>
                                </View>
                            )
                        })
                        : null
                }

            </View>}
            dataArray={data} expanded={0}/>
    )
}

AccordionCustom.propTypes = {
    data: AccordionType
}

AccordionCustom.defaultProps = [];

export default AccordionCustom;
