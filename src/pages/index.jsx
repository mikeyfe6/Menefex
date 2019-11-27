import React from 'react';
import Layout from '../components/layout';
// import { Link } from 'gatsby';

import SEO from '../components/seo';

// import { Animated } from 'react-animated-css';

import Hero from '../components/hero';
import Quote from '../components/quote';
import Swiper from '../components/swiper';

// TODO: pagina helemaal responsive maken

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welkom" />

      <Hero />
      <div className="vertical" />
      <br />
      <br />

      <div id="servicescroll" className="whitespace" />

      <br />
      <h1 className="hometitles">Services</h1>

      <Quote />

      <div className="whitespace" />
      <div className="vertical" />
      <br />
      <br />

      <div id="projectscroll" className="whitespace" />

      <br />
      <h1 className="hometitles">Projecten</h1>

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
