import React from 'react';
import i18n from '../../locale/locale';
import SiteType from '../../models/SiteType';

export const SiteTypeIds = {
    CAMPING: 'camping',
    RECREATION: 'recreation',
    WILDLIFE_LANDSCAPE: 'wildlifeLandscape',
    HISTORY_CULTURE: 'historyCulture'
}

/**
 * Raw values from server
 */
export const SiteTypesRaw = {
    CAMPING: 'Camping',
    RECREATION: 'Recreation',
    WILDLIFE_LANDSCAPE: 'Wildlife and landscapes',
    HISTORY_CULTURE: 'History and culture'
}

/**
 * Map site_type string from server to SiteType object
 */
export const getSiteTypeFromString = (site_type) => {
    switch (site_type) {
        case SiteTypesRaw.CAMPING:
            return new SiteType(
                SiteTypeIds.CAMPING,
                i18n.t('siteTypes.camping'),
                require('./images/siteType/camping.png'),
                require('./images/siteType/bg-type-camping.jpg')
            );
        case SiteTypesRaw.RECREATION:
            return new SiteType(
                SiteTypeIds.RECREATION,
                i18n.t('siteTypes.recreation'),
                require('./images/siteType/recreation.png'),
                require('./images/siteType/bg-type-recreation.jpg')
            );
        case SiteTypesRaw.HISTORY_CULTURE:
            return new SiteType(
                SiteTypeIds.HISTORY_CULTURE,
                i18n.t('siteTypes.historyCulture'),
                require('./images/siteType/history-culture.png'),
                require('./images/siteType/bg-type-history-culture.jpg')
            );
        case SiteTypesRaw.WILDLIFE_LANDSCAPE:
            return new SiteType(
                SiteTypeIds.WILDLIFE_LANDSCAPE,
                i18n.t('siteTypes.wildlifeLandscape'),
                require('./images/siteType/wildlife.png'),
                require('./images/siteType/bg-type-wildlife.jpg')
            );
        default:
            return new SiteType();
    }
}

