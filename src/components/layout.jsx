import React, { useState } from 'react';
import { Link } from 'gatsby';
import CookieConsent from 'react-cookie-consent';

// components
import DesktopMenu from './navbar/desktopMenu';
import MobileMenu from './navbar/mobileMenu';
import MenuOverlay from './navbar/menuOverlay';
import Footer from './footer';

import ResponsiveTag from './helpers/responsiveTag';

// styles
import '../styles/layout.scss';
import '../styles/cookie.scss';

import minilogo from '../logo/Menefex-icon.svg';

const Layout = ({ children }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState);
  };

  const menuOverlayClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <MenuOverlay click={menuOverlayClickHandler} />;
  }

  return (
    <>
      <div id="tosmallforyouscreen">
        <div className="container">
          <img src={minilogo} alt="Menefex Mini Logo" />
          <p>
            <strong>Sorry!</strong> De scherm van je toestel is te klein om de
            website juist weer te geven...
          </p>
        </div>
      </div>

      <DesktopMenu drawerClickHandler={drawerToggleClickHandler} />
      <MobileMenu show={sideDrawerOpen} />

      <main>{children}</main>

      <Footer />

      <CookieConsent
        expires={60}
        buttonText="Accepteer"
        declineButtonText="Weiger"
        cookieName="menefex-cookie"
        extraCookieOptions={{ domain: '.menefex.nl' }}
        enableDeclineButton
        sameSite="strict"
        overlayClasses="cookie"
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonWrapperClasses="cookie-btn-wrapper"
        buttonClasses="cookie-btn-accept"
        declineButtonClasses="cookie-btn-decline"
        disableStyles
        flipButtons
        overlay
      >
        <h3>Cookies</h3>
        <br />
        <p>
          Deze site plaatst cookies op je computer om je websitebezoek te
          optimaliseren en gepersonaliseerde diensten aan te bieden, zowel hier
          als via andere media. Raadpleeg ons{' '}
          <Link to="/privacy-policy/" style={{ color: '#FFCC00' }}>
            Privacybeleid{' '}
          </Link>{' '}
          voor meer informatie over de gebruikte cookies.
          <br />
          <br />
          <span>
            We volgen je gegevens <b>niet</b> bij sitebezoeken, maar om aan je
            voorkeuren te voldoen, gebruiken we enkele cookies zodat je deze
            keuze niet herhaaldelijk hoeft te maken.
          </span>
        </p>
      </CookieConsent>

      {backdrop}

      {process.env.NODE_ENV === 'development' && <ResponsiveTag />}
    </>
  );
};

export default Layout;
