/* eslint-disable global-require */
export const APP_CONFIG = {
  listing: {
    itemsToShow: 2
  },
  search: {
    debounceDelay: 1000,
    recentQueriesToShow: 10,
    itemsToShow: 2
  },
  location: {
    locationUpdateFrequency: 5000
  }
}

export const SITE_AMENTIES = {
  'outhouses': {
    id: 'outhouses',
    en: 'Unisex outhouses (gender-neutral)',
    fr: 'Unisex outhouses (gender-neutral)',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_outhouses.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_outhouses.png')
  },
  'bear-proof-garbage-bins': {
    id: 'bear-proof-garbage-bins',
    en: 'Bear-proof garbage bins',
    fr: 'Bear-proof garbage bins',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_garbage.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_garbage.png')
  },
  'bear-proof-recycling-bins': {
    id: 'bear-proof-recycling-bins',
    en: 'Bear-proof recycling bins',
    fr: 'Bear-proof recycling bins',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_recycling.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_recycling.png')
  },
  'picnic-tables': {
    id: 'picnic-tables',
    en: 'Picnic tables',
    fr: 'Picnic tables',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_picnic_tables.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_picnic_tables.png')
  },
  'cook-shelter': {
    id: 'cook-shelter',
    en: 'Cook shelter',
    fr: 'Cook shelter',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_cook_shelter.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_cook_shelter.png')
  },
  'fire-ring': {
    id: 'fire-ring',
    en: 'Fire ring',
    fr: 'Fire ring',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_fire_ring.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_fire_ring.png')
  },
  'bear-proof-cache-or-lockers': {
    id: 'bear-proof-cache-or-lockers',
    en: 'Bear-proof cache or lockers',
    fr: 'Bear-proof cache or lockers',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_lockers.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_lockers.png')
  },
  'boat-launch': {
    id: 'boat-launch',
    en: 'Boat launch',
    fr: 'Boat launch',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_boat.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_boat.png')
  },
  'dock': {
    id: 'dock',
    en: 'Dock',
    fr: 'Dock',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_dock.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_dock.png')
  },
  'hiking-trails': {
    id: 'hiking-trails',
    en: 'Hiking trails',
    fr: 'Hiking trails',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_hiking_trails.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_hiking_trails.png')
  },
  'playground': {
    id: 'playground',
    en: 'Playground',
    fr: 'Playground',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_playground.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_playground.png')
  },
  'wheelchair-accessible-outhouse': {
    id: 'wheelchair-accessible-outhouse',
    en: 'Wheelchair-accessible-outhouse',
    fr: 'Wheelchair-accessible-outhouse',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_wheelchair.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_wheelchair.png')
  },
  'campsite-designed-for-the-mobility-impaired': {
    id: 'campsite-designed-for-the-mobility-impaired',
    en: 'Campsite designed for the mobility-impaired',
    fr: 'Campsite designed for the mobility-impaired',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_camp_wheelchair.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_camp_wheelchair.png')
  },
  'hand-pump-or-water-tank': {
    id: 'hand-pump-or-water-tank',
    en: 'A hand pump or water tank is provided',
    fr: 'A hand pump or water tank is provided',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_hand_pump.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_hand_pump.png')
  },
  'sandy-or-cobble-beach': {
    id: 'sandy-or-cobble-beach',
    en: 'Sandy or cobble beach',
    fr: 'Sandy or cobble beach',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_beach.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_beach.png')
  },
  'viewing-structures': {
    id: 'viewing-structures',
    en: 'Viewing structures or signage about local cultural and natural history',
    fr: 'Viewing structures or signage about local cultural and natural history',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_viewing.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_viewing.png')
  },
  'interpretive-centre': {
    id: 'interpretive-centre',
    en: 'Interpretive centre',
    fr: 'Interpretive centre',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_interpretive.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_interpretive.png')
  },
  'group-campsite': {
    id: 'group-campsite',
    en: 'Group campsite available',
    fr: 'Group campsite available',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_group_campsite.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_group_campsite.png')
  },
  'tent-pads': {
    id: 'tent-pads',
    en: 'Tent pads or sites accessible via walking trail',
    fr: 'Tent pads or sites accessible via walking trail',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_tend_pads.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_tend_pads.png')
  },
  'swimming-area': {
    id: 'swimming-area',
    en: 'Swimming area or dock. No lifeguard',
    fr: 'Swimming area or dock. No lifeguard',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_swimming.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_swimming.png')
  },
  'change-room': {
    id: 'change-room',
    en: 'Change room',
    fr: 'Change room',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_change_room.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_change_room.png')
  },
  'outdoor-amphitheatre': {
    id: 'outdoor-amphitheatre',
    en: 'Outdoor amphitheatre. Wheelchair accessible',
    fr: 'Outdoor amphitheatre. Wheelchair accessible',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_theatre.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_theatre.png')
  }
}

