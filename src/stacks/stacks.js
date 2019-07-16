import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeStack from './welcome/welcome.stack';
import IntroStack from './intro/intro.stack';
import MainStack from './main/main.stack';

const RootNavigation = createSwitchNavigator(
  {
    Welcome: WelcomeStack,
    Intro: IntroStack,
    Main: MainStack
  },
  {
    initialRouteName: 'Main',
  }
);


export default createAppContainer(RootNavigation);
