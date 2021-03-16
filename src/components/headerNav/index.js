import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {View, Animated} from 'react-native';
import {useTranslation} from 'react-i18next';

import {withNavigation} from 'react-navigation';
import routes from '../../navigation/routes';

import indexStyles from './index.styles';
import HeaderNavItem from './headerNavItem';
import {connect} from 'react-redux';

const filtersIcon = require('./images/filters.png');
const listIcon = require('./images/list.png');
const mapIcon = require('./images/map.png');

export const HeaderNavType = {
    FILTERS: 'filters',
    LIST: 'list',
    MAP: 'map'
}

const HeaderNav = ({scene, activeItem, navigation, headerVisible}) => {
    const {t} = useTranslation();
    const slideAnim = useRef(new Animated.Value(1)).current

    const animateComponent = (toValue, duration) => {
        Animated.timing(
            slideAnim,
            {
                toValue,
                duration
            }
        ).start()
    }

    if (headerVisible) {
        animateComponent(1, 100)
    } else {
        animateComponent(0, 200)
    }

    const transformValue = {
        transform: [
            {
                translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-110, 0]
                })
            }
        ]
    }

    const { options } = scene.descriptor;

    return (
        <Animated.View style={{
            ...options.headerStyle,
            ...indexStyles.wrapper,
            ...transformValue,
        }}>
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
        </Animated.View>
    );
};

HeaderNav.propTypes = {
    activeItem: PropTypes.oneOf([
        HeaderNavType.FILTERS,
        HeaderNavType.LIST,
        HeaderNavType.MAP
    ])
}

const mapStateToProps = (state) => {
    return {
        headerVisible: state.coreStore.headerVisible
    };
};

export default connect(mapStateToProps, null)(withNavigation(HeaderNav));


