import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Image } from 'react-native-expo-image-cache';
import SiteCard from '../../components/site-card/site-card.component';
import ListViewStyles from './list-view.styles';
import SiteType from '../../../../types/site.type';

class ListViewItem extends React.PureComponent {
  render() {
    const { item, locale, navigation, parentLocation } = this.props;
    const preview = { uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' };
    const { uri } = item;

    return (
      <View noIndent style={ListViewStyles.listItem}>
        <View style={ListViewStyles.listItemImgBox}>
          <Image {...{ preview, uri }} resizeMode='cover' style={ListViewStyles.listItemImg} />
        </View>
        <SiteCard item={item} parentLocation={parentLocation} locale={locale} navigation={navigation} />
      </View>
    );
  }
}

ListViewItem.propTypes = {
  locale: PropTypes.string.isRequired,
  item: SiteType.isRequired,
  parentLocation: PropTypes.shape({ id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number }),
}

ListViewItem.defaultProps = {
  parentLocation: null
}

export default ListViewItem;