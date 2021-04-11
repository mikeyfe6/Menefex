import React from 'react';

import { backdropStylo } from '../../styles/modules/backdrop.module.scss';

const backdrop = (props) => (
  <div className={backdropStylo} onClick={props.click} role="presentation" />
);

export default backdrop;
