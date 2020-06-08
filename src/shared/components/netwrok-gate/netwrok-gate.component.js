import React from 'react';
import {connect} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';

import PropTypes from 'prop-types';
import {setNetworkStatus} from '../../../store/actions/core';

class NetworkGate extends React.Component {
    state = {}

    netinfo_subscriber = null;
    componentDidMount() {
        const {setNetworkStatusDispatch} = this.props;
        /**
         * To get initial connection state
         */
        NetInfo.fetch().then(state => {
            setNetworkStatusDispatch(!!state.isConnected)
        });
        /**
         * Subscribe for connection updates
         */
        this.netinfo_subscriber = NetInfo.addEventListener(state => {
            setNetworkStatusDispatch(state.isConnected)
        });
    }
    componentWillUnmount() {
        if (this.netinfo_subscriber) {
            this.netinfo_subscriber()
        }
    }

    render() {
        const {children} = this.props;
        return children;
    }
}

NetworkGate.propTypes = {
    setNetworkStatusDispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

const mapStateToProps = () => {
    return {}
};
const mapDispatchToProps = dispatch => {
    return {
        setNetworkStatusDispatch: value => dispatch(setNetworkStatus(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NetworkGate);
