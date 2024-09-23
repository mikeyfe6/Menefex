import React from 'react';

import { Link, graphql, useStaticQuery } from 'gatsby';

import useTranslation from '../hooks/use-translation';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import * as topicStyles from '../styles/modules/topics.module.scss';

// TODO: images naar GatsbyImage verwerken

// CONTENTFUL blogposts genereren
const FaqPage = () => {
  const { t, i18n, isHydrated } = useTranslation();
  const currentLanguage = i18n.language;

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        FAQ (Veelgestelde vragen)<span>.</span>
      </h1>

      <h2 className="page-sub">Pagina komt binnenkort!</h2>
    </Layout>
  );
};

export default FaqPage;

export const Head = () => (
  <SEO title="FAQ" description="" keywords="" pathname="/faq/" />
);
