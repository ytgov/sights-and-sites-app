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
    require('../assets/common/logo-white.png'),

    // Welcome Stack
    require('../assets/stacks/welcome/welcome-background.jpg'),

    // Intro Stack
    require('../assets/stacks/intro/intro-step-one-background.jpg'),
    require('../assets/stacks/intro/intro-step-two-background.jpg'),
    require('../assets/stacks/intro/intro-step-three-background.jpg'),
    require('../assets/stacks/intro/intro-step-four-background.jpg'),

  ]),
])
