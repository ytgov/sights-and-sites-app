import React from 'react';
import { View, Image } from 'react-native';
import { Footer, FooterTab, Button } from 'native-base';
import PropTypes from 'prop-types';
import { Caption, COMMON } from '../../../../theme/theme';
import i18n from '../../../../locale/locale';

import Badge from '../../../where-to/screens/choose-location/choose-location.styled-components';

const whereToIcon = require('../../../../../assets/stacks/tabs/where-to-icon.png');
const siteTypeIcon = require('../../../../../assets/stacks/tabs/site-type-icon.png');
const moreIcon = require('../../../../../assets/stacks/tabs/more-icon.png');

const FooterTabs = props => {
  const { navigation, highwaysFilter, regionsFilter, nearMeFilter, mySitesFilter, sitesTypeFilter, toggleSitesTypeFilterDispatch } = props;
  return (
    <Footer style={COMMON.footer}>
      <FooterTab style={{ backgroundColor: '#000000' }}>
        <Button vertical onPress={() => { navigation.navigate('WhereTo') }}>
          <View style={{ position: 'relative' }}>
            {!!(highwaysFilter.length || regionsFilter.length || nearMeFilter || mySitesFilter) && (<Badge style={{ top: 0, right: -1 }} />)}
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={whereToIcon} />
          </View>
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('footerTabs.whereTo')}</Caption>
        </Button>
        <Button vertical onPress={() => toggleSitesTypeFilterDispatch()}>
          <View style={{ position: 'relative' }}>
            {!!(sitesTypeFilter.length) && (<Badge style={{ top: 0, right: -3 }} />)}
            <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={siteTypeIcon} />
          </View>
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('footerTabs.siteType')}</Caption>
        </Button>
        <Button badge vertical>
          <Image style={{ width: 24, height: 24 }} resizeMode='contain' source={moreIcon} />
          <Caption style={{ color: '#FFFFFF' }}>{i18n.t('footerTabs.more')}</Caption>
        </Button>
      </FooterTab>
    </Footer>
  )
}

FooterTabs.propTypes = {
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  toggleSitesTypeFilterDispatch: PropTypes.func.isRequired
}

export default FooterTabs;