import { createStackNavigator } from 'react-navigation';
import MoreScreen from './screens/more/more.screen';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  }
);

export default MoreStack;
