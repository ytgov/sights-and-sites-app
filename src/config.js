/* eslint-disable global-require */
export const APP_CONFIG = {
  version: '1.0.0',
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
  },
  cache: {
    imagePreview: 'data:image/png;base64,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',
    transitionDuration: 500,
    tint: 'dark'
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

