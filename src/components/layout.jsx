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

import minilogo from '../logo/Menefex-icon.svg';

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
        <div id="tosmallforyouscreen">
          <div className="container">
            <img src={minilogo} alt="Menefex Mini Logo" />
            <p>
              <strong>Sorry!</strong> De scherm van je toestel is te klein om de
              website juist weer te geven...
            </p>
          </div>
        </div>
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
            contentStyle={
              {
                // padding: '0.5em 1em 0.5em',
              }
            }
            style={{
              background: 'linear-gradient(to right, #595858, #333333)',
              opacity: '0.95',
              color: '#dadada',
              fontSize: '13px',
              borderBottom: '3px solid #FFCC00',
              borderTop: '3px solid #595858',
              padding: '0 .5em 1em',
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
              marginLeft: '0px',
              opacity: '0.95',
            }}
          >
            Deze website slaat <b>cookies</b> op je computer op. Deze cookies
            worden gebruikt om je websitebezoek te verbeteren en meer
            gepersonaliseerde diensten aan je aan te bieden, zowel op deze
            website als via andere media. Zie ons{' '}
            <Link to="/privacy-policy/" style={{ color: '#FFCC00' }}>
              Privacybeleid
            </Link>{' '}
            voor meer informatie over de cookies die we gebruiken.
            <br />
            <br />
            <span style={{ fontSize: '13px' }}>
              We zullen je gegevens <b>niet volgen</b> als je onze site bezoekt.
              Maar om te voldoen aan je voorkeuren moeten we enkele cookies
              gebruiken zodat je niet vaker wordt gevraagd om deze keus te
              maken.
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
