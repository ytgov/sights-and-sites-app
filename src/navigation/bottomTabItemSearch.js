import React from 'react';
import {TouchableOpacity} from 'react-native';

import BottomTabItem from '~navigation/bottomTabItem';
import {toggleSearch} from '~store/actions/core';
import {connect} from 'react-redux';
import {setSearchKeyword} from '~store/actions/search';

const BottomTabItemSearch = (props) => {
    const {
        dispatchSetSearchKeyword,
        dispatchToggleSearch
    } = props

    const onTabItemPressed = () => {
        // Clear current search query
        dispatchSetSearchKeyword('')
        dispatchToggleSearch()
    }

    return <TouchableOpacity
            style={{
                paddingTop: 22,
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabItemSearch);
