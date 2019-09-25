import React from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import { Image } from 'react-native-expo-image-cache';
import PropTypes from 'prop-types';
import { Container, Header, Content } from 'native-base';
import findNearest from 'geolib/es/findNearest';
import SiteDetailsStyles from './site-details.styles';
import { COMMON, Body1 } from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import SiteFooterTabs from '../../components/site-footer-tabs/site-footer-tabs.component';
import MySitesButton from '../../components/my-sites-button/my-sites-button.component';
import SiteAmenties from '../../components/site-amenties/site-amenties.component';
import SiteCardInfo from '../../components/site-card-info/site-card-info.component';
import SiteWarning from '../../components/site-warning/site-warning.component';
import { filterListing } from '../../../../store/actions/listing';
import { toggleMySitesState, setMySitesFilters } from '../../../../store/actions/filters';
import AddToMySitesNotification from '../../components/add-to-my-sites-notification/add-to-my-sites-notification.component';
import SiteType from '../../../../types/site.type';
import { APP_CONFIG } from '../../../../config';

const fallback = require('../../../../../assets/common/fallback.png');

class SiteDetails extends React.Component {
  addToMySitesNotificationTimeout = null;

  state = {
    addToMySitesNotificationVisible: false,
    addToMySitesNotificationDelay: 2000,
  }

  componentWillUnmount() {
    if (this.addToMySitesNotificationTimeout) {
      clearTimeout(this.addToMySitesNotificationTimeout);
    }
  }

  showAddToMySitesNotification() {
    const { addToMySitesNotificationDelay } = this.state;
    this.setState({
      addToMySitesNotificationVisible: true
    }, () => {
      this.addToMySitesNotificationTimeout = setTimeout(() => {
        this.setState({
          addToMySitesNotificationVisible: false
        })
      }, addToMySitesNotificationDelay)
    })
  }

  render() {
    const { addToMySitesNotificationVisible } = this.state;
    const { navigation, locale, mySites, toggleMySitesStateDispatch, setMySitesFiltersDispatch, filterListingDispatch, listingRaw, networkAvailable } = this.props;
    const item = navigation.getParam('item');
    const itemLocation = {
      latitude:item.latitude,
      longitude:item.longitude
    }

    const preview = { uri: APP_CONFIG.cache.imagePreview };
    const { site_id, uri } = item;
    const id = site_id
    const isSiteInMySites = !!mySites.filter(site => site === id).length

    const nearBySite = findNearest(itemLocation, listingRaw.filter(site => site.site_id !== item.site_id).map(site => { return { id: site.site_id, latitude: site.latitude, longitude: site.longitude } }));
    const nearBySiteID = nearBySite.id;

    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content">
          <NavigationBackButton navigation={navigation} />
        </Header>
        <Content>
          <View style={COMMON.content}>
            <View style={[SiteDetailsStyles.siteImgBox]}>
              <Image {...{ preview, uri }} resizeMode='cover' tint={APP_CONFIG.cache.tint} transitionDuration={APP_CONFIG.cache.transitionDuration} style={SiteDetailsStyles.siteImg} fallback={fallback} />
            </View>
            <MySitesButton id={id} isSiteInMySites={isSiteInMySites} toggleMySitesStateDispatch={toggleMySitesStateDispatch} showAddToMySitesNotification={() => this.showAddToMySitesNotification()} filterListingDispatch={filterListingDispatch} />
          </View>
          <View style={[COMMON.content, SiteDetailsStyles.siteContentBox]}>
            <SiteCardInfo item={item} locale={locale} />
            {/* <SiteAmenties items={item.siteAmenties} locale={locale} /> */}
            {!!item.warning && <SiteWarning value={item.warning} />}
            <Body1 black regular style={{ paddingTop: 16 }}>
              {
                item.site_description
              }
            </Body1>
          </View>

          {/* TODO Item id should be replaced with near by site id */}
          {nearBySiteID && <NearbySites parentLocation={itemLocation} itemId={nearBySiteID} locale={locale} navigation={navigation} />}
        </Content>

        <View style={{ position: 'relative', height: 'auto' }}>
          <SiteFooterTabs item={item} locale={locale} networkAvailable={networkAvailable}  {...this.props} setMySitesFiltersDispatch={setMySitesFiltersDispatch} />
          <AddToMySitesNotification visible={addToMySitesNotificationVisible} />
        </View>
      </Container>
    )
  }
}

SiteDetails.propTypes = {
  locale: PropTypes.string.isRequired,
  mySites: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleMySitesStateDispatch: PropTypes.func.isRequired,
  setMySitesFiltersDispatch: PropTypes.func.isRequired,
  networkAvailable: PropTypes.bool.isRequired,
  filterListingDispatch: PropTypes.func.isRequired,
  listingRaw: PropTypes.arrayOf(SiteType).isRequired
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale,
    networkAvailable: state.coreStore.networkAvailable,
    mySites: state.filtersStore.mySites,
    listingRaw: state.listingStore.listingRaw
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleMySitesStateDispatch: value => dispatch(toggleMySitesState(value)),
    setMySitesFiltersDispatch: value => dispatch(setMySitesFilters(value)),
    filterListingDispatch: () => dispatch(filterListing())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteDetails);