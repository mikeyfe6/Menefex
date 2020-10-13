import React from 'react';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// FontAwesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
  faGithubSquare,
  faWhatsappSquare,
  faTwitterSquare,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import {
  faPhoneSquareAlt,
  faGlobe,
  faMobile,
  faEye,
  faBackward,
  faPaperPlane,
  faShoppingCart,
  faRss,
} from '@fortawesome/free-solid-svg-icons';

// components
import Toolbar from './navbar/Toolbar';
import SideDrawer from './navbar/SideDrawer';
import Backdrop from './navbar/Backdrop';
import Footer from './footer';

// styles
import '../styles/index.scss';
import '../styles/layout.scss';

library.add(
  fab,
  faPhoneSquareAlt,
  faGlobe,
  faMobile,
  faEye,
  faBackward,
  faPaperPlane,
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
  faGithubSquare,
  faWhatsappSquare,
  faTwitterSquare,
  faSpotify,
  faShoppingCart,
  faRss,
);

// TODO: container & content=wrap kunnen weg

// layout
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div id="page-container">
        <div id="content-wrap">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '100px' }}>
            <div>{this.props.children}</div>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
