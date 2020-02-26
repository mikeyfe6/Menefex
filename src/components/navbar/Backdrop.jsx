/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';

import backdropDesign from '../../styles/modules/backdrop.module.scss';

const backdrop = (props) => {
  return (
    <div
      className={backdropDesign.backdrop}
      onClick={props.click}
      role="presentation"
    />
  );
};

export default backdrop;
