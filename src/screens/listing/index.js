import React from 'react';
import {ScrollView, FlatList, TouchableOpacity} from 'react-native';

import {showHeader} from '../../store/actions/core';
import {NavigationEvents} from 'react-navigation';

import routes from '../../navigation/routes';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import SiteCard from '../../components/siteCard';
import {connect} from 'react-redux';

const ListingScreen = (props) => {
    const {navigation, dispatchShowHeader, listingFiltered} = props

    return (
        <ScrollView scrollEventThrottle={16}>
            <NavigationEvents
                onWillFocus={payload => dispatchShowHeader()} />

            <FlatList
                data={listingFiltered}
                renderItem={({item, i}) =>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {item})}>
                        <SiteCard data={item} key={i} />
                    </TouchableOpacity>}
                keyExtractor={(item) => item.site_id.toString()}
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
