import React from 'react';
import {FlatList, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import ListViewStyles from './list-view.styles';
import ListViewItem from './list-view.item';
import {APP_CONFIG} from '../../../../config';
import NoItems from '../../../../shared/components/no-items/no-items.component';
import LoadMore from '../../../../shared/components/load-more/load-more.component';
import SiteType from '../../../../types/site.type';
import i18n from '../../../../locale/locale';
import {connect} from 'react-redux';

class ListViewContainer extends React.Component {
    state = {}

    loadMore() {
        const {incrementListingPageDispatch} = this.props;
        incrementListingPageDispatch();
    }

    render() {
        const {data, locale, navigation, currentListingPage, listingPagesLimit} = this.props;
        const dataToRender = data.slice(0, currentListingPage * APP_CONFIG.listing.itemsToShow);
        return (
            <View>
                {
                    dataToRender.length ? (
                        <View>
                            <FlatList
                                style={ListViewStyles.listBox}
                                data={dataToRender}
                                keyExtractor={(item) => item.site_id.toString()}
                                renderItem={({item}) => <ListViewItem locale={locale} item={item}
                                                                      navigation={navigation}/>}
                            />
                            {(currentListingPage < listingPagesLimit) &&
                            <LoadMore callback={() => this.loadMore()} text={
                                i18n.t('listContainer.moreSites')}/>}
                        </View>
                    ) : this.renderNoItemsFound()
                }
            </View>
        )
    }

    renderNoItemsFound() {
        // return  (
        //     <Text style={{
        //         color: "#FFF",
        //         padding: 50
        //     }}>{JSON.stringify(this.props.mySitesFilter)}</Text>
        // )
        if(this.props.mySitesFilter) {
            return <NoItems value={i18n.t('listContainer.noFavouritesFound')}/>
        }
        return (
            <NoItems value={i18n.t('listContainer.noSitesFound')}/>
        )
    }
}

ListViewContainer.propTypes = {
    data: PropTypes.arrayOf(SiteType).isRequired,
    locale: PropTypes.string.isRequired,
    currentListingPage: PropTypes.number.isRequired,
    listingPagesLimit: PropTypes.number.isRequired,
    incrementListingPageDispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale,
        nearMeFilter: state.filtersStore.nearMeFilter,
        mySitesFilter: state.filtersStore.mySitesFilter,
        highwaysFilter: state.filtersStore.highwaysFilter,
        regionsFilter: state.filtersStore.regionsFilter,
        sitesTypeFilter: state.filtersStore.sitesTypeFilter,
        sitesTypeFilterActive: state.filtersStore.sitesTypeFilterActive,
        selectedListingView: state.listingStore.selectedListingView,
        listingFiltered: state.listingStore.listingFiltered,
        currentListingPage: state.listingStore.currentListingPage,
        listingItemsCount: state.listingStore.listingItemsCount,
        listingPagesLimit: state.listingStore.listingPagesLimit
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListViewContainer);
