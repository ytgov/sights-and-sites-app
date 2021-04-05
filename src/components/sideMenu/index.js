import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerItems, DrawerActions} from 'react-navigation-drawer';
import {withNavigation} from 'react-navigation';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useTranslation} from 'react-i18next';
import {getToggledLanguage} from '~locale/locale';

import routes from '~navigation/routes';
import {YUKON_COLORS} from '~theme/config';
import styles from './styles';

import YukonLogo from './images/yukon.png'
import {setLocale} from '~store/actions/locale';
import {setSelectLocaleAction} from '~store/actions/core';
import {connect} from 'react-redux';
import {filterListing, setListing} from '~store/actions/listing';

const SideMenu = (props) => {
    const {i18n} = useTranslation();

    const {navigation, items, locale} = props

    // Remove Home item.
    const filteredItems = items.filter(i => i.key !== routes.STACK_BOTTOM_TAB)

    const newLanguage = getToggledLanguage()

    const _toggleLanguage = () => {
        const newLanguageCode = newLanguage.code
        const {
            dispatchSetLocale,
            dispatchSetSelectLocaleAction,
            navigation,
            dispatchSetListing,
            dispatchFilterListing,
            listingLocalized
        } = props;

        dispatchSetLocale(newLanguageCode);
        dispatchSetSelectLocaleAction(true);
        i18n.changeLanguage(newLanguageCode)
            .catch(err => console.log(err));

        const activeListing = listingLocalized[newLanguageCode]

        dispatchSetListing(activeListing)
        dispatchFilterListing()
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
                            <Text style={styles.langcodeText}>{newLanguage.code}</Text>
                        </View>
                        <Text style={styles.menuLabel}>{newLanguage.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale,
        listingLocalized: state.listingStore.listingLocalized
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSetLocale: value => dispatch(setLocale(value)),
        dispatchSetSelectLocaleAction: value => dispatch(setSelectLocaleAction(value)),
        dispatchSetListing: (value) => dispatch(setListing(value)),
        dispatchFilterListing: (value) => dispatch(filterListing(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(SideMenu));

