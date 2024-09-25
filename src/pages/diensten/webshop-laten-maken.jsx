import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const WebshopPage = () => {
  //   const { t, isHydrated } = useTranslation();

  //   if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        Webshop laten maken
        <span>.</span>
      </h1>
      <h2 className="page-sub">
        Professioneel ontworpen webshops die volledig zijn afgestemd op jouw
        producten en doelgroep. Onze op maat gemaakte webshops bieden een
        gebruiksvriendelijke interface en optimale functionaliteit om jouw
        online verkoop te maximaliseren.
      </h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {'Diensten'}
        </Link>
      </section>
    </Layout>
  );
};

export default WebshopPage;

export const Head = () => (
  <SEO
    title="Webshop laten maken"
    description=""
    keywords=""
    pathname="/webshop-laten-maken/"
  />
);
