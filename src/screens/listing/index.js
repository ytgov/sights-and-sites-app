import React from 'react';
import {ScrollView, FlatList, TouchableOpacity, Text} from 'react-native';


import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';

import {showHeader} from '~store/actions/core';
import routes from '~navigation/routes';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import SiteCard from '~components/siteCard';
import NoResult from '~components/noResult';

const ListingScreen = (props) => {
    const {navigation, dispatchShowHeader, listingFiltered} = props

    const data = listingFiltered.slice(0, 10)

    return (
        <ScrollView scrollEventThrottle={16}>
            <NavigationEvents
                onWillFocus={payload => dispatchShowHeader()} />

            <FlatList
                data={data}
                renderItem={({item, i}) =>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {item})}>
                        <SiteCard data={item} />
                    </TouchableOpacity>}
                keyExtractor={(item) => item.site_id.toString()}
                ListEmptyComponent={<NoResult />}
            />
        </ScrollView>
    );
};

ListingScreen['navigationOptions'] = screenProps => ({
    header: (props) => <HeaderNav {...props}
                                  activeItem={HeaderNavType.LIST} />,
})

const mapStateToProps = (state) => {
    return {
        listingFiltered: state.listingStore.listingFiltered,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowHeader: () => dispatch(showHeader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
