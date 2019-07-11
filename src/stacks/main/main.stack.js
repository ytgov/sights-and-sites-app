import { createStackNavigator } from 'react-navigation';
import ListingStack from '../listing/listing.stack';
import WhereToStack from '../where-to/where-to.stack';
import MoreStack from '../more/more.stack';

const MainStack = createStackNavigator({
  Listing: {
    screen: ListingStack,
    navigationOptions: () => ({
      header: null
    })
  },
  WhereTo: {
    screen: WhereToStack,
    navigationOptions: () => ({
      header: null
    })
  },
  More: {
    screen: MoreStack,
    navigationOptions: () => ({
      header: null
    })
  }
}, {
    initialRouteName: 'Listing'
  });

export default MainStack;
