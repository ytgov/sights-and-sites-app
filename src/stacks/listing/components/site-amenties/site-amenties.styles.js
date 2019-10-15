import {StyleSheet} from 'react-native';

export const CAROUSEL_CONFIG = {
    carouselArrowWidth: 13,
    carouselItemPadding: 20,
    outerScreenPadding: 16
}

const SiteAmentiesStyles = StyleSheet.create({
    amenitiesList: {
        marginTop: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderTopWidth: 1,
        borderTopColor: '#CBCBCB',
        borderBottomWidth: 1,
        borderBottomColor: '#CBCBCB'
    },
    amenitiesListIconBox: {
        marginRight: 8
    },
    amenitiesListArrow: {
        width: CAROUSEL_CONFIG.carouselArrowWidth, height: 22
    },
    amenitiesListIcon: {
        width: 40, height: 40
    },
    carouselBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        paddingLeft: CAROUSEL_CONFIG.carouselItemPadding,
        marginBottom: 10,
        paddingRight: CAROUSEL_CONFIG.carouselItemPadding
    },
    carouselItem: {
        backgroundColor: '#000',
        paddingTop: 26,
        paddingBottom: 26,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 'auto'
    },
    carouselItemIcon: {
        alignSelf: 'center',
        width: 40,
        height: 40,
        marginBottom: 14
    }
})

export default SiteAmentiesStyles;
