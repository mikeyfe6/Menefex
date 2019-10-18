import React from 'react';

// components
import Header from './header';
import Footer from './footer';
import Quote from './quote';

// styles
import '../styles/index.scss';
import 'normalize.css';

import LayoutDesign from '../styles/modules/layout.module.scss';

// layout
const Layout = (props) => {
  return (
    <div>
      <body>
        <Header />
        <Quote />
        <div className={LayoutDesign.container}>
          <div className={LayoutDesign.content}>{props.children}</div>
        </div>
        <Footer />
      </body>
    </div>
  );
};

export default Layout;
