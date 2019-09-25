import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, View, ActivityIndicator } from 'react-native';
import NearbySitesStyles from './nearby-sites.styles';
import { H2, Helpers } from '../../../../theme/theme';
import ListViewItem from '../../containers/list-view/list-view.item';
import i18n from '../../../../locale/locale';

const nearByIcon = require('../../../../../assets/stacks/listing/nearby-sites-icon.png');

class NearbySites extends React.Component {
  state = {
    item: null,
    loading: true
  }

  componentDidMount() {
    this.getSiteData()
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (prevProps.itemId !== itemId) {
      this.getSiteData();
    }
  }

  getSiteData() {
    const { listingRaw, itemId } = this.props;
    const item = listingRaw.filter(site => site.site_id === itemId)[0];
    this.setState({ item, loading: false });
  }

  render() {
    const { navigation, locale, parentLocation } = this.props;
    const { item, loading } = this.state;
    return loading ?
      <ActivityIndicator style={{}} size="large" color="#ffffff" /> :
      <View>
        <View style={NearbySitesStyles.nearbySitesBox}>
          <Image style={NearbySitesStyles.nearbySitesIcon} source={nearByIcon} resizeMode='contain' />
          <H2 style={Helpers.textAlignCenter}>{i18n.t('siteDetails.nearBySites')}</H2>
        </View>
        <ListViewItem parentLocation={parentLocation} item={item} locale={locale} navigation={navigation} />
      </View>
  }
}

NearbySites.propTypes = {
  itemId: PropTypes.number.isRequired,
  locale: PropTypes.string.isRequired,
  parentLocation: PropTypes.shape({ id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number }),
  listingRaw: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired
}

NearbySites.defaultProps = {
  parentLocation: null

}
const mapStateToProps = (state) => {
  return {
    listingRaw: state.listingStore.listingRaw
  };
};

export default connect(mapStateToProps, () => { return {} })(NearbySites);