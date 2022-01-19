import i18n from '~locale/locale';
import Service from '~app/models/Service';

export const ServiceNames = {
    OUTHOUSE_UNISEX: 'outhouse_unisex',
    BEAR_PROOF_GABAGE_BINS: 'bear_proof_garbage_bins',
    BLUE_BEAR_PROOF_RECYCLING: 'blue_bear_proof_recycling_',
    PICNIC_TABLES: 'picnic_tables',
    COOK_SHELTER: 'cook_shelter',
    FIRE_RING: 'fire_ring',
    BEAR_PROOF_CACHE: 'bear_proof_cache',
    BOAT_LAUNCH: 'boat_launch',
    BOAT_DOCK: 'boat_dock',
    HIKING_TRAILS: 'hiking_trails',
    PLAYGROUND: 'playground',
    AT_LEAST_ONE_WHEELCHAIRE_ACCESS: 'at_least_one_wheelchair_ac',
    ONE_WHEELCHAIRE_CAMP: 'one_wheelchair_camp',
    HAND_PUMP_WATER_TANK: 'hand_pump_or_water_tank_pr',
    SANDY_COBBLE_BEACH: 'sandy_or_cobble_beach_with',
    VIEWING_STRUCTURE_OR_SIGN: 'viewing_structures_or_sign',
    INTERPRETIVE_CENTER: 'interpretive_centre',
    GROUP_CAMPSITE: 'group_campsite',
    TENT_PADS: 'tent_pads_or_sites_availab',
    SWIMMING_AREA_DOCK: 'swimming_area_or_dock_no_l',
    CHANGE_ROOM: 'change_room',
    OUTDOOR_AMPITHEATHE: 'outdoor_ampitheatre',
    WALK_IN_SITES: 'walk_in_sites',
}

// beach, boat_launch, outhouse, outhouse_accessible, playground, trail
export const getServiceFromString = (id) => {
    return new Service(
        id,
        require('./images/services/beach.png'),
    );
}
