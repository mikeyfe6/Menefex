import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const SeoPage = () => {
  //   const { t, isHydrated } = useTranslation();

  //   if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        Zoekmachine Optimalisatie (SEO)
        <span>.</span>
      </h1>
      <h2 className="page-sub">
        Verbeter de vindbaarheid van je website in zoekmachines met gerichte
        SEO-strategieën. Wij optimaliseren je website om hogere posities te
        behalen in zoekresultaten, zodat je meer verkeer en klanten aantrekt.
      </h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {'Diensten'}
        </Link>
      </section>
    </Layout>
  );
};

export default SeoPage;

export const Head = () => (
  <SEO
    title="Zoekmachine Optimalisatie (SEO)"
    description=""
    keywords=""
    pathname="/zoekmachine-optimalisatie/"
  />
);
