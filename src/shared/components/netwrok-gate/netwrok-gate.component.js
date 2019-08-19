import React from 'react';
import { connect } from 'react-redux';
import { NetInfo } from 'react-native';
import PropTypes from 'prop-types';
import { setNetworkStatus } from '../../../store/actions/core';
import { error } from '../../services/notify';

class NetworkGate extends React.Component {
  state = {

  }

  componentDidMount() {
    const { setNetworkStatusDispatch } = this.props;
    /**
    * To get initial connection state
    */
    NetInfo.isConnected.fetch().done(
      isConnected => {
        if (!isConnected) {
          error('Network is not available');
        }
        setNetworkStatusDispatch(!!isConnected)
      }
    );
    /**
     * Subscribe for connection updates
     */
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      isConnected => {
        if (!isConnected) {
          error('Network is not available');
        }
        setNetworkStatusDispatch(!!isConnected)
      }
    );
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

NetworkGate.propTypes = {
  setNetworkStatusDispatch: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

const mapStateToProps = () => {
  return {

  }
};
const mapDispatchToProps = dispatch => {
  return {
    setNetworkStatusDispatch: value => dispatch(setNetworkStatus(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkGate);
