import { createStackNavigator } from 'react-navigation';
import SearchScreen from './screens/search/search.screen';

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  }
);

export default SearchStack;
