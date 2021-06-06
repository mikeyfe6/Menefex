import React from 'react';

import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFound = () => (
  <Layout>
    <SEO
      title="404"
      description="oepss.. Pagina niet gevonden!"
      pathname="/404/"
    />
    <div>
      <div className="smallwhitespace" />
      <h3>
        Ojee<span className="speccol">..</span> Pagina niet gevonden
        <span className="speccol">.</span> Dat is nou jammer
        <span className="speccol">..</span>
      </h3>
      <br />
      <Link to="/">Ga terug naar de hoofdpagina!</Link>
      <hr />
    </div>
  </Layout>
);

export default NotFound;
