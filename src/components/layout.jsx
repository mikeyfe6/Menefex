import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Link } from 'gatsby';

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

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
          <CookieConsent
            overlay
            expires={60}
            location="top"
            buttonText="Accepteer"
            enableDeclineButton
            flipButtons="true"
            declineButtonText="Weiger"
            cookieName="gimmix-optout"
            contentStyle={{
              margin: '1.25% 2.5% 1% 2.5%',
            }}
            style={{
              background: 'linear-gradient(to right, #656565, #323232',
              opacity: '0.95',
              color: '#dadada',
              fontSize: '11.5px',
              borderBottom: '3px solid #FFCC00',
              borderTop: '1.5px solid #656565',
            }}
            buttonStyle={{
              color: '#323232',
              backgroundColor: 'FFCC00',
              fontSize: '14px',
              borderRadius: '3px',
              opacity: '0.95',
            }}
            declineButtonStyle={{
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
            media. Zie ons <Link to="/privacy-policy">Privacybeleid</Link> voor
            meer informatie over de cookies die we gebruiken.
            <br />
            <br />
            <span style={{ fontSize: '10px' }}>
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

export default Layout;
