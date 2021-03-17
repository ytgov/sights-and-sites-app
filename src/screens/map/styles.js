import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    mapWrapper: {
        width: windowWidth,
        height: windowHeight,
        flex: 1
    },
    closeButton: {
        height: 28,
        width: 28,
        position: 'absolute',
        top: 10,
        right: 10,
    }
})

export default styles
