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
    imagePreview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7dAxAQAgEAAhdf7+qQxlB2+FCOyZuYtvZ5EIjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYPQAzCsBkBG+hRUAAAAASUVORK5CYII=',
    transitionDuration: 500,
    tint: 'dark'
  }
}

export const SITE_AMENTIES = {
  'outhouses': {
    id: 'outhouses',
    en: 'Unisex outhouses',
    fr: 'Toilettes extérieures unisexes',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_outhouses.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_outhouses.png')
  },
  'bear-proof-garbage-bins': {
    id: 'bear-proof-garbage-bins',
    en: 'Bear-proof garbage bins',
    fr: 'Poubelles à l’épreuve des ours',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_garbage.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_garbage.png')
  },
  'bear-proof-recycling-bins': {
    id: 'bear-proof-recycling-bins',
    en: 'Recycling bins',
    fr: 'Bacs de recyclage ',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_recycling.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_recycling.png')
  },
  'picnic-tables': {
    id: 'picnic-tables',
    en: 'Picnic tables',
    fr: 'Tables de pique-nique',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_picnic_tables.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_picnic_tables.png')
  },
  'cook-shelter': {
    id: 'cook-shelter',
    en: 'Cook shelter',
    fr: 'Abri-cuisine',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_cook_shelter.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_cook_shelter.png')
  },
  'fire-ring': {
    id: 'fire-ring',
    en: 'Fire ring',
    fr: 'Foyer pour feux de camp',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_fire_ring.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_fire_ring.png')
  },
  'bear-proof-cache-or-lockers': {
    id: 'bear-proof-cache-or-lockers',
    en: 'Bear-proof cache or lockers',
    fr: 'Cache ou casiers à l’épreuve des ours',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_lockers.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_lockers.png')
  },
  'boat-launch': {
    id: 'boat-launch',
    en: 'Boat launch',
    fr: 'Rampe de mise à l’eau',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_boat.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_boat.png')
  },
  'dock': {
    id: 'dock',
    en: 'Dock',
    fr: 'Quai',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_dock.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_dock.png')
  },
  'hiking-trails': {
    id: 'hiking-trails',
    en: 'Hiking trails',
    fr: 'Sentiers de randonnée',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_hiking_trails.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_hiking_trails.png')
  },
  'playground': {
    id: 'playground',
    en: 'Playground',
    fr: 'Terrain de jeux',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_playground.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_playground.png')
  },
  'wheelchair-accessible-outhouse': {
    id: 'wheelchair-accessible-outhouse',
    en: 'Accessible outhouse',
    fr: 'Toilette extérieure accessible',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_wheelchair.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_wheelchair.png')
  },
  'campsite-designed-for-the-mobility-impaired': {
    id: 'campsite-designed-for-the-mobility-impaired',
    en: 'Accessible campsite',
    fr: 'Terrains de camping accessible',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_camp_wheelchair.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_camp_wheelchair.png')
  },
  'hand-pump-or-water-tank': {
    id: 'hand-pump-or-water-tank',
    en: 'Untreated water available',
    fr: 'Eau non traitée disponible',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_hand_pump.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_hand_pump.png')
  },
  'sandy-or-cobble-beach': {
    id: 'sandy-or-cobble-beach',
    en: 'Beach',
    fr: 'Plage',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_beach.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_beach.png')
  },
  'viewing-structures': {
    id: 'viewing-structures',
    en: 'Viewing structures or signage',
    fr: 'Ouvrages d’observation ou panneaux d’interprétation',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_viewing.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_viewing.png')
  },
  'interpretive-centre': {
    id: 'interpretive-centre',
    en: 'Interpretive centre',
    fr: 'Centre d’interprétation',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_interpretive.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_interpretive.png')
  },
  'group-campsite': {
    id: 'group-campsite',
    en: 'Group campsite',
    fr: 'Camping de groupe',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_group_campsite.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_group_campsite.png')
  },
  'tent-pads': {
    id: 'tent-pads',
    en: 'Tent sites via walking trail ',
    fr: 'Terrains de camping via sentier pédestre',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_tend_pads.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_tend_pads.png')
  },
  'swimming-area': {
    id: 'swimming-area',
    en: 'Swimming area or dock',
    fr: 'Quai ou aire de baignade',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_swimming.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_swimming.png')
  },
  'change-room': {
    id: 'change-room',
    en: 'Change room',
    fr: 'Vestaire',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_change_room.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_change_room.png')
  },
  'outdoor-amphitheatre': {
    id: 'outdoor-amphitheatre',
    en: 'Outdoor amphitheatre',
    fr: 'Amphithéâtre extérieur',
    imageInactive: require('../assets/stacks/listing/amenties/inactive/b_theatre.png'),
    imageActive: require('../assets/stacks/listing/amenties/active/y_theatre.png')
  }
}

