import React from 'react';
import { Link } from 'gatsby';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Quote from '../components/quote';
import Swiper from '../components/swiper';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welkom" />

      <Hero />
      <Quote />

      <h1>Welkom bij Gimmix</h1>
      <h2>Ik ben Michael Fransman</h2>
      <p>
        Heb je een fantastische webdeveloper nodig?{' '}
        <Link to="/contact">Klik hier</Link>
      </p>

      <Swiper />
    </Layout>
  );
};

export default IndexPage;
