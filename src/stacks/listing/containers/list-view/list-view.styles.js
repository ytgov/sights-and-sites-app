import {StyleSheet} from 'react-native';

const ListViewStyles = StyleSheet.create({
    listBox: {
        paddingTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingBottom: 40,
        backgroundColor: '#000000'
    },
    listItem: {
        backgroundColor: '#000000',
        flexDirection: 'column',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -5
    },
    listItemImgBox: {
        height: 215,
        width: '100%'
    },
    listItemImg: {
        width: '100%',
        height: '100%'
    },
    moreSitesBox: {
        paddingTop: 0,
        paddingBottom: 20
    }
});

export default ListViewStyles;
