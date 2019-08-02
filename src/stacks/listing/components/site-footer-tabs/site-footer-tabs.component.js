import React from 'react';
import { View, Image, Share } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Caption, COMMON } from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import SiteFooterTabsStyles from './site-footer-tabs.styles';

const directionsIcon = require('../../../../../assets/stacks/tabs/directions-icon.png');
const shareIcon = require('../../../../../assets/stacks/tabs/share-icon.png');
const mySitesIcon = require('../../../../../assets/stacks/tabs/my-sites-icon.png');

const SiteFooterTabs = props => {
  const { navigation, setMySitesFiltersDispatch } = props;
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
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
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Footer style={COMMON.footer}>
      <FooterTab style={{ backgroundColor: '#000000' }}>
        <Button vertical onPress={() => { }}>
          <View style={{ position: 'relative' }}>
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={directionsIcon} />
          </View>
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('siteTabs.directions')}</Caption>
        </Button>
        <Button vertical onPress={() => { this.onShare() }}>
          <View style={{ position: 'relative' }}>
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={shareIcon} />
          </View>
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('siteTabs.share')}</Caption>
        </Button>
        <Button badge vertical onPress={() => {
          setMySitesFiltersDispatch(true);
          navigation.navigate('Map');
        }}>
          <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={mySitesIcon} />
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('siteTabs.mySites')}</Caption>
        </Button>
      </FooterTab>
    </Footer>
  )
}

SiteFooterTabs.propTypes = {
}

export default SiteFooterTabs;