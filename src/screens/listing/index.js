import React, { useState, useEffect, useRef } from 'react';
import { FlatList, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';

import {NavigationEvents} from 'react-navigation';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {isNull as _isNull, isUndefined as _isUndefined} from 'lodash';

import {
  hideSearch,
  setCurrentScreenName,
  showHeader,
} from '~store/actions/core';
import routes from '~navigation/routes';
import HeaderNav, {HeaderNavType} from '~components/headerNav';
import SiteCard from '~components/siteCard';
import NoResult from '~components/noResult';
import {ICON_POSITION, toastWithIcon} from '~app/shared/services/notify';
import DeviceInfo from 'react-native-device-info';
import {YUKON_COLORS} from '~theme/config';
import {filterListing, setListing} from '~store/actions/listing';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ITEMS_PER_PAGE = 10;
const LIST_OFFSET_KEY = '@yukon:sights_list_position';

const ListingScreen = props => {
  const {
    navigation,
    dispatchShowHeader,
    dispatchHideSearch,
    dispatchSetCurrentScreenName,
    listingFiltered,
    listingLocalized,
    locale,
    dispatchFilterListing,
    dispatchSetListing,
  } = props;

  const {t} = useTranslation();
  const flatListRef = useRef();
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [notification, setNotification] = useState(null);
  const [didDispatch, setDidDispatch] = useState(false);
  const maxPages = Math.ceil(listingFiltered.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (!didDispatch) {
      const list = listingLocalized[locale];
      dispatchSetListing(list);
      dispatchFilterListing();
      setDidDispatch(true);
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    } else {
      const loadedItems = listingFiltered.slice(0, ITEMS_PER_PAGE);
      setItems(loadedItems);
    }
  }, [listingFiltered]);

  const loadMore = () => {
    const newPage = page + 1;
    setPage(newPage);
    if (newPage < maxPages) {
      const newBatch = listingFiltered.slice(0, (page + 1) * ITEMS_PER_PAGE);
      setItems(newBatch);
    } else if (newPage === maxPages) {
      setItems(listingFiltered);
    }
  };

  let scollOffsetY = 0;

  return (
    <>
      <NavigationEvents
        onWillFocus={async () => {
          dispatchHideSearch();
          dispatchShowHeader();
          dispatchSetCurrentScreenName(null);
          setPage(1);

          // Toast
          if (!_isUndefined(navigation.getParam('notification'))) {
            const toast = toastWithIcon(
              navigation.getParam('notification'),
              'check-circle',
              {
                position: DeviceInfo.hasNotch()
                  ? 110
                  : 80 /* StatusBar height + App menu height  */,
                containerStyle: {
                  paddingTop: 6,
                  paddingBottom: 6,
                  width: windowWidth,
                  backgroundColor: YUKON_COLORS.primary,
                },
              },
              ICON_POSITION.LEFT,
            );

            setNotification(toast);
          }

          this.flatList.scrollToOffset({
            offset: await AsyncStorage.getItem(LIST_OFFSET_KEY),
            animated: false
          });
        }}
      />

      <FlatList
        style={{height: windowHeight}}
        data={items}
        ref={flatListRef}
        initialNumToRender={3}
        scrollEventThrottle={16}
        onScroll={({ nativeEvent }) => {
          scollOffsetY = nativeEvent.contentOffset.y;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              AsyncStorage.setItem(LIST_OFFSET_KEY, scollOffsetY.toString());

              navigation.navigate(routes.SCREEN_SITE_DETAILS, {
                site_id: item.site_id,
              });
            }}>
            <SiteCard data={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.site_id.toString()}
        ListEmptyComponent={<NoResult />}
        // On End Reached (Takes a function)
        onEndReached={loadMore}
        // Load more when reaching the last item
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

ListingScreen.navigationOptions = () => ({
  header: props => <HeaderNav {...props} activeItem={HeaderNavType.LIST} />,
});

const mapStateToProps = state => {
  return {
    listingFiltered: state.listingStore.listingFiltered,
    listingLocalized: state.listingStore.listingLocalized,
    locale: state.localeStore.locale,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchShowHeader: () => dispatch(showHeader()),
    dispatchHideSearch: () => dispatch(hideSearch()),
    dispatchSetCurrentScreenName: value =>
      dispatch(setCurrentScreenName(value)),
    dispatchSetListing: list => dispatch(setListing(list)),
    dispatchFilterListing: () => dispatch(filterListing()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
