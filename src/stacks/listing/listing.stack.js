import { createStackNavigator } from 'react-navigation';
import MapScreen from './screens/map/map.screen';

const ListingStack = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default ListingStack;
