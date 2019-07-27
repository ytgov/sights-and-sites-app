import { createStackNavigator } from 'react-navigation';
import MainScreen from './screens/main/main.screen';
import SiteDetails from './screens/site-details/site-details.screen';

const ListingStack = createStackNavigator({
  Map: {
    screen: MainScreen,
    navigationOptions: () => ({
      header: null
    })
  },
  SiteDetails: {
    screen: SiteDetails,
    navigationOptions: () => ({
      header: null
    })
  }
});

export default ListingStack;
