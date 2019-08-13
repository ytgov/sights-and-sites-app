import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPreciseDistance } from 'geolib';
import { Body1 } from '../../../../theme/theme';

class SiteDistance extends React.Component {
  state = {
    measureAcuracy: 1
  }

  render() {
    const { measureAcuracy } = this.state;
    const { location, siteLocation, parentLocation } = this.props;
    // TODO add check for location there
    let distance = null;
    let result = null;
    if (parentLocation && siteLocation && siteLocation.latitude && siteLocation.longitude) {
      distance = getPreciseDistance(
        { latitude: parentLocation.latitude, longitude: parentLocation.longitude },
        { latitude: siteLocation.latitude, longitude: siteLocation.longitude },
        measureAcuracy
      )
      if (!distance) {
        result = 'Calculating'
      }
      if (distance <= 500) {
        result = `${distance} m`
      } else {
        result = `${(distance / 1000).toFixed(2)} km`
      }
    } else if (location && location.latitude && location.longitude && siteLocation && siteLocation.latitude && siteLocation.longitude) {
      distance = getPreciseDistance(
        { latitude: location.latitude, longitude: location.longitude },
        { latitude: siteLocation.latitude, longitude: siteLocation.longitude },
        measureAcuracy
      )
      if (!distance) {
        result = 'Calculating'
      }
      if (distance <= 500) {
        result = `${distance} m`
      } else {
        result = `${(distance / 1000).toFixed(2)} km`
      }
    }

    return (<Body1 style={{ color: '#DB9F39' }}>
      {(distance && distance <= 50) ? 'You`re at the spot' : `${result} from here`}
    </Body1>)
  }
}

SiteDistance.propTypes = {
  parentLocation: PropTypes.shape({ id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number })
}

SiteDistance.defaultProps = {
  parentLocation: null
}

const mapStateToProps = (state) => {
  return {
    location: state.coreStore.location
  };
};

export default connect(mapStateToProps, () => { return {} })(SiteDistance);