import React from 'react';

import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

const ThankYouPage = () => (
  <Layout>
    <div>
      <div className="smallwhitespace" />
      <hr />
      <br />
      <h1 className="page-title">
        Bedankt voor u bericht<span className="speccol">..</span>
      </h1>
      <p className="page-sub">
        Wij nemen zo spoeding mogelijk contact met u op!
      </p>
      <br />
      <Link to="/">Ga terug naar de hoofdpagina!</Link>
    </div>
  </Layout>
);

export default ThankYouPage;

export const Head = () => (
  <SEO
    title="Bedankt!"
    description="Success! Uw bericht is aangekomen."
    pathname="/success/"
  />
);
