import React, {useEffect} from 'react';
import {ScrollView, FlatList, TouchableOpacity} from 'react-native';

import {showHeader} from '../../store/actions/core';

import routes from '../../navigation/routes';
import HeaderNav, {HeaderNavType} from '../../components/headerNav';
import SiteCard from '../../components/siteCard';
import {connect} from 'react-redux';

const ListingScreen = (props) => {
    const {navigation, dispatchShowHeader, listingRaw} = props

    useEffect(() => {
        const navFocusListener = navigation.addListener('didFocus', () => {
            dispatchShowHeader();
            console.log('Show header')
        })

        return () => {
            navFocusListener.remove();
        }
    }, [])

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
                                  activeItem={HeaderNavType.LIST} />,
    headerStyle: {
        backgroundColor: 'yellow'
    }
})

const mapStateToProps = (state) => {
    return {
        listingRaw: state.listingStore.listingRaw,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchShowHeader: () => dispatch(showHeader())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingScreen);
