import React from 'react';
import { Dimensions, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content } from 'native-base';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import { H2, Body1, COMMON, Helpers } from '../../../../theme/theme';
import FooterTabs from '../../components/footer-tabs/footer-tabs.component';
import SitesTypeFilter from '../../components/sites-type-filter/sites-type-filter.component';
import { toggleSitesTypeFilter, setSitesTypeFilters } from '../../../../store/actions/filters';
import { toggleListingView } from '../../../../store/actions/listing';
import MainScreenStyles from './main.screen.styles';

const { width, height } = Dimensions.get('window');

class MainScreen extends React.Component {
  state = {

  }

  render() {
    const { toggleListingViewDispatch, selectedListingView } = this.props;
    return (
      <Container>
        <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content" />
        <Content>
          <View style={Helpers.flexDirectionRow}>
            <View style={[MainScreenStyles.switchBtnBox, MainScreenStyles.switchBtnBoxLeft]}>
              <TouchableOpacity style={[MainScreenStyles.switchBtn, selectedListingView === 'LIST' && MainScreenStyles.switchBtnActive]} onPress={() => { toggleListingViewDispatch('LIST') }}>
                <Body1 style={MainScreenStyles.switchBtnText}>LIST</Body1>
              </TouchableOpacity>
            </View>
            <View style={[MainScreenStyles.switchBtnBox, MainScreenStyles.switchBtnBoxRight]}>
              <TouchableOpacity style={[MainScreenStyles.switchBtn, selectedListingView === 'MAP' && MainScreenStyles.switchBtnActive]} onPress={() => { toggleListingViewDispatch('MAP') }}>
                <Body1 style={MainScreenStyles.switchBtnText}>MAP</Body1>
              </TouchableOpacity>
            </View>
          </View>

          {
            (selectedListingView === 'MAP') ? (
              <MapView
                initialRegion={{
                  latitude: 63.389423,
                  longitude: -136.714739,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{ width, height, flex: 1 }} />
            ) : (<View style={{ paddingTop: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View>
                <H2 black style={{ textAlign: 'center' }}>List view</H2>
              </View>
            </View>)
          }

        </Content>

        <View style={{ position: 'relative', height: 'auto' }}>
          <FooterTabs {...this.props} />
          <SitesTypeFilter {...this.props} />
        </View>
      </Container >)
  }
}

MainScreen.propTypes = {
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  sitesTypeFilterActive: PropTypes.bool.isRequired,
  sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  toggleSitesTypeFilterDispatch: PropTypes.func.isRequired,
  toggleListingViewDispatch: PropTypes.func.isRequired,
  selectedListingView: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    nearMeFilter: state.filtersStore.nearMeFilter,
    mySitesFilter: state.filtersStore.mySitesFilter,
    highwaysFilter: state.filtersStore.highwaysFilter,
    regionsFilter: state.filtersStore.regionsFilter,
    sitesTypeFilter: state.filtersStore.sitesTypeFilter,
    sitesTypeFilterActive: state.filtersStore.sitesTypeFilterActive,
    selectedListingView: state.listingStore.selectedListingView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSitesTypeFiltersDispatch: value => dispatch(setSitesTypeFilters(value)),
    toggleSitesTypeFilterDispatch: value => dispatch(toggleSitesTypeFilter(value)),
    toggleListingViewDispatch: value => dispatch(toggleListingView(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
