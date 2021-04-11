import React from 'react';

import {
  toggleButton,
  toggleButtonLine,
} from '../../styles/modules/hamburger.module.scss';

const drawerToggleButton = (props) => (
  <button
    type="button"
    className={toggleButton}
    onClick={props.click}
    aria-label="Menu"
  >
    <div className={toggleButtonLine} />
    <div className={toggleButtonLine} />
    <div className={toggleButtonLine} />
  </button>
);

export default drawerToggleButton;
