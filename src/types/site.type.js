import PropTypes from 'prop-types';

const SiteInfoType = PropTypes.shape({
  site_name: PropTypes.string.isRequired,
  site_description: PropTypes.string,
  highway: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.name
  })
})

const SiteType = PropTypes.shape({
  site_id: PropTypes.number.isRequired,
  uri: PropTypes.string,
  highway: PropTypes.number,
  region: PropTypes.number,
  site_types: PropTypes.arrayOf(PropTypes.string),
  siteAmenties: PropTypes.arrayOf(PropTypes.string),
  // indexes: PropTypes.shape({
  //   en: PropTypes.shape({ title: PropTypes.string.isRequired }),
  //   fr: PropTypes.shape({ title: PropTypes.string.isRequired })
  // }).isRequired,
  en: SiteInfoType,
  fr: SiteInfoType
})

export default SiteType;