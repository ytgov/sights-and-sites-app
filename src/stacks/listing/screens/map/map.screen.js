import React from 'react';
import { Dimensions, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content } from 'native-base';
import MapView from 'react-native-maps';
import PropTypes from 'prop-types';
import { COMMON } from '../../../../theme/theme';
import FooterTabs from '../../components/footer-tabs/footer-tabs.component';
import SitesTypeFilter from '../../components/sites-type-filter/sites-type-filter.component';
import { toggleSitesTypeFilter, setSitesTypeFilters } from '../../../../store/actions/filters';

const { width, height } = Dimensions.get('window');

class MapScreen extends React.Component {
  state = {

  }

  render() {
    return (
      <Container>
        <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content" />
        <Content>
          <MapView
            initialRegion={{
              latitude: 63.389423,
              longitude: -136.714739,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{ width, height, flex: 1 }} />
        </Content>
        <View style={{ position: 'relative', height: 'auto' }}>
          <FooterTabs {...this.props} />
          <SitesTypeFilter {...this.props} />
        </View>

      </Container >)
  }
}

MapScreen.propTypes = {
  nearMeFilter: PropTypes.bool.isRequired,
  mySitesFilter: PropTypes.bool.isRequired,
  sitesTypeFilterActive: PropTypes.bool.isRequired,
  sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number])).isRequired,
  toggleSitesTypeFilterDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    nearMeFilter: state.filtersStore.nearMeFilter,
    mySitesFilter: state.filtersStore.mySitesFilter,
    highwaysFilter: state.filtersStore.highwaysFilter,
    regionsFilter: state.filtersStore.regionsFilter,
    sitesTypeFilter: state.filtersStore.sitesTypeFilter,
    sitesTypeFilterActive: state.filtersStore.sitesTypeFilterActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSitesTypeFiltersDispatch: value => dispatch(setSitesTypeFilters(value)),
    toggleSitesTypeFilterDispatch: value => dispatch(toggleSitesTypeFilter(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
