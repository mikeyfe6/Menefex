import React from 'react';
// import $ from 'jquery';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhoneSquareAlt,
  faAt,
  faSearchLocation,
  faGlobe,
  faMobile,
  faEye,
  faFileCode,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

// components
import Menu from './menu';
import Footer from './footer';

// styles
import '../styles/index.scss';
import 'normalize.css';
import '../styles/layout.scss';

library.add(
  faPhoneSquareAlt,
  faAt,
  faSearchLocation,
  faGlobe,
  faMobile,
  faEye,
  faFileCode,
  faCodeBranch,
);

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

// ----- SCROLL NA ONDER begin ----- //

// $('button').click(function() {
//   $('html,body').animate(
//     {
//       scrollTop: $('.second').offset().top,
//     },
//     'slow',
//   );
// });

// ----- SCROLL NA ONDER end ----- //

export default Layout;
