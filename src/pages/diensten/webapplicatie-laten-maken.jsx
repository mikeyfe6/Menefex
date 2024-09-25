import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const WebappPage = () => {
  //   const { t, isHydrated } = useTranslation();

  //   if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        Webapplicatie laten maken<span>.</span>
      </h1>
      <h2 className="page-sub">
        Op maat gemaakte websites die perfect aansluiten bij jouw branding en
        doelstellingen. Wij ontwerpen professionele, gebruiksvriendelijke
        websites die zorgen voor een sterke online aanwezigheid en optimale
        gebruikerservaring.
      </h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {'Diensten'}
        </Link>
      </section>
    </Layout>
  );
};

export default WebappPage;

export const Head = () => (
  <SEO
    title="Webapplicatie laten maken"
    description=""
    keywords=""
    pathname="/webapplicatie-laten-maken/"
  />
);
