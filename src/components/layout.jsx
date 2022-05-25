import React from 'react';

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';

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
  faPatreon,
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
  faPatreon,
);

// TODO: container & content=wrap kunnen weg

// layout
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sideDrawerOpen: false };
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    const { sideDrawerOpen } = this.state;
    const { children } = this.props;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div id="page-container">
        <div id="content-wrap">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '100px' }}>
            <div className="container">{children}</div>
          </main>
          <CookieConsent
            overlay
            flipButtons
            expires={60}
            location="top"
            buttonText="Accepteer"
            declineButtonText="Weiger"
            cookieName="menefex-cookie"
            extraCookieOptions={{ domain: '.menefex.nl' }}
            enableDeclineButton
            sameSite="strict"
            contentStyle={{
              margin: '1.25% 2.5% 1% 2.5%',
            }}
            style={{
              background: 'linear-gradient(to right, #595858, #333333)',
              opacity: '0.95',
              color: '#dadada',
              fontSize: '12px',
              borderBottom: '3px solid #FFCC00',
              borderTop: '1.5px solid #595858',
            }}
            buttonStyle={{
              color: '#323232',
              backgroundColor: 'FFCC00',
              fontSize: '14px',
              borderRadius: '3px',
              opacity: '0.95',
            }}
            declineButtonStyle={{
              fontWeight: '300',
              background: 'transparent',
              border: '1px solid #dadada86',
              borderRadius: '3px',
              color: '#FFCC00',
              cursor: 'pointer',
              flex: '0 0 auto',
              padding: '5.5px 12px',
              marginLeft: '0px',
              opacity: '0.95',
            }}
          >
            Deze website slaat cookies op je computer op. Deze cookies worden
            gebruikt om je websitebezoek te verbeteren en meer gepersonaliseerde
            diensten aan je aan te bieden, zowel op deze website als via andere
            media. Zie ons{' '}
            <Link to="/privacy-policy" style={{ color: '#FFCC00' }}>
              Privacybeleid
            </Link>{' '}
            voor meer informatie over de cookies die we gebruiken.
            <br />
            <br />
            <span style={{ fontSize: '11px' }}>
              We zullen je gegevens niet volgen als je onze site bezoekt. Maar
              om te voldoen aan je voorkeuren moeten we enkele cookies gebruiken
              zodat je niet vaker wordt gevraagd om deze keus te maken.
            </span>
          </CookieConsent>
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
