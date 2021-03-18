import React from 'react';
import {View, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import HTMLElement from '~components/htmlElement';

import {H3} from '~theme/typings';

const NoResult = () => {
    const {t} = useTranslation()
    return (
        <ScrollView>
            <View style={{ paddingHorizontal: 20, paddingVertical: 50}}>
                <H3 black style={{marginBottom: 20}}>{t('noResult.title')}</H3>
                <HTMLElement html={t('noResult.content')} />
            </View>
        </ScrollView>
    );
};

export default NoResult;
