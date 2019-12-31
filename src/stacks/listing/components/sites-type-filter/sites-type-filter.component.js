import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import i18n from '../../../../locale/locale';
import {Caption, H3, Helpers} from '../../../../theme/theme';
import SitesTypeFilterStyles from './sites-type-filter.styles';
import {FilterButtton, FilterImage, FilterImageOverlay} from './sites-type-filter.styled-components';

const siteTypeCampingIcon = require('../../../../../assets/stacks/tabs/site-type-camping-icon.png');
const siteTypeWildlifeIcon = require('../../../../../assets/stacks/tabs/site-type-wildlife-icon.png');
const siteTypeRecreationIcon = require('../../../../../assets/stacks/tabs/site-type-recreation-icon.png');
const siteTypeHistoryIcon = require('../../../../../assets/stacks/tabs/site-type-history-icon.png');
const siteTypeActiveOverlay = require('../../../../../assets/stacks/tabs/site-type-active-overlay.png');

const siteTypeFilters = [
    {
        id: 1,
        image: siteTypeCampingIcon,
        title: 'siteTypes.camping'
    },
    {
        id: 2,
        image: siteTypeWildlifeIcon,
        title: 'siteTypes.wildlife'
    },
    {
        id: 3,
        image: siteTypeRecreationIcon,
        title: 'siteTypes.recreation'
    },
    {
        id: 4,
        image: siteTypeHistoryIcon,
        title: 'siteTypes.history'
    }
];

const siteTypeActive = (filters, id) => {
    return filters.indexOf(id) >= 0;
}

const SitesTypeFilter = props => {
    const {sitesTypeFilter, sitesTypeFilterActive, setSitesTypeFiltersDispatch} = props;
    return (
        sitesTypeFilterActive ?
            (<View style={SitesTypeFilterStyles.filtersBox}>
                <View>
                    <H3 style={Helpers.textAlignCenter}>{i18n.t('siteTypes.filterTitle')}</H3>
                </View>

                <View style={SitesTypeFilterStyles.filtersRow}>
                    {
                        siteTypeFilters.map(filter => {
                            return (
                                <FilterButtton onPress={() => {
                                    setSitesTypeFiltersDispatch(filter.title)
                                }} key={filter.title}>
                                    <View style={Helpers.positionRelative}>
                                        {siteTypeActive(sitesTypeFilter, filter.title) &&
                                        <FilterImageOverlay resizeMode="contain" source={siteTypeActiveOverlay}/>}
                                        <FilterImage active={siteTypeActive(sitesTypeFilter, filter.title)}
                                                     resizeMode="contain" source={filter.image}/>
                                    </View>
                                    <Caption
                                        style={[Helpers.textAlignCenter, {lineHeight: 15}]}>{i18n.t(filter.title)}</Caption>
                                </FilterButtton>
                            )
                        })
                    }
                </View>
            </View>) : null)
}


SitesTypeFilter.propTypes = {
    sitesTypeFilterActive: PropTypes.bool.isRequired,
    sitesTypeFilter: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
    setSitesTypeFiltersDispatch: PropTypes.func.isRequired
}

export default SitesTypeFilter;
