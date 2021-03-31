import React from 'react';
import {TouchableOpacity} from 'react-native';

import BottomTabItem from '~navigation/bottomTabItem';
import {toggleSearch} from '~store/actions/core';
import {connect} from 'react-redux';

const BottomTabItemSearch = (props) => {
    const {dispatchToggleSearch} = props
    return <TouchableOpacity
            style={{
                paddingTop: 22,
                width: '100%',
                height: '100%'
            }}
            onPress={() => dispatchToggleSearch()}>
        <BottomTabItem {...props} />
    </TouchableOpacity>

};

const mapStateToProps = (state) => {
    return {
        listingFiltered: state.listingStore.listingFiltered,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchToggleSearch: () => dispatch(toggleSearch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabItemSearch);
