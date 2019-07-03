import { createStackNavigator } from 'react-navigation';
import IntroStepOneScreen from './screens/intro-step-one/intro-step-one.screen';
import IntroStepTwoScreen from './screens/intro-step-two/intro-step-two.screen';

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
});

export default IntroStack;
