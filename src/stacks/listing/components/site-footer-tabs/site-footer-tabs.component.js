import React from 'react';
import {Image, Platform, Share, View} from 'react-native';
import {Button, Footer, FooterTab} from 'native-base';
import PropTypes from 'prop-types';
import {Caption, COMMON, Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import SiteFooterTabsStyles from './site-footer-tabs.styles';
import SiteType from '../../../../types/site.type';
import {error} from '../../../../shared/services/notify';
import {Linking} from 'expo';

const directionsIcon = require('../../../../../assets/stacks/tabs/directions-icon.png');
const shareIcon = require('../../../../../assets/stacks/tabs/share-icon.png');
const mySitesIcon = require('../../../../../assets/stacks/tabs/my-sites-icon.png');

const SiteFooterTabs = props => {
    const {navigation, item, locale, setMySitesFiltersDispatch} = props;

    const formatSharedMessage = () => {
        let message = `${item.site_name} \n\n`;


        message += `${item.site_description} \n\n`;

        message += '\nGet the App \nFind the Yukon Road Trip App for IOS or Android, for free, in any app store.\n\n';
        return message;
    }

    const onShare = async () => {
        const {networkAvailable} = props;
        if (!networkAvailable) {
            error(i18n.t('notifications.networkNotAvailable'));
            return false;
        }
        try {
            const result = await Share.share({
                title: item.site_name,
                url: item.image_url,
                message: formatSharedMessage()
            }, {
                subject: item.site_name,
                dialogTitle: 'Share: ' + item.site_name
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (err) {
            error(err);
            return false;
        }
        return true;
    };
    return (
        <Footer style={COMMON.footer}>
            <FooterTab style={{backgroundColor: '#000000'}}>
                <Button vertical onPress={() => {
                    if (Platform.OS === 'ios') {
                        Linking.openURL(`http://maps.apple.com/maps?q=${item.latitude},${item.longitude}`);
                    } else {
                        Linking.openURL(`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`);
                    }
                }}>
                    <View style={Helpers.positionRelative}>
                        <Image style={SiteFooterTabsStyles.tabIcon} resizeMode='contain' source={directionsIcon}/>
                    </View>
                    <Caption>{i18n.t('siteTabs.directions')}</Caption>
                </Button>
                <Button vertical onPress={() => {
                    onShare()
                }}>
                    <View style={Helpers.positionRelative}>
                        <Image style={SiteFooterTabsStyles.tabIcon} resizeMode='contain' source={shareIcon}/>
                    </View>
                    <Caption>{i18n.t('siteTabs.share')}</Caption>
                </Button>
                <Button badge vertical onPress={() => {
                    setMySitesFiltersDispatch(true);
                    navigation.navigate('Map');
                }}>
                    <Image style={SiteFooterTabsStyles.tabIcon} resizeMode='contain' source={mySitesIcon}/>
                    <Caption>{i18n.t('siteTabs.mySites')}</Caption>
                </Button>
            </FooterTab>
        </Footer>
    )
}

SiteFooterTabs.propTypes = {
    item: SiteType.isRequired,
    locale: PropTypes.string.isRequired,
    setMySitesFiltersDispatch: PropTypes.func.isRequired,
    networkAvailable: PropTypes.bool.isRequired
}

export default SiteFooterTabs;
