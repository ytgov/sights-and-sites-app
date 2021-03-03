import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './screens/search/search.screen';
import SiteDetails from '../listing/screens/site-details/site-details.screen';

const SearchStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
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
    }
);

export default SearchStack;
