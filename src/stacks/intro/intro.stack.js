import { createStackNavigator } from 'react-navigation';
import IntroStepOneScreen from './screens/intro-step-one/intro-step-one.screen';
import IntroStepTwoScreen from './screens/intro-step-two/intro-step-two.screen';
import IntroStepThreeScreen from './screens/intro-step-three/intro-step-three.screen';
import IntroStepFourScreen from './screens/intro-step-four/intro-step-four.screen';

const IntroStack = createStackNavigator({
  IntroStepOne: {
    screen: IntroStepOneScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  IntroStepTwo: {
    screen: IntroStepTwoScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  IntroStepThree: {
    screen: IntroStepThreeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  IntroStepFour: {
    screen: IntroStepFourScreen,
    navigationOptions: () => ({
      header: null
    })
  },
});

export default IntroStack;
