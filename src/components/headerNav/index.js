import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import {withNavigation} from 'react-navigation';
import routes from '../../navigation/routes';

import indexStyles from './index.styles';
import HeaderNavItem from './headerNavItem';

const filtersIcon = require('./images/filters.png');
const listIcon = require('./images/list.png');
const mapIcon = require('./images/map.png');

export const HeaderNavType = {
    FILTERS: 'filters',
    LIST: 'list',
    MAP: 'map'
}

const HeaderNav = ({scene, activeItem, navigation}) => {
    const { options } = scene.descriptor;

    return (
        <View style={[options.headerStyle, indexStyles.wrapper]}>
            <HeaderNavItem icon={filtersIcon}
                           label={'Filters'}
                           isActive={activeItem === HeaderNavType.FILTERS}
                           onPress={() => navigation.navigate(routes.STACK_FILTERS)} />
            <HeaderNavItem icon={listIcon}
                           label={'List'}
                           isActive={activeItem === HeaderNavType.LIST}
                           onPress={() => navigation.navigate(routes.SCREEN_LISTING)} />
            <HeaderNavItem icon={mapIcon}
                           label={'Map'}
                           isActive={activeItem === HeaderNavType.MAP}
                           onPress={() => navigation.navigate(routes.SCREEN_MAP)} />
        </View>
    );
};

HeaderNav.propTypes = {
    activeItem: PropTypes.objectOf(HeaderNavType)
}

export default withNavigation(HeaderNav);


