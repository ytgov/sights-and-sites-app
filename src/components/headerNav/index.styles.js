import {StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const styles = StyleSheet.create({
    wrapper: {
        height: DeviceInfo.hasNotch() ? 110 : 80,
        flexDirection: 'row'
    }
})

export default styles
