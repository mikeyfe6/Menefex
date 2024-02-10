import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFound = () => (
  <Layout>
    <div>
      <div className="smallwhitespace" />
      <h3>
        Ojee<span className="lazy-color">..</span> Pagina niet gevonden
        <span className="lazy-color">.</span> Dat is nou jammer
        <span className="lazy-color">..</span>
      </h3>
      <br />
      <Link to="/">Ga terug naar de hoofdpagina!</Link>
      <hr />
    </div>
  </Layout>
);

export default NotFound;

export const Head = () => (
  <SEO
    title="404"
    description="oepss.. Pagina niet gevonden!"
    pathname="/404/"
  />
);
