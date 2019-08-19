import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Body1 } from '../../../../theme/theme';
import { calculateDistanceBeetweenTwoLocations } from '../../../../shared/services/distance';
import LocationType from '../../../../types/location.type';

class SiteDistance extends React.Component {
  state = {
  }

  async componentWillMount() {
  }

  render() {
    const { location, canGrabLocation, siteLocation, parentLocation } = this.props;
    const distance = null;
    let result = null;
    if (parentLocation) {
      result = calculateDistanceBeetweenTwoLocations(parentLocation, siteLocation);
    } else if (canGrabLocation && location) {
      result = calculateDistanceBeetweenTwoLocations(location, siteLocation);
    }
    return (result) ? <Body1 style={{ color: '#DB9F39' }}>{result}</Body1> : <Body1 style={{ color: '#DB9F39' }}>Can not access location data</Body1>
  }
}

SiteDistance.propTypes = {
  parentLocation: PropTypes.shape({ id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number }),
  location: LocationType,
  siteLocation: LocationType.isRequired,
  canGrabLocation: PropTypes.bool.isRequired
}

SiteDistance.defaultProps = {
  location: null
}

SiteDistance.defaultProps = {
  parentLocation: null
}

const mapStateToProps = (state) => {
  return {
    location: state.coreStore.location,
    canGrabLocation: state.coreStore.canGrabLocation
  };
};

export default connect(mapStateToProps, () => { return {} })(SiteDistance);