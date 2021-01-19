import React from 'react';
import {Dimensions, Image, TouchableOpacity, View} from 'react-native';
import SiteType from '../../../../types/site.type';
import PropTypes from 'prop-types';
import {Caption, Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {Button, Icon} from 'native-base';
import Modal from 'react-native-modal';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {connect} from 'react-redux';
import {fetchGMLocation} from '../../../../store/actions/listing';
import {APP_CONFIG} from '../../../../config';
import pinIcon from '../../../../../assets/images/pin.png';

const accessToken = APP_CONFIG.map_box;
MapboxGL.setAccessToken(accessToken);

const mapIcon = require('../../../../../assets/stacks/tabs/map-icon.png');

const styles = {
    icon: {
        iconImage: pinIcon,
        iconAllowOverlap: true,
        iconSize: 0.15,

    },
};

class MapViewModal extends React.Component {
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
                    marginTop: 30,
                    backgroundColor: '#FFF',
                    height: (Dimensions.get('window').height / 1.5)
                }}>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        right: 0,
                        top: 15,
                        zIndex: 10000,
                        width: 50,
                        height: 50
                    }}
                                      onPress={() => this.setState({modal: false})}>
                        <Icon name='close'/>
                    </TouchableOpacity>
                    <MapboxGL.MapView
                        ref={c => (this._map = c)}
                        style={{
                            flex: 1,
                            height: (Dimensions.get('window').height / 1.5)
                        }}>
                        <MapboxGL.UserLocation />

                        <MapboxGL.Camera
                            centerCoordinate={[item.longitude, item.latitude]}
                            zoomLevel={10}
                        />

                        <MapboxGL.PointAnnotation id='itemModalAnnotation' coordinate={[item.longitude, item.latitude]} />
                    </MapboxGL.MapView>
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
                        <Image style={{
                            width: 26,
                            height: 26
                        }} resizeMode='contain' source={mapIcon}/>
                    </View>
                    <Caption>{i18n.t('siteTabs.map_view')}</Caption>
                </Button>
            </View>
        )
    }

}

MapViewModal.propTypes = {
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
})(MapViewModal);
