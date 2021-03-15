import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {useTranslation} from 'react-i18next';

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
    const {t} = useTranslation();
    const { options } = scene.descriptor;

    return (
        <View style={[options.headerStyle, indexStyles.wrapper]}>
            <HeaderNavItem icon={filtersIcon}
                           label={t('navigation.header.filters')}
                           isActive={activeItem === HeaderNavType.FILTERS}
                           onPress={() => navigation.navigate(routes.STACK_FILTERS)} />
            <HeaderNavItem icon={listIcon}
                           label={t('navigation.header.list')}
                           isActive={activeItem === HeaderNavType.LIST}
                           onPress={() => navigation.navigate(routes.SCREEN_LISTING)} />
            <HeaderNavItem icon={mapIcon}
                           label={t('navigation.header.map')}
                           isActive={activeItem === HeaderNavType.MAP}
                           onPress={() => navigation.navigate(routes.SCREEN_MAP)} />
        </View>
    );
};

HeaderNav.propTypes = {
    activeItem: PropTypes.oneOf([
        HeaderNavType.FILTERS,
        HeaderNavType.LIST,
        HeaderNavType.MAP
    ])
}

export default withNavigation(HeaderNav);


