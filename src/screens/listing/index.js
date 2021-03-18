import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Dimensions} from 'react-native';

import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';

import {showHeader} from '~store/actions/core';
import routes from '~navigation/routes';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import SiteCard from '~components/siteCard';
import NoResult from '~components/noResult';

const windowHeight = Dimensions.get('window').height

const ITEMS_PER_PAGE = 10

const ListingScreen = (props) => {
    const {navigation, dispatchShowHeader, listingFiltered} = props
    const [items, setItems] = useState(listingFiltered.slice(0, ITEMS_PER_PAGE))
    const [page, setPage] = useState(1)
    const maxPages = Math.ceil(listingFiltered.length / ITEMS_PER_PAGE)

    const loadMore = () => {
        const newPage = page + 1
        setPage(newPage)
        if (newPage < maxPages) {
            const newBatch = listingFiltered.slice(0, (page + 1) * ITEMS_PER_PAGE)
            setItems(newBatch)
        } else if (newPage === maxPages) {
            setItems(listingFiltered)
        }
    }

    return (
        <>
            <NavigationEvents
                onWillFocus={payload => dispatchShowHeader()} />

            <FlatList
                style={{height: windowHeight}}
                data={items}
                initialNumToRender={3}
                scrollEventThrottle={16}
                renderItem={({item, i}) =>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {item})}>
                        <SiteCard data={item} />
                    </TouchableOpacity>}
                keyExtractor={(item) => item.site_id.toString()}
                ListEmptyComponent={<NoResult />}
                // On End Reached (Takes a function)
                onEndReached={loadMore}
                // Load more when reaching the last item
                onEndReachedThreshold={0.5}
            />
        </>
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
