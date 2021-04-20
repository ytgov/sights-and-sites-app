import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import routes from '~navigation/routes';
import SiteCard from '~components/siteCard';
import NoResult from '~components/noResult';
import {NavigationEvents} from 'react-navigation';
import {showHeader} from '~store/actions/core';

const windowHeight = Dimensions.get('window').height;

const ITEMS_PER_PAGE = 10

const FilterByMyFavoritesScreen = ({filtersStore, navigation, dispatchShowHeader}) => {
    const savedFavorites = (filtersStore && filtersStore.myFavorites) || [];
    const [myFavorites, setFavorites] = useState(savedFavorites.slice(0, ITEMS_PER_PAGE));
    const [page, setPage] = useState(1);
    const maxPages = Math.ceil(myFavorites.length / ITEMS_PER_PAGE);

    useEffect(()=>{
        setFavorites(savedFavorites.slice(0, ITEMS_PER_PAGE));
    }, [savedFavorites]);

    const loadMore = () => {
        const newPage = page + 1;
        setPage(newPage);
        if (newPage < maxPages) {
            const newBatch = myFavorites.slice(0, (page + 1) * ITEMS_PER_PAGE);
            setFavorites(newBatch);
        } else if (newPage === maxPages) {
            setFavorites(myFavorites);
        }
    }

    return (
        <>
            <NavigationEvents
                onWillFocus={payload => dispatchShowHeader()} />
            <FlatList
                style={{height: windowHeight}}
                data={myFavorites}
                initialNumToRender={3}
                scrollEventThrottle={16}
                renderItem={({item}) =>
                    <TouchableOpacity activeOpacity={0.8}
                                      onPress={() => navigation.navigate(routes.SCREEN_SITE_DETAILS, {site_id: item.site_id})}>
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

const mapStateToProps = (state) => {
    return {
        filtersStore: state.filtersStore,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowHeader: () => dispatch(showHeader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterByMyFavoritesScreen);
