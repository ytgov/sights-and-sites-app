import DeviceInfo from 'react-native-device-info';
import {YUKON_COLORS} from '../theme/config';

export const defaultTabBarOptions =  {
    activeTintColor: 'white',
    activeBackgroundColor: YUKON_COLORS.primary_600,
    inactiveTintColor: 'white',
    inactiveBackgroundColor: YUKON_COLORS.primary_200,

    // stretch the bottom tab to the edge
    safeAreaInset: { bottom: 'never', top: 'never' },

    // Tab item container.
    // @TODO: use library to detect the notch and calculate proper height
    style: {
        height: DeviceInfo.hasNotch() ? 60 + 34 : 80,
    },

    showLabel: false,
    showIcon: true,
    lazy: true,
    tabBarPosition: 'bottom',
}

export const defaultTopTabBarOptions = {
    activeTintColor: 'white',
    activeBackgroundColor: YUKON_COLORS.primary_600,
    inactiveTintColor: 'white',
    inactiveBackgroundColor: YUKON_COLORS.primary_200,
}
