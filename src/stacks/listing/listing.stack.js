import {createStackNavigator} from 'react-navigation';
import MainScreen from './screens/main/main.screen';
import SiteDetails from './screens/site-details/site-details.screen';

const ListingStack = createStackNavigator({
    Map: {
        screen: MainScreen
    },
    SiteDetails: {
        screen: SiteDetails
    }
}, {
    defaultNavigationOptions: {
        headerTitleStyle: {
            color: 'white'
        },
        headerStyle: {
            backgroundColor: 'black'
        },
        headerRightContainerStyle: {
            marginRight: 12
        }
    }
});

export default ListingStack;
