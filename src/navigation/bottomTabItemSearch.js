import React from 'react';
import {TouchableOpacity} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import BottomTabItem from '~navigation/bottomTabItem';
import {toggleSearch} from '~store/actions/core';
import {connect} from 'react-redux';
import {setSearchKeyword} from '~store/actions/search';
import {withNavigation} from 'react-navigation';
import routes from '~navigation/routes';

const BottomTabItemSearch = (props) => {
    const {
        navigation,
        dispatchSetSearchKeyword,
        dispatchToggleSearch
    } = props

    const onTabItemPressed = () => {
        // Clear current search query
        // dispatchSetSearchKeyword('');
        dispatchToggleSearch();
        navigation.navigate(routes.STACK_SEARCH);
    }

    return <TouchableOpacity
            style={{
                paddingTop: DeviceInfo.hasNotch() ? 22 : 9,
                width: '100%',
                height: '100%'
            }}
            onPress={onTabItemPressed}>
        <BottomTabItem {...props} />
    </TouchableOpacity>

};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchToggleSearch: () => dispatch(toggleSearch()),
        dispatchSetSearchKeyword: (keyword) => dispatch(setSearchKeyword(keyword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(BottomTabItemSearch));
