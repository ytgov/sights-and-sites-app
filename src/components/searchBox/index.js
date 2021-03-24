import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import DeviceInfo from 'react-native-device-info';
import { MaterialIcons } from '@expo/vector-icons';
import {withNavigation} from 'react-navigation';

import {YUKON_COLORS} from '~theme/config';
import {YUKON_FONTS} from '~theme/typings';
import routes from '~navigation/routes';

const SearchBox = (props) => {
    const {navigation} = props;
    const [t] = useTranslation();
    const [keyword, setKeyword] = useState('');


    useEffect(() => {
        if (navigation.getParam('keyword')) {
            setKeyword(navigation.getParam('keyword'));
        }
    }, [])

    const doSearch = () => {
        if (keyword.trim() === '') return;

        // Redirect to search result screen if current screen is not Search result yet.
        if (navigation.state.routeName !== routes.SCREEN_SEARCH_RESULTS) {
            navigation.navigate(routes.STACK_SEARCH, {keyword})
        } else {
            navigation.setParams({keyword})
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.inner}>
                <TextInput multiline={false}
                           style={styles.input}
                           placeholderTextColor={'white'}
                           placeholder={t('searchBox.placeholder')}
                           onChangeText={(text) => setKeyword(text)}
                           value={keyword}
                           onSubmitEditing={doSearch}
                           returnKeyType={'search'} />

                <MaterialIcons.Button
                            name="chevron-right"
                            size={28}
                            color="white"
                            iconStyle={{marginRight: 0}}
                            backgroundColor={YUKON_COLORS.primary_600}
                            onPress={doSearch} />
            </View>
        </View>
    );
};

export default withNavigation(SearchBox);

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
