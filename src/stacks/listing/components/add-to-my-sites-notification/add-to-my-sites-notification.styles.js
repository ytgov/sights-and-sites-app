import {StyleSheet} from 'react-native';

const AddToMySitesNotificationStyles = StyleSheet.create({
    notificationBox: {
        backgroundColor: '#D93D26',
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 14,
        paddingRight: 20,
        bottom: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 12
    },
    text: {
        flex: 1
    }
})

export default AddToMySitesNotificationStyles;
