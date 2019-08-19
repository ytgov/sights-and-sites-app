import React from 'react';
import { InteractionManager } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLocation, resetLocation } from '../../../store/actions/core';
import { trackLocation } from '../../services/location';
import { APP_CONFIG } from '../../../config';

const timer = require('react-native-timer');

const LOCATION_GRAB_INTERVAL = 'LOCATION_GRAB_INTERVAL';
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

  componentWillUnmount() {
    timer.clearInterval(this);
  }

  trackLocation() {
    const { updateLocationDispatch, resetLocationDispatch } = this.props;
    const { locationUpdateFrequency } = APP_CONFIG.location;
    InteractionManager.runAfterInteractions(() => {
      if (!timer.intervalExists(this, LOCATION_GRAB_INTERVAL)) {
        timer.setInterval(this, LOCATION_GRAB_INTERVAL, () => {
          trackLocation(updateLocationDispatch, resetLocationDispatch)
        }, locationUpdateFrequency);
      }
    })
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

LocationGate.propTypes = {
  hasUserPassedOnboarding: PropTypes.bool.isRequired,
  updateLocationDispatch: PropTypes.func.isRequired,
  resetLocationDispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const mapStateToProps = state => {
  return {
    hasUserPassedOnboarding: state.coreStore.hasUserPassedOnboarding
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocationDispatch: value => dispatch(updateLocation(value)),
    resetLocationDispatch: () => dispatch(resetLocation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationGate);
