import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: 270
    },
    contentWrapper: {
        paddingHorizontal: 16,
        paddingBottom: 36
    },
    siteTypes: {
        flexDirection: 'row',
        top: -24
    }
})

export default styles
