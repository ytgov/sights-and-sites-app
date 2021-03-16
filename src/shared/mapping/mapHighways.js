import i18n from '../../locale/locale';
import Highway from '../../models/Highway';

/**
 * Index names from server
 */
export const HighwayNames = {
    ALASKA: 'Alaska Highway',
    KLONDIKE: 'Klondike Highway',
    HAINES: 'Haines Road',
    ROBERT_CAMPBELL: 'Robert Campbell Highway',
    DEMPSTER: 'Dempster Highway',
    CANOL: 'Canol Road',
    ATLIN: 'Atlin Road',
    TAGISH: 'Tagish Road',
    TOP_OF_THE_WORLD: 'Top of the World Highway',
    NAHANNI_RANGE: 'Nahanni Range Road',
    SILVER_TRAIL: 'Silver Trail'
}

/**
 * Convert highway_name from server into object.
 * @TODO: use tid rather than term label for data passing from API.
 *
 * @param highway_name
 * @returns {{roadNumber: number, name: string}}
 */
export const getHighwayFromString = (highway_name) => {
    let highway = {
        name: '',
        roadNumber: 0
    }
    switch (highway_name) {
        case HighwayNames.ALASKA:
            return new Highway(
                'alaska',
                i18n.t('highways.alaska'),
                1,
            )
        case HighwayNames.KLONDIKE:
            return new Highway(
                'klondike',
                i18n.t('highways.klondike'),
                2,
            )
        case HighwayNames.HAINES:
            return new Highway(
                'haines',
                i18n.t('highways.haines'),
                3,
            )
        case HighwayNames.ROBERT_CAMPBELL:
            return new Highway(
                'robertCampbell',
                i18n.t('highways.robertCampbell'),
                4,
            )
        case HighwayNames.DEMPSTER:
            return new Highway(
                'dempster',
                i18n.t('highways.dempster'),
                5,
            )
        case HighwayNames.CANOL:
            return new Highway(
                'canol',
                i18n.t('highways.canol'),
                6,
            )
        case HighwayNames.ATLIN:
            return new Highway(
                'atlin',
                i18n.t('highways.atlin'),
                7,
            )
        case HighwayNames.TAGISH:
            return new Highway(
                'tagish',
                i18n.t('highways.tagish'),
                8,
            )
        case HighwayNames.TOP_OF_THE_WORLD:
            return new Highway(
                'topOfTheWorld',
                i18n.t('highways.topOfTheWorld'),
                9,
            )
        case HighwayNames.NAHANNI_RANGE:
            return new Highway(
                'nahanniRange',
                i18n.t('highways.nahanniRange'),
                10,
            )
        case HighwayNames.SILVER_TRAIL:
            return new Highway(
                'silverTrail',
                i18n.t('highways.silverTrail'),
                11,
            )
        default:
            return new Highway('', '', '');
    }
}
