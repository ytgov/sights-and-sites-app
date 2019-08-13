import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Location from 'expo-location';
import { updateLocation } from '../../../store/actions/core';

class LocationGate extends React.Component {
  componentDidMount() {
    const { hasUserPassedOnboarding } = this.props;
    if (hasUserPassedOnboarding) {
      this.trackLocation();
    }
  }

  componentDidUpdate(prevProps) {
    const { hasUserPassedOnboarding } = this.props;
    if (hasUserPassedOnboarding !== prevProps.hasUserPassedOnboarding) {
      this.trackLocation();
    }
  }

  async trackLocation() {
    const { updateLocationDispatch } = this.props;
    const enabled = await Location.hasServicesEnabledAsync();
    if (enabled) {
      Location.watchPositionAsync({
        accuracy: Location.Accuracy.Highest,
        distanceInterval: 50,
        timeInterval: 10000
      }, location => {
        updateLocationDispatch({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        });
      })
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

LocationGate.propTypes = {
  hasUserPassedOnboarding: PropTypes.bool.isRequired,
  updateLocationDispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const mapStateToProps = state => {
  return {
    hasUserPassedOnboarding: state.coreStore.hasUserPassedOnboarding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationDispatch: value => dispatch(updateLocation(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationGate);
