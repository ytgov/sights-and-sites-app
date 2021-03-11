import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {H4} from '../../theme/typings';

const arrowBack = require('./images/arrow-back.png');

const BackButton = ({label, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Image source={arrowBack} />
                <H4 style={{marginLeft: 12}}>{label}</H4>
            </View>
        </TouchableOpacity>
    );
};

BackButton.propTypes = {
    label: PropTypes.string
}

BackButton.defaultProps = {
    label: 'Back'
}

export default withNavigation(BackButton);
