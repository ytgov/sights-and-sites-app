import React from 'react';
import { Image, View } from 'react-native';
import NearbySitesStyles from './nearby-sites.styles';
import { H2, Helpers } from '../../../../theme/theme';
import ListViewItem from '../../containers/list-view/list-view.item';

const nearByIcon = require('../../../../../assets/stacks/listing/nearby-sites-icon.png');

class NearbySites extends React.Component {
  state = {

  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={NearbySitesStyles.nearbySitesBox}>
          <Image style={NearbySitesStyles.nearbySitesIcon} source={nearByIcon} resizeMode='contain' />
          <H2 style={Helpers.textAlignCenter}>Nearby sites</H2>
        </View>
        <ListViewItem item={{ uri: 'https://www.mountainphotography.com/images/xl/20160904-Twin-Lakes.jpg' }} navigation={navigation} />
      </View>
    )
  }
}

export default NearbySites;