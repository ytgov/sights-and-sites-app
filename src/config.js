/* eslint-disable global-require */
export const APP_CONFIG = {
    version: '1.0.3',
    listing: {
        itemsToShow: 10
    },
    search: {
        debounceDelay: 1000,
        recentQueriesToShow: 10,
        itemsToShow: 10
    },
    location: {
        locationUpdateFrequency: 5000
    },
    cache: {
        imagePreview: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC0SURBVHgB7dAxAQAgEAAhdf7+qQxlB2+FCOyZuYtvZ5EIjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYCQwEhgJjARGAiOBkcBIYPQAzCsBkBG+hRUAAAAASUVORK5CYII=',
        transitionDuration: 500,
        tint: 'dark'
    },
    map_box: 'pk.eyJ1IjoieWdlc2VydmljZXMiLCJhIjoiY2s4MDgyZ3JhMGQ0dDNscGU1YmplOTEzNCJ9.94bGsBH18qzFY-Cd5kjZvA',
    apiKey: 'bb09d14d65ca684ade6aab47b19d4c0d',
    placesUrl: 'https://api.yukon.ca/campground-and-recreation/v1/sites'
    // placesUrl: 'https://virtserver.swaggerhub.com/GOY/CampgroundAndRecreationSites/1.0.0/sites'
    // placesUrl: 'https://yukon.cms-uat.yukon.ca/en/api/v1/campground-and-recreation-sites'
};

export const SITE_AMENTIES = {
    'outhouse': {
        id: 'outhouse',
        en: 'Outhouse unisex',
        fr: 'Toilettes extérieures unisexes',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_outhouses.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_outhouses.png')
    },
    'bear_proof_garbage_bins': {
        id: 'bear_proof_garbage_bins',
        en: 'Bear_proof garbage bins',
        fr: 'Poubelles à l’épreuve des ours',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_garbage.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_garbage.png')
    },
    'bear_proof_recycling_bins': {
        id: 'bear_proof_recycling_bins',
        en: 'Recycling bins',
        fr: 'Bacs de recyclage ',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_recycling.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_recycling.png')
    },
    'picnic_tables': {
        id: 'picnic_tables',
        en: 'Picnic tables',
        fr: 'Tables de pique_nique',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_picnic_tables.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_picnic_tables.png')
    },
    'cook_shelter': {
        id: 'cook_shelter',
        en: 'Cook shelter',
        fr: 'Abri_cuisine',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_cook_shelter.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_cook_shelter.png')
    },
    'fire_ring': {
        id: 'fire_ring',
        en: 'Fire ring',
        fr: 'Foyer pour feux de camp',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_fire_ring.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_fire_ring.png')
    },
    'bear_proof_cache_or_lockers': {
        id: 'bear_proof_cache_or_lockers',
        en: 'Bear_proof cache or lockers',
        fr: 'Cache ou casiers à l’épreuve des ours',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_lockers.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_lockers.png')
    },
    'boat_launch': {
        id: 'boat_launch',
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
    'trail': {
        id: 'trail',
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
    'outhouse_accessible': {
        id: 'outhouse_accessible',
        en: 'At least one wheelchair accessible outhouse',
        fr: 'Au moins une toilette extérieure accessible en fauteuil roulant',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_wheelchair.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_wheelchair.png')
    },
    'campsite_designed_for_the_mobility_impaired': {
        id: 'campsite_designed_for_the_mobility_impaired',
        en: 'Accessible campsite',
        fr: 'Terrains de camping accessible',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_camp_wheelchair.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_camp_wheelchair.png')
    },
    'hand_pump_or_water_tank': {
        id: 'hand_pump_or_water_tank',
        en: 'Untreated water available',
        fr: 'Eau non traitée disponible',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_hand_pump.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_hand_pump.png')
    },
    'beach': {
        id: 'beach',
        en: 'Sandy or cobble beach within short walking distance',
        fr: 'Plage de sable ou de galets facilement accessible à pied',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_beach.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_beach.png')
    },
    'viewing_structures': {
        id: 'viewing_structures',
        en: 'Viewing structures or signage',
        fr: 'Ouvrages d’observation ou panneaux d’interprétation',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_viewing.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_viewing.png')
    },
    'interpretive_centre': {
        id: 'interpretive_centre',
        en: 'Interpretive centre',
        fr: 'Centre d’interprétation',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_interpretive.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_interpretive.png')
    },
    'group_campsite': {
        id: 'group_campsite',
        en: 'Group campsite',
        fr: 'Camping de groupe',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_group_campsite.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_group_campsite.png')
    },
    'tent_pads': {
        id: 'tent_pads',
        en: 'Tent sites via walking trail ',
        fr: 'Terrains de camping via sentier pédestre',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_tend_pads.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_tend_pads.png')
    },
    'swimming_area': {
        id: 'swimming_area',
        en: 'Swimming area or dock',
        fr: 'Quai ou aire de baignade',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_swimming.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_swimming.png')
    },
    'change_room': {
        id: 'change_room',
        en: 'Change room',
        fr: 'Vestaire',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_change_room.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_change_room.png')
    },
    'outdoor_amphitheatre': {
        id: 'outdoor_amphitheatre',
        en: 'Outdoor amphitheatre',
        fr: 'Amphithéâtre extérieur',
        imageInactive: require('../assets/stacks/listing/amenties/inactive/b_theatre.png'),
        imageActive: require('../assets/stacks/listing/amenties/active/y_theatre.png')
    }
}

