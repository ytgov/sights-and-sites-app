import PropTypes from 'prop-types';

const AccordionType = PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}))

export default AccordionType;