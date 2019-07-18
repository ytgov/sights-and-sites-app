import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoadingStack from './loading/loading.stack';
import WelcomeStack from './welcome/welcome.stack';
import IntroStack from './intro/intro.stack';
import MainStack from './main/main.stack';

const RootNavigation = createSwitchNavigator(
  {
    Loading: LoadingStack,
    Welcome: WelcomeStack,
    Intro: IntroStack,
    Main: MainStack
  },
  {
    initialRouteName: 'Loading',
  }
);


export default createAppContainer(RootNavigation);
