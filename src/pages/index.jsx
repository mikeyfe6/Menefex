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
        title="Welkom"
        description="Webmediabedrijf Gimmix staat garant voor al webgerelateerde wensen"
        keywords="work, website, app, projecten, wordpress, react, gatsby, freelance, elementor, michael fransman, amsterdam, zuidoost, portfolio, web developer, ondernemer, entrepeneur, mikey, mikeyfe, mikeyfe6"
      />

      <Hero />
      <div className="vertical" />
      <div className="whitespace" />
      <div className="whitespace" />

      <br />
      <h1 className="hometitles">Biografie</h1>
      <br />

      <Smallbio />

      <div className="whitespace" />
      <div className="vertical" />
      <br />
      <br />

      <div id="servicescroll" className="extrawhitespace" />

      <br />
      <h1 className="hometitles">Services</h1>
      <br />

      <Quote />

      <div className="whitespace" />
      <div className="vertical" />
      <br />
      <br />

      <div id="projectscroll" className="extrawhitespace" />

      <br />
      <h1 className="hometitles">Projecten</h1>
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
