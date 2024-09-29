import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const WebappPage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        {t('superPowersWebapp')}
        <span>.</span>
      </h1>
      <h2 className="page-sub">{t('superPowersWebappInfo')}</h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {t('superPowersTitle')}
        </Link>
      </section>
    </Layout>
  );
};

export default WebappPage;

export const Head = () => {
  const { title, siteUrl } = useSiteMetadata();

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    '@id': siteUrl + '/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: title,
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Diensten',
        item: siteUrl + '/diensten/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Webapplicatie laten maken',
        item: siteUrl + '/diensten/webapplicatie-laten-maken/',
      },
    ],
  };

  return (
    <SEO
      title="Webapplicatie laten maken"
      description="Op maat gemaakte websites die perfect aansluiten bij jouw branding en
        doelstellingen. Wij ontwerpen professionele, gebruiksvriendelijke
        websites die zorgen voor een sterke online aanwezigheid en optimale
        gebruikerservaring."
      keywords=""
      pathname="/diensten/webapplicatie-laten-maken/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
