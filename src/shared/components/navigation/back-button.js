import React from 'react';
import {TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Helpers} from '../../../theme/theme';

const NavigationBackButton = props => {
  return (
    <TouchableOpacity onPress={() => { props.navigation.goBack(null) }}>
        <Ionicons name="ios-arrow-back" size={32} color="#FFF" style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]} />
    </TouchableOpacity>
  )
}

export default NavigationBackButton;
