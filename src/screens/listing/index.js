import React from 'react';
import {Text, View, ScrollView, FlatList, Image, Dimensions} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import {H2, H1, Body1, YUKON_FONTS} from '../../theme/typings';
import SiteCard from '../../components/siteCard';

const windowWidth = Dimensions.get('window').width;

const ListingScreen = () => {
    const url = `https://picsum.photos/${windowWidth}/270`

    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "Aishihik Lake Campground",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
            title: "Aishihik Lake Campground",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f632",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d723",
            title: "Third Item",
        },
    ];


    return (
        <ScrollView>
            <FlatList
                data={DATA}
                renderItem={(item, i) => <SiteCard />}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
    );
};

ListingScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.LIST} />
})

export default ListingScreen;
