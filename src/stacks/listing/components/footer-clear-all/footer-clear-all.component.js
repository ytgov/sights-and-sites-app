import React from 'react';
import {View} from 'react-native';
import {Button, Footer, FooterTab} from 'native-base';
import PropTypes from 'prop-types';
import {Caption, COMMON, Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {Ionicons} from '@expo/vector-icons';

const FooterClearAll = props => {
    const {resetFiltersDispatch, highwaysFilter, regionsFilter, nearMeFilter, mySitesFilter, sitesTypeFilter} = props;
    return (
        !!sitesTypeFilter.length ||
        !!mySitesFilter ||
        !!nearMeFilter ||
        !!highwaysFilter.length ||
        !!regionsFilter.length
    ) ? (
        <Footer style={COMMON.footer}>
            <FooterTab style={{backgroundColor: '#000000'}}>

                <Button vertical onPress={() => resetFiltersDispatch()}>
                    <View style={{position: 'relative'}}>
                        <Ionicons name="ios-close" size={30} color="#FFF"
                                  style={[Helpers.justifyContentCenter, Helpers.alignItemsCenter, Helpers.textAlignCenter]}/>
                    </View>
                    <Caption style={{color: '#FFFFFF'}}>{i18n.t('actionClearAll')}</Caption>
                </Button>

            </FooterTab>
        </Footer>
    ) : null
}

FooterClearAll.propTypes = {
    nearMeFilter: PropTypes.bool.isRequired,
    mySitesFilter: PropTypes.bool.isRequired,
    highwaysFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
    regionsFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
    sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
    resetFiltersDispatch: PropTypes.func.isRequired
};

export default FooterClearAll;
