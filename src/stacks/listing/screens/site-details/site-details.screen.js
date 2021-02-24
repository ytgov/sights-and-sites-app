import React from 'react';
import {View, Text} from 'react-native'
import {connect} from 'react-redux';
import {Image} from 'react-native-expo-image-cache';
import PropTypes from 'prop-types';
import {Container, Content, Header} from 'native-base';
import findNearest from 'geolib/es/findNearest';
import SiteDetailsStyles from './site-details.styles';
import {Body1, COMMON} from '../../../../theme/theme';
import NearbySites from '../../components/nearby-sites/nearby-sites.component';
import NavigationBackButton from '../../../../shared/components/navigation/back-button';
import SiteFooterTabs from '../../components/site-footer-tabs/site-footer-tabs.component';
import MySitesButton from '../../components/my-sites-button/my-sites-button.component';
import SiteCardInfo from '../../components/site-card-info/site-card-info.component';
import SiteTypes from '../../components/site-types/site-types.component';
import SiteWarning from '../../components/site-warning/site-warning.component';
import {filterListing} from '../../../../store/actions/listing';
import {setMySitesFilters, toggleMySitesState} from '../../../../store/actions/filters';
import AddToMySitesNotification
    from '../../components/add-to-my-sites-notification/add-to-my-sites-notification.component';
import SiteType from '../../../../types/site.type';
import {APP_CONFIG} from '../../../../config';
import {getPreciseDistance} from 'geolib';

const fallback = require('../../../../../assets/common/fallback.png');

class SiteDetails extends React.Component {
    addToMySitesNotificationTimeout = null;

    state = {
        addToMySitesNotificationVisible: false,
        addToMySitesNotificationDelay: 2000,
    }

    componentWillUnmount() {
        if (this.addToMySitesNotificationTimeout) {
            clearTimeout(this.addToMySitesNotificationTimeout);
        }
    }

    showAddToMySitesNotification() {
        const {addToMySitesNotificationDelay} = this.state;
        this.setState({
            addToMySitesNotificationVisible: true
        }, () => {
            this.addToMySitesNotificationTimeout = setTimeout(() => {
                this.setState({
                    addToMySitesNotificationVisible: false
                })
            }, addToMySitesNotificationDelay)
        })
    }

    render() {
        const {addToMySitesNotificationVisible} = this.state;
        const {navigation, locale, mySites, toggleMySitesStateDispatch, setMySitesFiltersDispatch, filterListingDispatch, listingRaw, networkAvailable} = this.props;
        const item = navigation.getParam('item');
        const itemLocation = {
            latitude: item.latitude,
            longitude: item.longitude
        }

        const preview = {uri: APP_CONFIG.cache.imagePreview};
        const {site_id,} = item;
        const uri = item.image_url;
        const id = site_id
        const isSiteInMySites = !!mySites.filter(site => site === id).length

        const nearBySite = findNearest(itemLocation, listingRaw.filter(site => site.site_id !== item.site_id).map(site => {
            return {id: site.site_id, latitude: site.latitude, longitude: site.longitude}
        }));
        const nearBySiteID = nearBySite ? nearBySite.id : null;
        const nearBySites = listingRaw.filter(site => {
            if (site.site_id !== item.site_id) {
                let distance = getPreciseDistance(
                    {latitude: site.latitude, longitude: site.longitude},
                    {latitude: item.latitude, longitude: item.longitude},
                    1
                );
                if ((distance / 1000) < 200) {
                    return true
                }
            }
            return false;
        })
            .map(site => site.site_id);

        return (
            <Container style={{backgroundColor: '#000'}}>
                <Header style={[COMMON.header, COMMON.headerBlack]} iosBarStyle="light-content">
                    <NavigationBackButton navigation={navigation}/>
                </Header>
                <Content>
                    <View style={COMMON.content}>
                        <View style={[SiteDetailsStyles.siteImgBox]}>
                            <Image {...{preview, uri}} resizeMode='cover' tint={APP_CONFIG.cache.tint}
                                   transitionDuration={APP_CONFIG.cache.transitionDuration}
                                   style={SiteDetailsStyles.siteImg} fallback={fallback}/>
                        </View>
                        <MySitesButton id={id} isSiteInMySites={isSiteInMySites}
                                       toggleMySitesStateDispatch={toggleMySitesStateDispatch}
                                       showAddToMySitesNotification={() => this.showAddToMySitesNotification()}
                                       filterListingDispatch={filterListingDispatch}/>
                    </View>
                    <View style={[COMMON.content, SiteDetailsStyles.siteContentBox]}>
                        <SiteTypes item={item} />
                        <SiteCardInfo item={item} locale={locale}/>

                        {!!item.warning && <SiteWarning value={item.warning}/>}
                        <Body1 black regular style={{paddingTop: 16, width: '95%', marginBottom: 15}}>
                            {
                                item.site_description
                            }
                        </Body1>

                        {
                            !!item.site_directions && <Body1 black regular style={{paddingTop: 16, width: '95%'}}>
                                {
                                    item.site_directions
                                }
                            </Body1>
                        }


                    </View>

                    {/* TODO Item id should be replaced with near by site id */}
                    {nearBySiteID &&
                    <NearbySites parentLocation={itemLocation} items={nearBySites} itemId={nearBySiteID} locale={locale}
                                 navigation={navigation}/>}
                </Content>

                <View style={{position: 'relative', height: 'auto'}}>
                    <SiteFooterTabs item={item} locale={locale} networkAvailable={networkAvailable}  {...this.props}
                                    setMySitesFiltersDispatch={setMySitesFiltersDispatch}/>
                    <AddToMySitesNotification visible={addToMySitesNotificationVisible}/>
                </View>
            </Container>
        )
    }
}

SiteDetails.propTypes = {
    locale: PropTypes.string.isRequired,
    mySites: PropTypes.arrayOf(PropTypes.number).isRequired,
    toggleMySitesStateDispatch: PropTypes.func.isRequired,
    setMySitesFiltersDispatch: PropTypes.func.isRequired,
    networkAvailable: PropTypes.bool.isRequired,
    filterListingDispatch: PropTypes.func.isRequired,
    listingRaw: PropTypes.arrayOf(SiteType).isRequired
}

const mapStateToProps = (state) => {
    return {
        locale: state.localeStore.locale,
        networkAvailable: state.coreStore.networkAvailable,
        mySites: state.filtersStore.mySites,
        listingRaw: state.listingStore.listingRaw
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleMySitesStateDispatch: value => dispatch(toggleMySitesState(value)),
        setMySitesFiltersDispatch: value => dispatch(setMySitesFilters(value)),
        filterListingDispatch: () => dispatch(filterListing())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteDetails);
