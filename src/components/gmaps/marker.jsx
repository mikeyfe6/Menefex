/* eslint-disable no-unused-vars */

import React from 'react';
import '../../styles/marker.scss';

const Marker = (color, name, id) => {
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={name}
    />
  );
};

export default Marker;
