import React from 'react';
import i18n from '../../locale/locale';

export const SiteTypes = {
    CAMPING: 'Camping',
    RECREATION: 'Recreation',
    WILDLIFE_LANDSCAPE: 'Wildlife and landscapes',
    HISTORY_CULTURE: 'History and culture'
}

/**
 * Map site_type string from server to SiteType object
 */
export const getSiteTypeFromString = (site_type) => {
    const siteType = {
        name: '',
        icon: null,
        background: null
    }
    switch (site_type) {
        case SiteTypes.CAMPING:
            siteType.name = i18n.t('siteTypes.camping')
            siteType.icon = require('./images/siteType/camping.png');
            siteType.background = require('./images/siteType/bg-type-camping.jpg');
            break;
        case SiteTypes.RECREATION:
            siteType.name = i18n.t('siteTypes.recreation')
            siteType.icon = require('./images/siteType/recreation.png');
            siteType.background = require('./images/siteType/bg-type-recreation.jpg');
            break;
        case SiteTypes.HISTORY_CULTURE:
            siteType.name = i18n.t('siteTypes.historyCulture')
            siteType.icon = require('./images/siteType/history-culture.png');
            siteType.background = require('./images/siteType/bg-type-history-culture.jpg');
            break;
        case SiteTypes.WILDLIFE_LANDSCAPE:
            siteType.name = i18n.t('siteTypes.wildlifeLandscape')
            siteType.icon = require('./images/siteType/wildlife.png');
            siteType.background = require('./images/siteType/bg-type-wildlife.jpg');
            break;
    }
    return siteType;
}

