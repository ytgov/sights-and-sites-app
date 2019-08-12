import PropTypes from 'prop-types';

const QueryType = PropTypes.shape({
  query: PropTypes.string.isRequired,
  queryFormatted: PropTypes.string.isRequired

})

export default QueryType