import React from 'react';
import {Dimensions, Image, Platform, View} from 'react-native';
import SiteType from '../../../../types/site.type';
import PropTypes from 'prop-types';
import {Linking} from 'expo';
import {Caption, Helpers} from '../../../../theme/theme';
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
                    flex: 1,
                    marginTop: 30,
                    backgroundColor: '#FFF',
                    height: (Dimensions.get('window').height / 2)
                }}>

                    <View style={{flex: 1, justifyContent: 'space-between', padding: 15}}>
                        {
                            (item.map && !item.map.fetched) ? (
                                <Text style={{color: COLORS.warning}}>We can't provide you with the exact direction
                                    because you're outside of the borders.</Text>
                            ) : null
                        }
                        {
                            item.map ? (
                                <View>
                                    <Text> {item.map.fetched ? '' : 'Approx: '} {getFormattedDistanceText(item.map.distance)}</Text>
                                </View>
                            ) : null
                        }


                        <View>
                            <Caption black style={{fontSize: 14}}>
                                {item.site_directions}
                            </Caption>

                        </View>
                        {/*<ScrollView style={{height: 200}}>*/}
                        {/*    <Text>{JSON.stringify(item)}</Text>*/}
                        {/*</ScrollView>*/}

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            {/*<Button style={{backgroundColor: COLORS.primary}} onPress={() => {*/}
                            {/*    if (Platform.OS === 'ios') {*/}
                            {/*        Linking.openURL(`http://maps.apple.com/maps?q=${item.latitude},${item.longitude}`);*/}
                            {/*    } else {*/}
                            {/*        Linking.openURL(`http://maps.google.com/maps?q=${item.latitude},${item.longitude}`);*/}
                            {/*    }*/}
                            {/*}}>*/}
                            {/*    <Text style={{color: '#FFF'}}>Open in maps</Text>*/}
                            {/*</Button>*/}
                            {/*<View style={{width: 15}}/>*/}
                            <Button style={{backgroundColor: COLORS.accent}}
                                    onPress={() => this.setState({modal: false})}>
                                <Text style={{color: '#FFF'}}>Close</Text>
                            </Button>
                        </View>
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
