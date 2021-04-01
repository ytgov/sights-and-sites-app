import React, {useState} from 'react';
import {FlatList, TouchableOpacity, Dimensions} from 'react-native';

import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {isNull as _isNull, isUndefined as _isUndefined} from 'lodash';

import {hideSearch, setCurrentScreenName, showHeader} from '~store/actions/core';
import routes from '~navigation/routes';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import SiteCard from '~components/siteCard';
import NoResult from '~components/noResult';
import {ICON_POSITION, toastWithIcon} from '~app/shared/services/notify';
import DeviceInfo from 'react-native-device-info';
import {YUKON_COLORS} from '~theme/config';

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const ITEMS_PER_PAGE = 10

const ListingScreen = (props) => {
    const {
        navigation,
        dispatchShowHeader,
        dispatchHideSearch,
        dispatchSetCurrentScreenName,
        listingFiltered
    } = props

    const {t} = useTranslation()
    const [items, setItems] = useState(listingFiltered.slice(0, ITEMS_PER_PAGE))
    const [page, setPage] = useState(1)
    const [notification, setNotification] = useState(null)
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
                onWillFocus={() => {
                    dispatchHideSearch();
                    dispatchShowHeader();
                    dispatchSetCurrentScreenName(null);

                    // Toast
                    if (!_isUndefined(navigation.getParam('notification'))) {
                        const toast = toastWithIcon(navigation.getParam('notification'), 'check-circle', {
                            position: DeviceInfo.hasNotch() ? 110 : 80, /* StatusBar height + App menu height  */
                            containerStyle: {
                                paddingTop: 6,
                                paddingBottom: 6,
                                width: windowWidth,
                                backgroundColor: YUKON_COLORS.primary,
                            }
                        }, ICON_POSITION.LEFT);

                        setNotification(toast)
                    }
                }}
            />

            <FlatList
                style={{height: windowHeight}}
                data={items}
                initialNumToRender={3}
                scrollEventThrottle={16}
                renderItem={({item}) =>
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

ListingScreen['navigationOptions'] = () => ({
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
        dispatchShowHeader: () => dispatch(showHeader()),
        dispatchHideSearch: () => dispatch(hideSearch()),
        dispatchSetCurrentScreenName: (value) => dispatch(setCurrentScreenName(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
