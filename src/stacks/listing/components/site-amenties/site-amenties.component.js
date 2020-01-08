import React from 'react';
import PropTypes from 'prop-types';
import {Dimensions, Image, View} from 'react-native';
import {SITE_AMENTIES} from '../../../../config';
import SiteAmentiesStyles from './site-amenties.styles';
import SiteType from '../../../../types/site.type';

const {width} = Dimensions.get('window');

class SiteAmenties extends React.Component {

    getAmenties(item) {
        let items = [];
        let data = [
            'outhouse', 'bear_proof_garbage_bins', 'bear_proof_recycling_bins',
            'picnic_tables', 'cook_shelter', 'fire_ring', 'bear_proof_cache_or_lockers',
            'boat_launch', 'dock', 'hiking_trails', 'playground', 'outhouse_accessible',
            'campsite_designed_for_the_mobility_impaired', 'hand_pump_or_water_tank', 'sandy_or_cobble_beach',
            'viewing_structures', 'interpretive_centre', 'group_campsite', 'tent_pads', 'swimming_area', 'change_room', 'outdoor_amphitheatre'
        ];

        data.map(amenty => {
            if (item[amenty]) {
                items.push(SITE_AMENTIES[amenty])
            }
        });
        return items;
    }

    render() {
        const {item} = this.props;
        return (
            <View style={SiteAmentiesStyles.amenitiesList}>
                {
                    this.getAmenties(item).chunk_inefficient(Math.floor(width / 50)).map((items, index) => (
                        <View key={'amen-t-'+index} style={{flexDirection: 'row', width}}>
                            {
                                items.map(item => (
                                    <Image source={item.imageInactive} key={item.id} style={SiteAmentiesStyles.amenitiesListIcon}
                                           resizeMode='contain'/>
                                ))
                            }
                        </View>
                    ))
                }

            </View>
        )
    }
}

SiteAmenties.propTypes = {
    item: SiteType.isRequired,
    locale: PropTypes.string.isRequired
}

export default SiteAmenties;
