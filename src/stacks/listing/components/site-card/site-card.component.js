import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import SiteCardStyles from './site-card.styles';
import SiteCardInfo from '../site-card-info/site-card-info.component';
import SiteType from '../../../../types/site.type';
import SiteTypes from '../site-types/site-types.component';

const SiteCard = props => {
    const {item, locale, parentLocation, navigation} = props;
    return (
        <View style={SiteCardStyles.siteCardBox}>
            <View style={SiteCardStyles.siteCard}>
                <TouchableOpacity onPress={() => navigation.navigate('SiteDetails', {item})}>
                    <SiteTypes item={item} />
                    <SiteCardInfo item={item} parentLocation={parentLocation} locale={locale}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

SiteCard.propTypes = {
    item: SiteType.isRequired,
    locale: PropTypes.string.isRequired,
    parentLocation: PropTypes.shape({id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number}),
}

SiteCard.defaultProps = {
    parentLocation: null
}

export default SiteCard;
