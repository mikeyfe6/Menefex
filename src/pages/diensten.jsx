import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../hooks/use-translation';
import useSiteMetadata from '../hooks/use-site-metadata';

import Layout from '../components/layout';
import SEO from '../components/seo';

import * as superPowersStyles from '../styles/modules/superpowers.module.scss';

const SuperPowersPage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        {t('superPowersTitle')}
        <span>.</span>
      </h1>
      <h2 className="page-sub">{t('superPowersIntro')}</h2>
      <section className={superPowersStyles.superPowers}>
        <div>
          <h3>{t('superPowersWebsite')}</h3>
          <hr />
          <p>{t('superPowersWebsiteInfo')}</p>
          <Link to="/diensten/website-laten-maken/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
        <div>
          <h3>{t('superPowersWebapp')}</h3>
          <hr />
          <p>{t('superPowersWebappInfo')}</p>
          <Link to="/diensten/webapplicatie-laten-maken/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
        <div>
          <h3>{t('superPowersWebshop')}</h3>
          <hr />
          <p>{t('superPowersWebshopInfo')}</p>
          <Link to="/diensten/webshop-laten-maken/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
        <div>
          <h3>{t('superPowersEmail')}</h3>
          <hr />
          <p>{t('superPowersEmailInfo')}</p>
          <Link to="/diensten/email-template-laten-maken/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
        <div>
          <h3
            dangerouslySetInnerHTML={{ __html: t('superPowersMaintenance') }}
          />
          <hr />
          <p>{t('superPowersMaintenanceInfo')}</p>
          <Link to="/diensten/onderhoud-updates-uitvoeren/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
        <div>
          <h3>{t('superPowersSeo')}</h3>
          <hr />
          <p>{t('superPowersSeoInfo')}</p>
          <Link to="/diensten/zoekmachine-optimalisatie/" name="service">
            {t('superPowersMoreInfo')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SuperPowersPage;

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
    ],
  };

  return (
    <SEO
      title="Diensten"
      description=""
      keywords=""
      pathname="/diensten/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
