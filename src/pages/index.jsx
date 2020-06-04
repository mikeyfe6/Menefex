import React from 'react';

import Layout from '../components/layout';
// import { Link } from 'gatsby';

import SEO from '../components/seo';

// import { Animated } from 'react-animated-css';

import Hero from '../components/hero';
import Quote from '../components/quote';
import Swiper from '../components/swiper';
import Smallbio from '../components/smallbio';

// TODO: pagina helemaal responsive maken

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Website of Webapp? Webmediabedrijf Gimmix uit Amsterdam staat garant voor al uw webgerelateerde wensen en ambities."
        keywords="website laten maken, webapp, apps, webapplicatie, projecten, portfolio, wordpress website, reactjs, gatsby, javascript, freelance, zzp, elementor, michael fransman, amsterdam, amsterdam zuidoost, web developer, ondernemer, entrepeneur, mikey, mikeyfe, mikeyfe6, webmediabedrijf, gimmix"
      />
      <Hero />

      <div className="specvertical" />
      <br />
      <div className="extrawhitespace" />

      <h1 className="hometitles">Biografie</h1>
      <br />

      <Smallbio />

      <div className="extrawhitespace" />
      <div className="vertical" />

      <div id="servicescroll" className="extrawhitespace" />

      <h1 className="hometitles">Services & Diensten</h1>
      <br />

      <Quote />

      <div className="extrawhitespace" />
      <div className="vertical" />

      <div id="projectscroll" className="extrawhitespace" />

      <h1 className="hometitles"> Recente Projecten</h1>
      <br />

      <Swiper />

      <div className="whitespace" />
    </Layout>
  );
};

export default IndexPage;

/* <h1>Welkom bij Gimmix</h1>
<h2>Ik ben Michael Fransman</h2>
<p>
  Heb je een fantastische webdeveloper nodig?{' '}
  <Link to="/contact">Klik hier</Link>
</p> */

/* <Animated
  animationIn="bounceInLeft"
  animationOut="fadeOut"
  isVisible={true}
></Animated>; */
