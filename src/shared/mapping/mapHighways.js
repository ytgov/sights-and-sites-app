import i18n from '../../locale/locale';

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
            highway.name = i18n.t('highways.alaska');
            highway.roadNumber = 1;
            break;
        case HighwayNames.KLONDIKE:
            highway.name = i18n.t('highways.klondike');
            highway.roadNumber = 2;
            break;
        case HighwayNames.HAINES:
            highway.name = i18n.t('highways.haines');
            highway.roadNumber = 3;
            break;
        case HighwayNames.ROBERT_CAMPBELL:
            highway.name = i18n.t('highways.robertCampbell');
            highway.roadNumber = 4;
            break;
        case HighwayNames.DEMPSTER:
            highway.name = i18n.t('highways.dempster');
            highway.roadNumber = 5;
            break;
        case HighwayNames.CANOL:
            highway.name = i18n.t('highways.canol');
            highway.roadNumber = 6;
            break;
        case HighwayNames.ATLIN:
            highway.name = i18n.t('highways.atlin');
            highway.roadNumber = 7;
            break;
        case HighwayNames.TAGISH:
            highway.name = i18n.t('highways.tagish');
            highway.roadNumber = 8;
            break;
        case HighwayNames.TOP_OF_THE_WORLD:
            highway.name = i18n.t('highways.topOfTheWorld');
            highway.roadNumber = 9;
            break;
        case HighwayNames.NAHANNI_RANGE:
            highway.name = i18n.t('highways.nahanniRange');
            highway.roadNumber = 10;
            break;
        case HighwayNames.SILVER_TRAIL:
            highway.name = i18n.t('highways.silverTrail');
            highway.roadNumber = 11;
            break;
    }

    return highway;
}
