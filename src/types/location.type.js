import PropTypes from 'prop-types';

const LocationType = PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
});

export default LocationType;
