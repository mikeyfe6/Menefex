import React from 'react';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquareAlt,
  faGlobe,
  faMobile,
  faEye,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

// components
import Menu from './menu';
import Footer from './footer';

// styles
import '../styles/index.scss';
import 'normalize.css';
import '../styles/layout.scss';

library.add(fab, faPhoneSquareAlt, faGlobe, faMobile, faEye, faBackward);

// layout
const Layout = (props) => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Menu />

        <div>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
