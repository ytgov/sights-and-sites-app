import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import RootNavigation from './stacks/stacks';

class AppRoot extends React.Component {
  state = {
    mounted: false
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    return (
      // <View style={{ paddingTop: 200 }}>        
      //   <Text>{this.props.friends.possible.length}</Text>
      // </View>
      <RootNavigation />
    );
  }
}

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(AppRoot);