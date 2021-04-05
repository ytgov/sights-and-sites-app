import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import {useTranslation} from 'react-i18next';
import {H4} from '~theme/typings';

const arrowBack = require('./images/arrow-back.png');

const BackButton = ({navigation}) => {
    const { i18n } = useTranslation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                <Image source={arrowBack} />
                <H4 style={{marginLeft: 12}}>{i18n.t('backButton.label')}</H4>
            </View>
        </TouchableOpacity>
    );
};

export default withNavigation(BackButton);
