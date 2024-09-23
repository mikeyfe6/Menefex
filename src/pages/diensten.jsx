import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import useTranslation from '../hooks/use-translation';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import * as topicStyles from '../styles/modules/topics.module.scss';

// TODO: images naar GatsbyImage verwerken

// CONTENTFUL blogposts genereren
const ServicesPage = () => {
  const { t, i18n, isHydrated } = useTranslation();
  const currentLanguage = i18n.language;

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        Diensten<span>.</span>
      </h1>

      <h2 className="page-sub">Pagina komt binnenkort!</h2>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <SEO title="Diensten" description="" keywords="" pathname="/diensten/" />
);
