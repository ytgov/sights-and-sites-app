import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './screens/welcome/welcome.screen';

const WelcomeStack = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      header: null
    })
  },
});

export default WelcomeStack;
