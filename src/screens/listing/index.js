import React from 'react';
import {Text, View, ScrollView, FlatList, Image, Dimensions} from 'react-native';
import ScreenWrapper from '../../components/screenWrapper';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import {H2, H1, Body1, YUKON_FONTS} from '../../theme/typings';
import SiteCard from '../../components/siteCard';
import {resetFilters, setSitesTypeFilters, toggleSitesTypeFilter} from '../../store/actions/filters';
import {addListing, filterListing, incrementListingPage, toggleListingView} from '../../store/actions/listing';
import {connect} from 'react-redux';

const windowWidth = Dimensions.get('window').width;

const ListingScreen = (props) => {
    const url = `https://picsum.photos/${windowWidth}/270`
    const {listingFiltered} = props
    const data = listingFiltered.slice(0, 10)

    return (
        <ScrollView>
            <FlatList
                data={data}
                renderItem={({item, i}) => <SiteCard data={item} key={item.site_id} />}
                keyExtractor={(item) => item.site_id}
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
        listingFiltered: state.listingStore.listingFiltered,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterListingDispatch: () => dispatch(filterListing())


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
