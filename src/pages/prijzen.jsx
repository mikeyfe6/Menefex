import React from 'react';

import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import PriceTable from '../components/pricetable';
import Notes from '../components/notes';
import Call from '../components/call';

import * as pricesStyles from '../styles/modules/prices.module.scss';

const Prices = () => (
  <Layout>
    <h1 className="page-title">
      Prijzen & tarieven<span>.</span>
    </h1>

    <p className="page-sub">
      Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een
      georiënteerd gesprek, neem{' '}
      <Link to="/contact/" style={{ fontWeight: '700' }}>
        contact
      </Link>{' '}
      met ons op of vraag een{' '}
      <a href="#callscroll" className={pricesStyles.callme}>
        terugbelverzoek
      </a>{' '}
      aan.
    </p>

    <PriceTable />

    <div className="notes-call">
      <Notes />
      <Call />
    </div>
  </Layout>
);

export default Prices;

export const Head = () => (
  <SEO
    title="Prijzen & tarieven"
    description="Hier ziet u een indicatie van onze scherpe prijzen. Heeft u liever een georiënteerd gesprek, neem contact met ons op of vraag een terugbelverzoek aan."
    keywords="prijzen, tarieven, budget plan, starter plan, established plan, business plan, actie, terugbelverzoek, prijslijst, pakket, offerte, bel mij terug, prices"
    pathname="/prijzen/"
  />
);
