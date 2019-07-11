import { createStackNavigator } from 'react-navigation';
import ChooseLocationScreen from './screens/choose-location/choose-location.screen';
import ChooseHighwayScreen from './screens/choose-highway/choose-highway.screen';
import ChooseRegionScreen from './screens/choose-region/choose-region.screen';

const WhereToStack = createStackNavigator(
  {
    ChooseLocation: {
      screen: ChooseLocationScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    ChooseHighway: {
      screen: ChooseHighwayScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    ChooseRegion: {
      screen: ChooseRegionScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  }
);

export default WhereToStack;
