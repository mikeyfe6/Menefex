import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';
// import { Link } from 'gatsby';

import SEO from '../components/seo';

// import { Animated } from 'react-animated-css';

import Hero from '../components/hero';
import Quote from '../components/quote';
import Projects from '../components/swiper';
import Smallbio from '../components/smallbio';

import '../styles/index.scss';

// TODO: pagina helemaal responsive maken

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="#1 Website Specialist"
        description="Een nieuwe professionele, modern & duurzame website of webapp nodig? Tijdelijk vanaf €345,- | Webmediabedrijf Gimmix uit Amsterdam staat garant voor al uw webgerelateerde wensen en ambities."
        keywords="website bouwen, webapplicatie bouwen, webshop bouwen, wordpress website bouwen, elementor specialist, wordpress specialist amsterdam, website specialist amsterdam, gimmix portfolio, seo specialist amsterdam, gatsbyjs, freelancer, zzp-er, michael fransman, amsterdam zuidoost, front-end web developer, zelfstandige ondernemer, entrepeneur, mikey, mikeyfe, mikeyfe6, webmediabedrijf, gimmix, best seo amsterdam, beste seo amsterdam, beste website bouwer amsterdam, seo amsterdam, black owned business, bob, b.o.b., maatwerk, op maat"
      />
      <Hero />

      <ScrollAnimation animateIn="zoomIn" delay={50} duration={3}>
        <div className="specvertical" />
      </ScrollAnimation>

      <br />

      <div id="biografiescroll" className="extrawhitespace" />

      <ScrollAnimation
        animateIn="fadeInRight"
        delay={500}
        offset={100}
        duration={2}
      >
        <h3 className="hometitles">Biografie</h3>
      </ScrollAnimation>

      <br />

      <ScrollAnimation animateIn="fadeInLeft" delay={1250} duration={2}>
        <Smallbio />
      </ScrollAnimation>

      <div className="extrawhitespace" />

      <ScrollAnimation animateIn="zoomIn" delay={50} duration={3}>
        <div className="vertical" />
      </ScrollAnimation>

      <div id="servicescroll" className="extrawhitespace" />

      <ScrollAnimation
        animateIn="fadeInLeft"
        delay={500}
        offset={100}
        duration={2}
      >
        <h3 className="hometitles">Services & Diensten</h3>
      </ScrollAnimation>

      <br />

      <ScrollAnimation animateIn="fadeInRight" delay={1250} duration={2}>
        <Quote />
      </ScrollAnimation>

      <div className="extrawhitespace" />

      <ScrollAnimation animateIn="zoomIn" delay={50} duration={3}>
        <div className="vertical" />
      </ScrollAnimation>

      <div id="projectscroll" className="extrawhitespace" />

      <ScrollAnimation
        animateIn="fadeInDown"
        delay={500}
        offset={100}
        duration={2}
      >
        <h3 className="hometitles"> Recente Projecten</h3>
      </ScrollAnimation>

      <br />

      <ScrollAnimation animateIn="fadeInUp" delay={1250} duration={2}>
        <Projects />
      </ScrollAnimation>

      <div className="whitespace" />
    </Layout>
  );
};

export default IndexPage;
