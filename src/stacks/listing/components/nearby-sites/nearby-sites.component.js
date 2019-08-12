import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, View, ActivityIndicator } from 'react-native';
import NearbySitesStyles from './nearby-sites.styles';
import { H2, Helpers } from '../../../../theme/theme';
import ListViewItem from '../../containers/list-view/list-view.item';

const nearByIcon = require('../../../../../assets/stacks/listing/nearby-sites-icon.png');

class NearbySites extends React.Component {
  state = {
    item: null,
    loading: true
  }

  componentDidMount() {
    const { listingRaw, itemId } = this.props;
    const item = listingRaw.filter(site => site.id === itemId)[0];
    this.setState({ item, loading: false })
  }

  render() {
    const { navigation, locale } = this.props;
    const { item, loading } = this.state;
    return loading ?
      <ActivityIndicator style={{}} size="large" color="#ffffff" /> :
      <View>
        <View style={NearbySitesStyles.nearbySitesBox}>
          <Image style={NearbySitesStyles.nearbySitesIcon} source={nearByIcon} resizeMode='contain' />
          <H2 style={Helpers.textAlignCenter}>Nearby sites</H2>
        </View>
        <ListViewItem item={item} locale={locale} navigation={navigation} />
      </View>
  }
}

NearbySites.propTypes = {
  itemId: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
  listingRaw: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
}

const mapStateToProps = (state) => {
  return {
    listingRaw: state.listingStore.listingRaw
  };
};

export default connect(mapStateToProps, () => { return {} })(NearbySites);