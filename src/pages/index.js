import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welkom" />
      <h1>Hello.</h1>
      <h2>I&apos;m Michael from Gimmix</h2>
      <p>
        Heb je een fantastische webdeveloper nodig?{' '}
        <Link to="/contact">Klik hier</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
