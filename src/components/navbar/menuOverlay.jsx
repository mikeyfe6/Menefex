import React from 'react';

import * as backDropStyles from '../../styles/modules/backdrop.module.scss';

const MenuOverlay = ({ click }) => (
  <div
    className={backDropStyles.backdrop}
    onClick={click}
    role="presentation"
  />
);

export default MenuOverlay;
