import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as powersStyles from '../../styles/modules/powers.module.scss';

const WebshopPage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        {t('powersWebshopTitle')}
        <span>.</span>
      </h1>
      <h2 className="page-sub">{t('powersWebshopInfo')}</h2>

      <div className={powersStyles.buttons}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {t('powersServices')}
        </Link>
        <Link to="/prijzen/">
          {t('powersPrices')} <i className="fa-solid fa-angles-right" />
        </Link>
      </div>
    </Layout>
  );
};

export default WebshopPage;

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
        name: 'Webshop laten maken',
        item: siteUrl + '/diensten/webshop-laten-maken/',
      },
    ],
  };

  return (
    <SEO
      title="Webshop laten maken"
      description="Professioneel ontworpen webshops die volledig zijn afgestemd op jouw
        producten en doelgroep. Onze op maat gemaakte webshops bieden een
        gebruiksvriendelijke interface en optimale functionaliteit om jouw
        online verkoop te maximaliseren."
      keywords=""
      pathname="/diensten/webshop-laten-maken/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};