import React from 'react';
import { Accordion } from 'native-base';
import { View, Image } from 'react-native';
import { H3, Body1 } from '../../../../theme/theme';

const accordionClosedIcon = require('../../../../../assets/stacks/more/accordion-closed-icon.png');
const accordionOpenedIcon = require('../../../../../assets/stacks/more/accordion-opened-icon.png');

const AccordionCustom = props => {
  const { data } = props;
  return (
    <Accordion
      animation
      style={{ backgroundColor: 'transparent', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderBottomWidth: 0, }}
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
        <Image source={expanded ? accordionOpenedIcon : accordionClosedIcon} resizeMode='contain' style={{ width: 20, height: 20, marginRight: 17 }} />
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
        <Body1 regular black>{item.content}</Body1>
      </View>}
      dataArray={data} expanded={0} />
  )
}

export default AccordionCustom;