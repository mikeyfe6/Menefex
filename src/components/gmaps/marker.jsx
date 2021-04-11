import React from 'react';

import PropTypes from 'prop-types';

import '../../styles/marker.scss';

const Marker = ({ color, name }) => (
  <div
    className="marker"
    style={{ backgroundColor: color, cursor: 'pointer' }}
    title={name}
  />
);

Marker.defaultProps = {
  color: null,
  name: 'Gimmix Webmediabedrijf',
};

Marker.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

export default Marker;
