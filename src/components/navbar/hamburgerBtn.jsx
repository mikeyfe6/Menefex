import React from 'react';

import * as hamburberStyles from '../../styles/modules/hamburger.module.scss';

const HamburgerBtn = ({ click }) => (
  <button
    type="button"
    className={hamburberStyles.hamburger}
    onClick={click}
    aria-label="Menu"
  >
    <div />
    <div />
    <div />
  </button>
);

export default HamburgerBtn;
