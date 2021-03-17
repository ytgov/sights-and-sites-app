import React from 'react';
import {Accordion} from 'native-base';
import {Image, View, Text} from 'react-native';

import AccordionType from '~app/types/accordion.type';
import {Body1, H3} from '~theme/theme';
import {Body2} from '~theme/typings';
import WebLink, { WebLinkType, WebLinkIcon } from '~components/webLink';

const accordionClosedIcon = require('./images/accordion-closed-icon.png');
const accordionOpenedIcon = require('./images/accordion-opened-icon.png');

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
                <H3 style={{width: '90%'}} black>{item.title}</H3>
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
                    {item.content_italicized ? (<Text style={{fontFamily: 'montserrat-italic'}}>{item.content_italicized}</Text>) : null}

                    {item.content ? item.content + '\n' : null}
                </Body1>
                {item.url ?
                    <WebLink label={item.url_text ? item.url_text : 'More safe travel tips?'} url={item.url} type={WebLinkType.LINK} icon={WebLinkIcon.EXT_LINK} />
                    // <View style={COMMON.linkBox}>
                    //     <TouchableOpacity onPress={() => {
                    //         Linking.openURL(item.url)
                    //     }}>
                    //         <View style={COMMON.link}><Body1
                    //             black>{item.url_text ? item.url_text : 'More safe travel tips?'}</Body1></View>
                    //     </TouchableOpacity>
                    // </View>
                    : null
                }
                {item.contacts ?
                    item.contacts.map((m, i) => <Body1 key={i} bold black>{m.name}: {m.contact}</Body1>)
                    : null
                }

                {
                    item.QA ?
                        item.QA.map((m, i) => {
                            return (
                                <View key={i}>
                                    <Body1 bold black> {m.q + '\n'}</Body1>
                                    <Body1 regular black>{m.a + '\n'}</Body1>
                                    {
                                        m.list ? m.list.map((item, index) => {
                                            return (
                                                <View style={{paddingLeft: 10}} key={`list-${index}`}>
                                                    {item.q ? <Body2 bold black> {item.q + '\n'}</Body2> : null}
                                                    {item.a ? <Body2 regular black>{item.a + '\n'}</Body2> : null}
                                                    {
                                                        item.items ? item.items.map((text, aa) => (
                                                            <View style={{paddingLeft: 10, flexDirection: 'row'}}
                                                                  key={`list-${index}-${aa}`}>
                                                                <Body2 bold black style={{
                                                                    paddingRight: 5,
                                                                    paddingTop: 2.5
                                                                }}>*</Body2>
                                                                <Body2 regular black>{text + '\n'}</Body2>
                                                            </View>
                                                        )) : null
                                                    }
                                                </View>
                                            )
                                        }) : null
                                    }
                                    {
                                        m.links ? m.links.map((link) => (
                                            <WebLink label={link.title} url={link.url} type={WebLinkType.LINK} />
                                        )) : null
                                    }
                                </View>
                            )
                        })
                        : null
                }


            </View>}
            dataArray={data} expanded={[0]}/>
    )
}

AccordionCustom.propTypes = {
    data: AccordionType
}

AccordionCustom.defaultProps = [];

export default AccordionCustom;
