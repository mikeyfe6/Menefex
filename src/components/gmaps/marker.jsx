import React from 'react';

import PropTypes from 'prop-types';

import miniMaps from '../../logo/Menefex-icon.svg';

import '../../styles/marker.scss';

const Marker = ({ name }) => (
  <img
    src={miniMaps}
    alt="Menefex Webmediabedrijf Google Maps Marker"
    title={name}
    className="marker"
  />
);

Marker.defaultProps = {
  name: 'Menefex Webmediabedrijf',
};

Marker.propTypes = {
  name: PropTypes.string,
};

export default Marker;
