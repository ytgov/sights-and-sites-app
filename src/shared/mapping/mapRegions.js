import i18n from '../../locale/locale';

/**
 * Index names from server
 */
export const RegionNames = {
    CAMPBELL: 'Campbell',
    KLONDIKE: 'Klondike',
    KLUANE: 'Kluane',
    NORTH_YUKON: 'North Yukon',
    SILVER_TRAIL: 'Silver Trail',
    SOUTHERN_LAKE: 'Southern Lakes',
    WATSON_LAKE: 'Watson Lake',
    WHITE_HORSE: 'Whitehorse',
}

/**
 * Convert region name from server into object.
 * @TODO: use tid rather than term label for data passing from API.
 *
 * @param region_name
 * @returns {{swoosh: null, name: string, map: null}}
 */
export const getRegionFromString = (region_name) => {
    const region = {
        name: '',
        map: null,
        swoosh: null
    }
    switch (region_name) {
        case RegionNames.CAMPBELL:
            region.name = i18n.t('regions.campbell');
            region.map = require('./images/region/map-campbell.png');
            region.swoosh = require('./images/region/swoosh-campbell.png');
            break;
        case RegionNames.KLONDIKE:
            region.name = i18n.t('regions.klondike');
            region.map = require('./images/region/map-klondike.png');
            region.swoosh = require('./images/region/swoosh-klondike.png');
            break;
        case RegionNames.KLUANE:
            region.name = i18n.t('regions.kluane');
            region.map = require('./images/region/map-kluane.png');
            region.swoosh = require('./images/region/swoosh-kluane.png');
            break;
        case RegionNames.NORTH_YUKON:
            region.name = i18n.t('regions.northYukon');
            region.map = require('./images/region/map-north-yukon.png');
            region.swoosh = require('./images/region/swoosh-north-yukon.png');
            break;
        case RegionNames.SILVER_TRAIL:
            region.name = i18n.t('regions.silverTrail');
            region.map = require('./images/region/map-silver-trail.png');
            region.swoosh = require('./images/region/swoosh-silver-trail.png');
            break;
        case RegionNames.SOUTHERN_LAKE:
            region.name = i18n.t('regions.southernLake');
            region.map = require('./images/region/map-southern-lakes.png');
            region.swoosh = require('./images/region/swoosh-southern-lakes.png');
            break;
        case RegionNames.WATSON_LAKE:
            region.name = i18n.t('regions.watsonLake');
            region.map = require('./images/region/map-watson-lake.png');
            region.swoosh = require('./images/region/swoosh-watson-lakes.png');
            break;
        case RegionNames.WHITE_HORSE:
            region.name = i18n.t('regions.whitehorse');
            region.map = require('./images/region/map-white-horse.png');
            region.swoosh = require('./images/region/swoosh-whitehorse.png');
            break;
    }
    return region;
}
