import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import SiteType from '../../../../types/site.type';
import PropTypes from 'prop-types';
import {Caption, H3, Helpers} from '../../../../theme/theme';
import SiteFooterTabsStyles from '../site-footer-tabs/site-footer-tabs.styles';
import i18n from '../../../../locale/locale';
import {Button, Text} from 'native-base';
import Modal from 'react-native-modal';
import {COLORS} from '../../../../theme/config';
import {connect} from 'react-redux';
import {getFormattedDistanceText} from '../../../../shared/services/distance';
import {fetchGMLocation} from '../../../../store/actions/listing';


const directionsIcon = require('../../../../../assets/stacks/tabs/directions-icon.png');


class MapDirectionModal extends React.Component {
    state = {
        modal: false,
    };

    openModal() {
        this.setState({
            modal: true,
        })
    }


    renderMapModal() {
        const {item, location} = this.props;
        return (
            <Modal
                isVisible={this.state.modal}
                onBackdropPress={() => this.setState({modal: false})}
                deviceWidth={Dimensions.get('window').width}
            >
                <View style={{
                    backgroundColor: 'white',
                    padding: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    // height: (Dimensions.get('window').height / 2)
                }}>

                    <View>
                        {
                            (item.map && !item.map.fetched) ? (
                                <Text style={{color: COLORS.warning}}>We can't provide you with the exact direction
                                    because you're outside of the borders.</Text>
                            ) : null
                        }
                        {
                            item.map ? (
                                <View style={{paddingVertical: 15}}>
                                    <H3 black>Distance :</H3>
                                    <Text>{item.map.fetched ? '' : 'Approx: '} {getFormattedDistanceText(item.map.distance)}</Text>
                                </View>
                            ) : null
                        }

                        {
                            item.site_directions ? (
                                <View style={{paddingVertical: 15}}>
                                    <H3 black>Site Directions :</H3>
                                    <Caption black style={{fontSize: 14}}>
                                        {item.site_directions}
                                    </Caption>
                                </View>
                            ) : false
                        }

                        {
                            item.secondary_road_name ? (
                                <View style={{paddingVertical: 15}}>
                                    <H3 black>Secondary Road :</H3>
                                    <Caption black style={{fontSize: 14}}>
                                        {item.secondary_road_name} {item.secondary_road_km ? ', ': ''} {item.secondary_road_km} {item.secondary_road_km ? ' km': ''}
                                    </Caption>
                                </View>
                            ) : false
                        }
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button style={{backgroundColor: COLORS.accent}}
                                onPress={() => this.setState({modal: false})}>
                            <Text style={{color: '#FFF'}}>Close</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderMapModal()}
                <Button vertical onPress={() => this.openModal()}>
                    <View style={Helpers.positionRelative}>
                        <Image style={SiteFooterTabsStyles.tabIcon} resizeMode='contain' source={directionsIcon}/>
                    </View>
                    <Caption>{i18n.t('siteTabs.directions')}</Caption>
                </Button>
            </View>
        )
    }

}

MapDirectionModal.propTypes = {
    item: SiteType.isRequired,
    networkAvailable: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        location: state.coreStore.location,
        canGrabLocation: state.coreStore.canGrabLocation,
        listingGM: state.listingStore.listingGM,
    };
};

export default connect(mapStateToProps, (dispatch) => {
    return {
        fetchGMLocationDispatch: (location, site) => dispatch(fetchGMLocation(location, site)),
    }
})(MapDirectionModal);
