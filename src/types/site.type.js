import PropTypes from 'prop-types';

const SiteInfoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  highway: PropTypes.shape({
    number: PropTypes.number,
    name: PropTypes.name
  })
})

const SiteType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  uri: PropTypes.string,
  highway: PropTypes.number,
  region: PropTypes.number,
  siteTypes: PropTypes.arrayOf(PropTypes.number),
  siteAmenties: PropTypes.arrayOf(PropTypes.string),
  indexes: PropTypes.shape({
    en: PropTypes.shape({ title: PropTypes.string.isRequired }),
    fr: PropTypes.shape({ title: PropTypes.string.isRequired })
  }).isRequired,
  en: SiteInfoType,
  fr: SiteInfoType
})

export default SiteType;