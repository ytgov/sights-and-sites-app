import {createStackNavigator} from 'react-navigation';
import MoreScreen from './screens/more/more.screen';
import CurrentConditionsScreen from './screens/current-conditions/current-conditions.screen';
import TraditionalTerritoriesScreen from './screens/traditional-territories/traditional-territories.screen';
import TravelTripsScreen from './screens/travel-trips/travel-trips.screen';
import AppInformationScreen from './screens/app-information/app-information.screen';

const MoreStack = createStackNavigator(
    {
        More: {
            screen: MoreScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        CurrentConditions: {
            screen: CurrentConditionsScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        TraditionalTerritories: {
            screen: TraditionalTerritoriesScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        TravelTrips: {
            screen: TravelTripsScreen,
            navigationOptions: () => ({
                header: null
            })
        },
        AppInformation: {
            screen: AppInformationScreen,
            navigationOptions: () => ({
                header: null
            })
        }
    }
);

export default MoreStack;
