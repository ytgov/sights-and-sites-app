import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content } from 'native-base';
import PropTypes from 'prop-types';
import i18n from '../../../../locale/locale';
import { Body1, COMMON, Helpers } from '../../../../theme/theme';
import FooterTabs from '../../components/footer-tabs/footer-tabs.component';
import SitesTypeFilter from '../../components/sites-type-filter/sites-type-filter.component';
import { toggleSitesTypeFilter, setSitesTypeFilters } from '../../../../store/actions/filters';
import { toggleListingView, incrementListingPage } from '../../../../store/actions/listing';
import MainScreenStyles from './main.screen.styles';
import MapViewContainer from '../../containers/map-view/map-view.container';
import ListViewContainer from '../../containers/list-view/list-view.container';
import SiteType from '../../../../types/site.type';

const searchIcon = require('../../../../../assets/common/search-icon.png');

class MainScreen extends React.Component {
  state = {

  }

  render() {
    const { navigation, locale, listingFiltered, toggleListingViewDispatch, incrementListingPageDispatch, selectedListingView, currentListingPage, listingPagesLimit, listingItemsCount } = this.props;
    return (
      <Container style={{ backgroundColor: '#000' }}>
        <Header style={[COMMON.header, COMMON.headerBlack, { justifyContent: 'flex-end' }]} iosBarStyle="light-content">
          <TouchableOpacity onPress={() => { navigation.navigate('Search') }}>
            <Image source={searchIcon} style={MainScreenStyles.searchIcon} />
          </TouchableOpacity>
        </Header>

        <View style={Helpers.flexDirectionRow}>
          <View style={[MainScreenStyles.switchBtnBox, MainScreenStyles.switchBtnBoxLeft]}>
            <TouchableOpacity style={[MainScreenStyles.switchBtn, selectedListingView === 'LIST' && MainScreenStyles.switchBtnActive]} onPress={() => { toggleListingViewDispatch('LIST') }}>
              <Body1 style={MainScreenStyles.switchBtnText}>{i18n.t('listingTypes.list')}</Body1>
            </TouchableOpacity>
          </View>
          <View style={[MainScreenStyles.switchBtnBox, MainScreenStyles.switchBtnBoxRight]}>
            <TouchableOpacity style={[MainScreenStyles.switchBtn, selectedListingView === 'MAP' && MainScreenStyles.switchBtnActive]} onPress={() => { toggleListingViewDispatch('MAP') }}>
              <Body1 style={MainScreenStyles.switchBtnText}>{i18n.t('listingTypes.map')}</Body1>
            </TouchableOpacity>
          </View>
        </View>

        <Content>
          {
            (selectedListingView === 'MAP') ? <MapViewContainer data={listingFiltered} navigation={navigation} /> : <ListViewContainer
              data={listingFiltered}
              currentListingPage={currentListingPage}
              incrementListingPageDispatch={incrementListingPageDispatch}
              listingPagesLimit={listingPagesLimit}
              listingItemsCount={listingItemsCount}
              locale={locale}
              navigation={navigation} />
          }
        </Content>

        <View style={{ position: 'relative', height: 'auto' }}>
          <FooterTabs {...this.props} />
          <SitesTypeFilter {...this.props} />
        </View>
      </Container >)
  }
}

// Need this props to pass to FooterTabs and SitesTypeFilter components
MainScreen.propTypes = {
  locale: PropTypes.string.isRequired,
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  sitesTypeFilterActive: PropTypes.bool.isRequired,
  sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  toggleSitesTypeFilterDispatch: PropTypes.func.isRequired,
  toggleListingViewDispatch: PropTypes.func.isRequired,
  selectedListingView: PropTypes.string.isRequired,
  listingFiltered: PropTypes.arrayOf(SiteType), incrementListingPageDispatch: PropTypes.func.isRequired,
  currentListingPage: PropTypes.number.isRequired,
  listingPagesLimit: PropTypes.number.isRequired,
  listingItemsCount: PropTypes.number.isRequired
}

MainScreen.defaultProps = {
  listingFiltered: []
}

const mapStateToProps = (state) => {
  return {
    locale: state.localeStore.locale,
    nearMeFilter: state.filtersStore.nearMeFilter,
    mySitesFilter: state.filtersStore.mySitesFilter,
    highwaysFilter: state.filtersStore.highwaysFilter,
    regionsFilter: state.filtersStore.regionsFilter,
    sitesTypeFilter: state.filtersStore.sitesTypeFilter,
    sitesTypeFilterActive: state.filtersStore.sitesTypeFilterActive,
    selectedListingView: state.listingStore.selectedListingView,
    listingFiltered: state.listingStore.listingFiltered,
    currentListingPage: state.listingStore.currentListingPage,
    listingItemsCount: state.listingStore.listingItemsCount,
    listingPagesLimit: state.listingStore.listingPagesLimit
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSitesTypeFiltersDispatch: value => dispatch(setSitesTypeFilters(value)),
    toggleSitesTypeFilterDispatch: value => dispatch(toggleSitesTypeFilter(value)),
    toggleListingViewDispatch: value => dispatch(toggleListingView(value)),
    incrementListingPageDispatch: () => dispatch(incrementListingPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
