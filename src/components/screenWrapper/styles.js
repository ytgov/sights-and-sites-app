import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        backgroundColor: 'black',
        opacity: 0.4,
        height: '100%',
        width: '100%',
        flex: 1,
    },
    inner: {
        flex: 1,
        padding: 16,
    }
})

export default styles;