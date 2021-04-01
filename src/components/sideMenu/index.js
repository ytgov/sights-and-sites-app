import React from 'react';
import {View, Image, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerItems, DrawerActions} from 'react-navigation-drawer';
import {withNavigation} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useTranslation} from 'react-i18next';
import {languages, getToggledLanguage} from '~locale/locale';

import routes from '~navigation/routes';
import {YUKON_COLORS} from '~theme/config';
import styles from './styles';

import YukonLogo from './images/yukon.png'
import {setLocale} from '~store/actions/locale';
import {setSelectLocaleAction} from '~store/actions/core';
import {connect} from 'react-redux';

const SideMenu = (props) => {
    const {i18n} = useTranslation();

    const {navigation, items, locale} = props

    // Remove Home item.
    const filteredItems = items.filter(i => i.key !== routes.STACK_BOTTOM_TAB)

    const currentLanguage = languages[locale];

    const _toggleLanguage = () => {
        const newLanguage = getToggledLanguage()
        const {locale, setLocaleDispatch, setSelectLocaleActionDispatch, navigation} = props;
        setLocaleDispatch(newLanguage.code);
        setSelectLocaleActionDispatch(true);
        i18n.changeLanguage(locale);
        navigation.dispatch(DrawerActions.closeDrawer());
        navigation.navigate(routes.STACK_MODAL);
    }

    return (
        <SafeAreaView
            style={{flex: 1, height: '100%'}}
            forceInset={{top: 'always', horizontal: 'never'}}>

            <View style={styles.header}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate(routes.STACK_MODAL)}>
                    <Image
                        source={YukonLogo}
                        style={styles.logo} />
                </TouchableWithoutFeedback>

                <MaterialCommunityIcons.Button
                    name="close"
                    size={22}
                    color="white"
                    padding={0}
                    borderRadius={16}
                    height={32}
                    width={32}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={'transparent'}
                    underlayColor={'transparent'}
                    overflow={'hidden'}
                    iconStyle={{marginRight: 0}}
                    style={{ backgroundColor: YUKON_COLORS.primary_600}}
                    onPress={() => navigation.closeDrawer()}
                />
            </View>

            <View style={styles.body}>
                <DrawerItems
                    {...props}
                    items={filteredItems}
                    activeTintColor={YUKON_COLORS.primary_400}
                    labelStyle={styles.menuLabel}
                    itemStyle={styles.menuItem}
                    iconContainerStyle={{ marginRight: 8, opacity: 1 }}  />

                <TouchableWithoutFeedback onPress={_toggleLanguage}>
                    <View style={styles.languageWraper}>
                        <View style={styles.langcode}>
                            <Text style={styles.langcodeText}>{currentLanguage.code}</Text>
                        </View>
                        <Text style={styles.menuLabel}>{currentLanguage.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLocaleDispatch: value => dispatch(setLocale(value)),
        setSelectLocaleActionDispatch: value => dispatch(setSelectLocaleAction(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SideMenu));

