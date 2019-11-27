import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import SEO from '../components/seo';

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404" />

      <h1>Pagina niet gevonden. Dat is nou jammer..</h1>
      <p>
        <Link to="/">Ga terug naar de hoofdpagina!</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
