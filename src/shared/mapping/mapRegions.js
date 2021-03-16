import i18n from '../../locale/locale'
import Region from '../../models/Region'

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
    switch (region_name) {
        case RegionNames.CAMPBELL:
            return new Region(
                'campbell',
                i18n.t('regions.campbell'),
                require('./images/region/map-campbell.png'),
                require('./images/region/swoosh-campbell.png'),
            )
        case RegionNames.KLONDIKE:
            return new Region(
                'klondike',
                i18n.t('regions.klondike'),
                require('./images/region/map-klondike.png'),
                require('./images/region/swoosh-klondike.png'),
            )
        case RegionNames.KLUANE:
            return new Region(
                'kluane',
                i18n.t('regions.kluane'),
                require('./images/region/map-kluane.png'),
                require('./images/region/swoosh-kluane.png'),
            )
        case RegionNames.NORTH_YUKON:
            return new Region(
                'northYukon',
                i18n.t('regions.northYukon'),
                require('./images/region/map-north-yukon.png'),
                require('./images/region/swoosh-north-yukon.png'),
            )
        case RegionNames.SILVER_TRAIL:
            return new Region(
                'silverTrail',
                i18n.t('regions.silverTrail'),
                require('./images/region/map-silver-trail.png'),
                require('./images/region/swoosh-silver-trail.png'),
            )
        case RegionNames.SOUTHERN_LAKE:
            return new Region(
                'southernLake',
                i18n.t('regions.southernLake'),
                require('./images/region/map-southern-lakes.png'),
                require('./images/region/swoosh-southern-lakes.png'),
            )
        case RegionNames.WATSON_LAKE:
            return new Region(
                'watsonLake',
                i18n.t('regions.watsonLake'),
                require('./images/region/map-watson-lake.png'),
                require('./images/region/swoosh-watson-lakes.png'),
            )
        case RegionNames.WHITE_HORSE:
            return new Region(
                'whitehorse',
                i18n.t('regions.whitehorse'),
                require('./images/region/map-white-horse.png'),
                require('./images/region/swoosh-whitehorse.png'),
            )
        default:
            return new Region()
    }

}
