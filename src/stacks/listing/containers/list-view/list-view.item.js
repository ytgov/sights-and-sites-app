import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import SiteCard from '../../components/site-card/site-card.component';
import ListViewStyles from './list-view.styles';

class ListViewItem extends React.PureComponent {
  render() {
    const { item, navigation } = this.props;
    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' };
    const { uri } = item;

    return (
      <View noIndent style={ListViewStyles.listItem}>
        <View style={ListViewStyles.listItemImgBox}>
          <Image {...{ preview, uri }} resizeMode='cover' style={ListViewStyles.listItemImg} />
        </View>
        <SiteCard item={item} navigation={navigation} />
      </View>
    );
  }
}

export default ListViewItem;