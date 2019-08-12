import React from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import { Image } from 'react-native-expo-image-cache';
import PropTypes from 'prop-types';
import { Container, Header, Content } from 'native-base';
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

const amentieIcon = require('../../../../../assets/stacks/listing/amenties/1.png');

class SiteDetails extends React.Component {
  addToMySitesNotificationTimeout = null;

  state = {
    addToMySitesNotificationVisible: false,
    addToMySitesNotificationDelay: 2000,
    // TODO replace with amenties from config once real data is there
    siteAmenties: [
      {
        id: 1,
        image: amentieIcon
      },
      {
        id: 2,
        image: amentieIcon
      },
      {
        id: 3,
        image: amentieIcon
      },
      {
        id: 4,
        image: amentieIcon
      },
      {
        id: 5,
        image: amentieIcon
      },
      {
        id: 6,
        image: amentieIcon
      },
      {
        id: 7,
        image: amentieIcon
      },
      {
        id: 8,
        image: amentieIcon
      },
      {
        id: 9,
        image: amentieIcon
      },
    ]
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
    const { siteAmenties, addToMySitesNotificationVisible } = this.state;
    const { navigation, locale, mySites, toggleMySitesStateDispatch, setMySitesFiltersDispatch, filterListingDispatch } = this.props;
    const item = navigation.getParam('item');

    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' };
    const { id, uri } = item;
    const isSiteInMySites = !!mySites.filter(site => site === id).length

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
            <SiteAmenties items={siteAmenties} />
            <SiteWarning />
            <Body1 black regular>
              With many small bays, islands, and shoreline vegetation, Tachan Man is an interesting place to paddle. The dock at the campground is accessible by foot, whereas the boat launch is 2 km away on Frenchman Road.
            </Body1>
          </View>
          {/* TODO Item id should be replaced with near by site id */}
          <NearbySites itemId={item.id} locale={locale} navigation={navigation} />
        </Content>

        <View style={{ position: 'relative', height: 'auto' }}>
          <SiteFooterTabs {...this.props} setMySitesFiltersDispatch={setMySitesFiltersDispatch} />
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
  filterListingDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale,
    mySites: state.filtersStore.mySites
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