import {StyleSheet} from 'react-native';

const MySitesButtonStyles = StyleSheet.create({
    mySitesButton: {
        zIndex: 5,
        width: 48,
        height: 48,
        right: 10,
        bottom: 0,
        backgroundColor: '#D93D26',
        borderRadius: 24,
        overflow: 'hidden',
        position: 'absolute',
    },
    mySitesIcon: {
        alignSelf: 'flex-end',
        width: 48,
        height: 48,
        zIndex: 5,
    }
})

export default MySitesButtonStyles;
