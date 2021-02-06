import React from 'react';

import hamburgerDesign from '../../styles/modules/hamburger.module.scss';

const drawerToggleButton = (props) => (
  <button
    type="button"
    className={hamburgerDesign.toggleButton}
    onClick={props.click}
    aria-label="Menu"
  >
    <div className={hamburgerDesign.toggleButton__line} />
    <div className={hamburgerDesign.toggleButton__line} />
    <div className={hamburgerDesign.toggleButton__line} />
  </button>
);

export default drawerToggleButton;
