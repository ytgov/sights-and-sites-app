import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import { MaterialIcons } from '@expo/vector-icons';

import {YUKON_COLORS} from '~theme/config';
import {YUKON_FONTS} from '~theme/typings';

const SearchBox = () => {
    const [t] = useTranslation();
    const [keyword, setKeyword] = useState(keyword);

    return (
        <View style={styles.wrapper}>
            <View style={styles.inner}>
                <TextInput multiline={false}
                           style={styles.input}
                           placeholderTextColor={'white'}
                           placeholder={t('searchBox.placeholder')}
                           onChangeText={(text) => setKeyword(text)}
                           returnKeyType={'search'} />

                <MaterialIcons.Button
                            name="chevron-right"
                            size={28}
                            color="white"
                            iconStyle={{marginRight: 0}}
                            backgroundColor={YUKON_COLORS.primary_600}
                            onPress={() => console.log('Do search')} />
            </View>
        </View>
    );
};

export default SearchBox;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: YUKON_COLORS.primary_600,
        height: DeviceInfo.hasNotch() ? 110 : 80,
        justifyContent: 'flex-end'
    },
    inner: {
        height: 60,
        marginRight: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        padding: 20,
        color: 'white',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: YUKON_FONTS.MONTSERRAT_BOLD,
    }
})
