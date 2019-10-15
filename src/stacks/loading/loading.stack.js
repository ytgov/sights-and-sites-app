import {createStackNavigator} from 'react-navigation';
import LoadingScreen from './screens/loading/loading.screen';

const LoadingStack = createStackNavigator({
    Map: {
        screen: LoadingScreen,
        navigationOptions: () => ({
            header: null
        })
    }
});

export default LoadingStack;
