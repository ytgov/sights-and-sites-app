import React from 'react';
import {Image, View} from 'react-native';
import SiteTypesStyles from './site-types.styles';
import SiteType from '../../../../types/site.type';
import i18n from '../../../../locale/locale';

const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');

const SiteTypes = props => {
    const {item} = props;
    return (
        <View style={SiteTypesStyles.siteTypesBox}>
            {
                item.site_types.map(siteType => {
                    // TODO move site amenties to global config
                    switch (siteType) {
                        case i18n.t('siteTypes.camping'): {
                            return (<Image key='1' style={SiteTypesStyles.siteTypeIcon} resizeMode="contain"
                                           source={siteTypeCampingIcon}/>)
                        }
                        case (i18n.t('siteTypes.wildlife').split(' ')[0] === siteType.split(' ')[0] ? siteType : i18n.t('siteTypes.wildlife')): {
                            return (<Image key='2' style={SiteTypesStyles.siteTypeIcon} resizeMode="contain"
                                           source={siteTypeWildlifeIcon}/>)
                        }
                        case i18n.t('siteTypes.recreation'): {
                            return (<Image key='3' style={SiteTypesStyles.siteTypeIcon} resizeMode="contain"
                                           source={siteTypeRecreationIcon}/>)
                        }
                        case (i18n.t('siteTypes.history').split(' ')[0] === siteType.split(' ')[0] ? siteType : i18n.t('siteTypes.history')): {
                            return (<Image key='4' style={SiteTypesStyles.siteTypeIcon} resizeMode="contain"
                                           source={siteTypeHistoryIcon}/>)
                        }
                        default: {
                            return null
                        }
                    }
                })
            }
        </View>
    )
}

SiteTypes.propTypes = {
    item: SiteType.isRequired,
}

SiteTypes.defaultProps = {
}

export default SiteTypes;
