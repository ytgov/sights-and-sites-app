import React from 'react';
import {Dimensions, Image, View, TouchableOpacity} from 'react-native';
import SiteType from '../../../../types/site.type';
import PropTypes from 'prop-types';
import {Caption, Helpers} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {Button, Text, Icon} from 'native-base';
import Modal from 'react-native-modal';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {COLORS} from '../../../../theme/config';
import {connect} from 'react-redux';
import {fetchGMLocation} from '../../../../store/actions/listing';
import {APP_CONFIG} from '../../../../config';

const accessToken = APP_CONFIG.map_box;
MapboxGL.setAccessToken(accessToken);

const mapIcon = require('../../../../../assets/stacks/tabs/map-icon.png');


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
                        <Icon name='close' />
                    </TouchableOpacity>
                    <MapboxGL.MapView
                        styleURL={MapboxGL.StyleURL.Light}
                        zoomLevel={15}
                        style={{
                            flex: 1
                        }}>
                        <MapboxGL.Camera
                            centerCoordinate={[item.longitude, item.latitude]}
                            zoomLevel={10}
                        />

                        <MapboxGL.PointAnnotation
                            key={'site-location'}
                            id={'siteLocation'}
                            coordinate={[item.longitude, item.latitude]}
                            style={{zIndex: 10000}}
                            title={item.site_name}
                        >
                            <Image style={{width: 20, height: 20, zIndex: 1000}} resizeMode="contain"
                                   source={require('../../../../../assets/images/pin.png')}/>
                            <MapboxGL.Callout title={item.site_name}/>
                        </MapboxGL.PointAnnotation>
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
