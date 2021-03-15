import React from 'react';
import {ScrollView, FlatList, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import routes from '../../navigation/routes';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import SiteCard from '../../components/siteCard';
import {filterListing} from '../../store/actions/listing';
import {connect} from 'react-redux';

const ListingScreen = (props) => {
    const {navigation, listingRaw} = props
    const data = listingRaw.slice(0, 10)

    return (
        <ScrollView>
            <FlatList
                data={data}
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
                                  activeItem={HeaderNavType.LIST} />
})

const mapStateToProps = (state) => {
    return {
        listingRaw: state.listingStore.listingRaw,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterListingDispatch: () => dispatch(filterListing())


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
