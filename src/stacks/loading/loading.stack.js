import {createStackNavigator} from 'react-navigation-stack';
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
