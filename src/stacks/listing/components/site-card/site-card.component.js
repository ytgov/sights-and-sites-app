import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import SiteCardStyles from './site-card.styles';
import SiteCardInfo from '../site-card-info/site-card-info.component';
import SiteType from '../../../../types/site.type';
import i18n from '../../../../locale/locale';

const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');

const SiteCard = props => {
    const {item, locale, parentLocation, navigation} = props;
    return (
        <View style={SiteCardStyles.siteCardBox}>
            <View style={SiteCardStyles.siteCard}>
                <TouchableOpacity onPress={() => navigation.navigate('SiteDetails', {item})}>
                    <View style={SiteCardStyles.siteTypesBox}>
                        {
                            item.site_types.map(siteType => {
                                // TODO move site amenties to global config
                                switch (siteType) {
                                    case i18n.t('siteTypes.camping'): {
                                        return (<Image key='1' style={SiteCardStyles.siteTypeIcon} resizeMode="contain"
                                                       source={siteTypeCampingIcon}/>)
                                    }
                                    case (i18n.t('siteTypes.wildlife').split(' ')[0] === siteType.split(' ')[0] ? siteType : i18n.t('siteTypes.wildlife')): {
                                        return (<Image key='2' style={SiteCardStyles.siteTypeIcon} resizeMode="contain"
                                                       source={siteTypeWildlifeIcon}/>)
                                    }
                                    case i18n.t('siteTypes.recreation'): {
                                        return (<Image key='3' style={SiteCardStyles.siteTypeIcon} resizeMode="contain"
                                                       source={siteTypeRecreationIcon}/>)
                                    }
                                    case (i18n.t('siteTypes.history').split(' ')[0] === siteType.split(' ')[0] ? siteType : i18n.t('siteTypes.history')): {
                                        return (<Image key='4' style={SiteCardStyles.siteTypeIcon} resizeMode="contain"
                                                       source={siteTypeHistoryIcon}/>)
                                    }
                                    default: {
                                        return null
                                    }
                                }
                            })
                        }
                    </View>
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
