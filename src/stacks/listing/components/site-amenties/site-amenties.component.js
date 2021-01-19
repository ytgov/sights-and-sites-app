import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {SITE_AMENTIES} from '../../../../config';
import SiteAmentiesStyles from './site-amenties.styles';
import SiteType from '../../../../types/site.type';
import Modal from 'react-native-modal';
import {H3} from '../../../../theme/typings';
import {COLORS} from '../../../../theme/config';
import {Button} from "native-base";

const {width} = Dimensions.get('window');

class SiteAmenties extends React.Component {
    state = {
        modal: false
    };

    getAmenties(item) {
        let items = [];
        let data = [
            'outhouse', 'bear_proof_garbage_bins', 'bear_proof_recycling_bins',
            'picnic_tables', 'cook_shelter', 'fire_ring', 'bear_proof_cache_or_lockers',
            'boat_launch', 'dock', 'trail', 'playground', 'outhouse_accessible',
            'campsite_designed_for_the_mobility_impaired', 'hand_pump_or_water_tank', 'beach',
            'viewing_structures', 'interpretive_centre', 'group_campsite', 'tent_pads', 'swimming_area', 'change_room', 'outdoor_amphitheatre'
        ];

        data.map(amenty => {
            if (item[amenty]) {
                items.push(SITE_AMENTIES[amenty])
            }
        });
        return items;
    }

    renderModal(site) {

        return (
            <Modal
                isVisible={this.state.modal}
                onBackdropPress={() => this.setState({modal: false})}
                deviceWidth={Dimensions.get('window').width}
            >
                <View style={{
                    width: '100%',
                    backgroundColor: 'white',
                    padding: 30,
                    justifyContent: 'center',
                    borderRadius: 4,
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                }}>
                    {
                        this.getAmenties(site).map(item => (
                            <View key={`modal-wrapper-${item.id}`} style={{
                                flexDirection: 'row',
                                marginBottom: 10,
                                maxWidth: '85%',
                            }}>
                                <Image source={item.imageInactive} key={`modal-image-${item.id}`}
                                       style={SiteAmentiesStyles.amenitiesListIcon}
                                       resizeMode='contain'/>
                                <H3 style={{paddingTop: 10, paddingLeft: 10, width: '100%'}} black>{item[this.props.locale]}</H3>
                            </View>
                        ))
                    }

                    <Button block style={{backgroundColor: COLORS.accent}}
                            onPress={() => this.setState({modal: false})}>
                        <Text style={{color: '#FFF'}}>Close</Text>
                    </Button>
                </View>
            </Modal>
        )
    }

    render() {
        const {item} = this.props;
        return (
            <View>
                {this.renderModal(item)}
                <TouchableOpacity onPress={() => this.setState({modal: true})}
                                  style={SiteAmentiesStyles.amenitiesList}>
                    {
                        this.getAmenties(item).chunk_inefficient(Math.floor(width / 50)).map((items, index) => (
                            <View key={'amen-t-' + index} style={{flexDirection: 'row', width}}>
                                {
                                    items.map(item => (
                                        <Image source={item.imageInactive} key={item.id}
                                               style={SiteAmentiesStyles.amenitiesListIcon}
                                               resizeMode='contain'/>
                                    ))
                                }
                            </View>
                        ))
                    }

                </TouchableOpacity>
            </View>
        )
    }
}

SiteAmenties.propTypes = {
    item: SiteType.isRequired,
    locale: PropTypes.string.isRequired
}

export default SiteAmenties;
