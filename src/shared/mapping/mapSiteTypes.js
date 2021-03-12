import React from 'react';
import i18n from '../../locale/locale';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

export const SiteCardType = {
    CAMPING: 'Camping',
    RECREATION: 'Recreation',
    WILDLIFE_LANDSCAPE: 'Wildlife and Landscapes',
    HISTORY_CULTURE: 'History and Culture'
}

const getSiteTypeIcon = (type) => {
    switch (type) {
        case SiteCardType.CAMPING:
            return require('./images/camping.png');
        case SiteCardType.RECREATION:
            return require('./images/recreation.png');
        case SiteCardType.WILDLIFE_LANDSCAPE:
            return require('./images/wildlife.png');
        case SiteCardType.HISTORY_CULTURE:
            return require('./images/history-culture.png');
        default:
            return require('./images/camping.png');
    }
}

const getSiteTypeLabel = (type) => {
    switch (type) {
        case SiteCardType.CAMPING:
            return i18n.t('siteType.camping');
        case SiteCardType.RECREATION:
            return i18n.t('siteType.recreation');
        case SiteCardType.WILDLIFE_LANDSCAPE:
            return i18n.t('siteType.wildlifeLandscape');
        case SiteCardType.HISTORY_CULTURE:
            return i18n.t('siteType.historyCulture');
        default:
            return '';
    }
}

const SiteType = (siteType) => {
    return {
        label: getSiteTypeLabel(siteType),
        icon: getSiteTypeIcon(siteType)
    }
}

/**
 * Map site_type string from server to SiteType object
 */
export const getSiteTypeFromString = (site_type) => {
    switch (site_type) {
        case SiteCardType.CAMPING:
        case SiteCardType.RECREATION:
        case SiteCardType.HISTORY_CULTURE:
        case SiteCardType.WILDLIFE_LANDSCAPE:
            return SiteType(site_type);
        default:
            throw new Error('Invalid site_type value');
    }
}

