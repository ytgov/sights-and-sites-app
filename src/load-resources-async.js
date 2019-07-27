/* eslint-disable global-require */
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

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
    'montserrat-medium': require('../assets/fonts/Montserrat/Montserrat-Medium.ttf')
    // Roboto: require("native-base/Fonts/Roboto.ttf"),
    // Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    // ProximaNovaBold: require("./assets/fonts/ProximaNova/ProximaNova-Bold.ttf")
  }),

  cacheImages([
    // Common
    require('../assets/common/logo-circle.png'),
    require('../assets/common/logo.png'),
    require('../assets/common/logo-white.png'),
    require('../assets/common/common-background.jpg'),

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
    // TODO TEMPORARY. REPLACE WITH REAL ONES
    require('../assets/stacks/listing/amenties/1.png'),
    require('../assets/stacks/listing/amenties/2.png'),
    require('../assets/stacks/listing/amenties/3.png'),
    require('../assets/stacks/listing/amenties/4.png'),
    require('../assets/stacks/listing/amenties/5.png'),
    require('../assets/stacks/listing/amenties/6.png'),
    require('../assets/stacks/listing/amenties/1active.png'),

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
