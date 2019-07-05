import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/main/main.screen';

const MasinStack = createStackNavigator({
  Welcome: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
});

export default MasinStack;
