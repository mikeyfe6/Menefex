import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const WebsitePage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        {t('superPowersWebsite')}
        <span>.</span>
      </h1>

      <h2 className="page-sub">{t('superPowersWebsiteIntro')}</h2>

      <br />

      <div
        dangerouslySetInnerHTML={{ __html: t('superPowersWebsiteDetail') }}
        className="page-content"
      />

      <section className={superPowersStyles.buttons}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {t('superPowersServices')}
        </Link>
        <Link to="/prijzen/">
          {t('superPowersPrices')} <i className="fa-solid fa-angles-right" />
        </Link>
      </section>
    </Layout>
  );
};

export default WebsitePage;

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
        name: 'Website laten maken',
        item: siteUrl + '/diensten/website-laten-maken/',
      },
    ],
  };

  return (
    <SEO
      title="Website laten maken"
      description="Op maat gemaakte websites die perfect aansluiten bij jouw branding en
        doelstellingen. Wij ontwerpen professionele, gebruiksvriendelijke
        websites die zorgen voor een sterke online aanwezigheid en optimale
        gebruikerservaring."
      keywords=""
      pathname="/diensten/website-laten-maken/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
