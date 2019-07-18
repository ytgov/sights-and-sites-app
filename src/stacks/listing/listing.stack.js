import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/main/main.screen';

const ListingStack = createStackNavigator({
  Map: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default ListingStack;
