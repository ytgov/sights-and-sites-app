import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Body1} from '../../../../theme/theme';
import i18n from '../../../../locale/locale';
import {getFormattedDistanceText} from '../../../../shared/services/distance';
import LocationType from '../../../../types/location.type';
import SiteType from '../../../../types/site.type';
import {fetchGMLocation} from '../../../../store/actions/listing';

class SiteDistance extends React.Component {

    render() {
        const {location, canGrabLocation, siteLocation, parentLocation, listingGM, site, fetchGMLocationDispatch} = this.props;
        let result = null;
        let approx = null

        if (site.map && site.map.distance !== null) {
            result = getFormattedDistanceText(site.map.distance);
            if(!site.map.fetched) {
                approx = "Approx: "
            }
        }
        return (result) ? <Body1 style={{color: '#DB9F39'}}>{approx} {result}</Body1> :
            <Body1 style={{color: '#DB9F39'}}>
                {i18n.t('location.noLocationData')}</Body1>
    }
}

SiteDistance.propTypes = {
    parentLocation: PropTypes.shape({id: PropTypes.string, latitude: PropTypes.number, longitude: PropTypes.number}),
    location: LocationType,
    siteLocation: LocationType.isRequired,
    canGrabLocation: PropTypes.bool.isRequired,
    site: SiteType.isRequired,
};

SiteDistance.defaultProps = {
    location: null
}

SiteDistance.defaultProps = {
    parentLocation: null
}

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
})(SiteDistance);
