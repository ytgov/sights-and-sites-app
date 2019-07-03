import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeStack from './welcome/welcome.stack';
import IntroStack from './intro/intro.stack';

const RootNavigation = createSwitchNavigator(
  {
    Welcome: WelcomeStack,
    Intro: IntroStack,
  },
  {
    initialRouteName: 'Welcome',
  }
);


export default createAppContainer(RootNavigation);
