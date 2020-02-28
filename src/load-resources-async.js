/* eslint-disable global-require */
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
Object.defineProperty(Array.prototype, 'chunk_inefficient', {
    value: function(chunkSize) {
        var array = this;
        return [].concat.apply([],
            array.map(function(elem, i) {
                return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
            })
        );
    }
});
function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        }
        return Asset.fromModule(image).downloadAsync();
    });
}

export default async () => Promise.all([
    Font.loadAsync({
        'aleo-bold': require('../assets/fonts/Aleo/Aleo-Bold.ttf'),
        'montserrat-bold': require('../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
        'montserrat-semibold': require('../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
        'montserrat-regular': require('../assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'montserrat-medium': require('../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
        'montserrat-italic': require('../assets/fonts/Montserrat/Montserrat-Italic.ttf'),
    }),

    cacheImages([
        // Common
        require('../assets/images/pin.png' +
            '' +
            ''),
        require('../assets/common/logo-circle.png'),
        require('../assets/common/logo.png'),
        require('../assets/common/logo-white.png'),
        require('../assets/common/common-background.jpg'),
        require('../assets/common/fallback.png'),
        // Tabs
        require('../assets/stacks/tabs/more-icon.png'),
        require('../assets/stacks/tabs/site-type-icon.png'),
        require('../assets/stacks/tabs/where-to-icon.png'),
        require('../assets/stacks/tabs/where-to-icon.png'),
        // Site type tabs
        require('../assets/stacks/tabs/site-type-camping-icon.png'),
        require('../assets/stacks/tabs/site-type-history-icon.png'),
        require('../assets/stacks/tabs/site-type-recreation-icon.png'),
        require('../assets/stacks/tabs/site-type-wildlife-icon.png'),
        require('../assets/stacks/tabs/site-type-active-overlay.png'),
        // Site tabs
        require('../assets/stacks/tabs/directions-icon.png'),
        require('../assets/stacks/tabs/share-icon.png'),
        require('../assets/stacks/tabs/my-sites-icon.png'),
        // Welcome Stack
        require('../assets/stacks/welcome/welcome-background.jpg'),
        // Intro Stack
        require('../assets/stacks/intro/intro-step-one-background.jpg'),
        require('../assets/stacks/intro/intro-step-two-background.jpg'),
        require('../assets/stacks/intro/intro-step-three-background.jpg'),
        // Where To Stack
        require('../assets/stacks/where-to/by-highway-icon.png'),
        require('../assets/stacks/where-to/by-region-icon.png'),
        require('../assets/stacks/where-to/my-sites-icon.png'),
        require('../assets/stacks/where-to/near-me-icon.png'),
        require('../assets/stacks/where-to/highway-number-background.png'),
        require('../assets/stacks/where-to/region1.png'),
        require('../assets/stacks/where-to/region2.png'),
        require('../assets/stacks/where-to/region3.png'),
        require('../assets/stacks/where-to/region4.png'),
        require('../assets/stacks/where-to/region5.png'),
        require('../assets/stacks/where-to/region6.png'),
        require('../assets/stacks/where-to/region7.png'),
        require('../assets/stacks/where-to/region8.png'),
        // Listing Stack
        require('../assets/stacks/listing/highway-number-background-icon.png'),
        require('../assets/stacks/listing/nearby-sites-icon.png'),
        require('../assets/stacks/listing/amenties/arrow-left-icon.png'),
        require('../assets/stacks/listing/amenties/arrow-right-icon.png'),
        require('../assets/stacks/listing/warning-icon.png'),
        // Site amenties active
        require('../assets/stacks/listing/amenties/active/y_beach.png'),
        require('../assets/stacks/listing/amenties/active/y_boat.png'),
        require('../assets/stacks/listing/amenties/active/y_camp_wheelchair.png'),
        require('../assets/stacks/listing/amenties/active/y_change_room.png'),
        require('../assets/stacks/listing/amenties/active/y_cook_shelter.png'),
        require('../assets/stacks/listing/amenties/active/y_dock.png'),
        require('../assets/stacks/listing/amenties/active/y_fire_ring.png'),
        require('../assets/stacks/listing/amenties/active/y_garbage.png'),
        require('../assets/stacks/listing/amenties/active/y_group_campsite.png'),
        require('../assets/stacks/listing/amenties/active/y_hand_pump.png'),
        require('../assets/stacks/listing/amenties/active/y_hiking_trails.png'),
        require('../assets/stacks/listing/amenties/active/y_interpretive.png'),
        require('../assets/stacks/listing/amenties/active/y_lockers.png'),
        require('../assets/stacks/listing/amenties/active/y_outhouses.png'),
        require('../assets/stacks/listing/amenties/active/y_picnic_tables.png'),
        require('../assets/stacks/listing/amenties/active/y_playground.png'),
        require('../assets/stacks/listing/amenties/active/y_recycling.png'),
        require('../assets/stacks/listing/amenties/active/y_swimming.png'),
        require('../assets/stacks/listing/amenties/active/y_tend_pads.png'),
        require('../assets/stacks/listing/amenties/active/y_theatre.png'),
        require('../assets/stacks/listing/amenties/active/y_viewing.png'),
        require('../assets/stacks/listing/amenties/active/y_wheelchair.png'),
        // Site amenties inactive
        require('../assets/stacks/listing/amenties/inactive/b_beach.png'),
        require('../assets/stacks/listing/amenties/inactive/b_boat.png'),
        require('../assets/stacks/listing/amenties/inactive/b_camp_wheelchair.png'),
        require('../assets/stacks/listing/amenties/inactive/b_change_room.png'),
        require('../assets/stacks/listing/amenties/inactive/b_cook_shelter.png'),
        require('../assets/stacks/listing/amenties/inactive/b_dock.png'),
        require('../assets/stacks/listing/amenties/inactive/b_fire_ring.png'),
        require('../assets/stacks/listing/amenties/inactive/b_garbage.png'),
        require('../assets/stacks/listing/amenties/inactive/b_group_campsite.png'),
        require('../assets/stacks/listing/amenties/inactive/b_hand_pump.png'),
        require('../assets/stacks/listing/amenties/inactive/b_hiking_trails.png'),
        require('../assets/stacks/listing/amenties/inactive/b_interpretive.png'),
        require('../assets/stacks/listing/amenties/inactive/b_lockers.png'),
        require('../assets/stacks/listing/amenties/inactive/b_outhouses.png'),
        require('../assets/stacks/listing/amenties/inactive/b_picnic_tables.png'),
        require('../assets/stacks/listing/amenties/inactive/b_playground.png'),
        require('../assets/stacks/listing/amenties/inactive/b_recycling.png'),
        require('../assets/stacks/listing/amenties/inactive/b_swimming.png'),
        require('../assets/stacks/listing/amenties/inactive/b_tend_pads.png'),
        require('../assets/stacks/listing/amenties/inactive/b_theatre.png'),
        require('../assets/stacks/listing/amenties/inactive/b_viewing.png'),
        require('../assets/stacks/listing/amenties/inactive/b_wheelchair.png'),
        // More Stack
        require('../assets/stacks/more/app-information-icon.png'),
        require('../assets/stacks/more/current-conditions-icon.png'),
        require('../assets/stacks/more/traditional-territories-icon.png'),
        require('../assets/stacks/more/travel-trips-icon.png'),
        require('../assets/stacks/more/feedback-icon.png'),
        require('../assets/stacks/more/accordion-opened-icon.png'),
        require('../assets/stacks/more/accordion-closed-icon.png')
    ]),
])
