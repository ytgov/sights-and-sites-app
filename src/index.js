import React from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';
import RootNavigation from './stacks/stacks';

class AppRoot extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    core: state.coreStore,
    filters: state.filtersStore,
    locale: state.localeStore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot);
