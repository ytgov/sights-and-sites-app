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

    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' };
    const { id, uri } = item;
    const isSiteInMySites = !!mySites.filter(site => site === id).length

    const nearBySite = findNearest(item.location, listingRaw.filter(site => site.id !== item.id).map(site => { return { id: site.id, latitude: site.location.latitude, longitude: site.location.longitude } }));
    const nearBySiteID = nearBySite.id;

    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content">
          <NavigationBackButton navigation={navigation} />
        </Header>
        <Content>
          <View style={COMMON.content}>
            <View style={[SiteDetailsStyles.siteImgBox]}>
              <Image {...{ preview, uri }} resizeMode='cover' style={SiteDetailsStyles.siteImg} />
            </View>
            <MySitesButton id={id} isSiteInMySites={isSiteInMySites} toggleMySitesStateDispatch={toggleMySitesStateDispatch} showAddToMySitesNotification={() => this.showAddToMySitesNotification()} filterListingDispatch={filterListingDispatch} />
          </View>
          <View style={[COMMON.content, SiteDetailsStyles.siteContentBox]}>
            <SiteCardInfo item={item} locale={locale} />
            <SiteAmenties items={item.siteAmenties} />
            <SiteWarning />
            <Body1 black regular>
              With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.
            </Body1>
          </View>

          {/* TODO Item id should be replaced with near by site id */}
          {nearBySiteID && <NearbySites parentLocation={item.location} itemId={nearBySiteID} locale={locale} navigation={navigation} />}
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
  mySites: PropTypes.arrayOf(PropTypes.string).isRequired,
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