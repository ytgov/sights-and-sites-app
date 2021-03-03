import {createStackNavigator} from 'react-navigation-stack';
import ListingStack from '../listing/listing.stack';
import WhereToStack from '../where-to/where-to.stack';
import MoreStack from '../more/more.stack';
import SearchStack from '../search/search.stack';

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
    },
    Search: {
        screen: SearchStack,
        navigationOptions: () => ({
            header: null
        })
    }
}, {
    // initialRouteName: 'Search',
    initialRouteName: 'Listing',
});

export default MainStack;
