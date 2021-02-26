import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Image} from 'react-native-expo-image-cache';
import SiteCard from '../../components/site-card/site-card.component';
import ListViewStyles from './list-view.styles';
import SiteType from '../../../../types/site.type';
import {APP_CONFIG} from '../../../../config';

const fallback = require('../../../../../assets/common/fallback.png');

// const fallback = 
class ListViewItem extends React.PureComponent {
    state = {}

    render() {
        const {item, locale, navigation, parentLocation} = this.props;
        const preview = {uri: APP_CONFIG.cache.imagePreview};
        const uri = item.image_url;

        return (
            <View noIndent style={ListViewStyles.listItem}>
                <View style={ListViewStyles.listItemImgBox}>
                    <TouchableOpacity onPress={() => navigation.navigate('SiteDetails', {item})}>
                        <Image
                            {...{preview, uri}}
                            tint={APP_CONFIG.cache.tint}
                            transitionDuration={APP_CONFIG.cache.transitionDuration}
                            resizeMode='cover'
                            fallback={fallback}
                            style={ListViewStyles.listItemImg}/>
                    </TouchableOpacity>
                </View>
                <SiteCard item={item} parentLocation={parentLocation} locale={locale} navigation={navigation}/>
            </View>
        );
    }
}

ListViewItem.propTypes = {
    locale: PropTypes.string.isRequired,
    item: SiteType.isRequired,
    parentLocation: PropTypes.shape({id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number}),
}

ListViewItem.defaultProps = {
    parentLocation: null
}

export default ListViewItem;
