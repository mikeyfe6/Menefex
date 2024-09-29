import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const MaintenancePage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1
        className="page-title"
        dangerouslySetInnerHTML={{ __html: t('superPowersMaintenance') }}
      />
      <h2 className="page-sub">{t('superPowersMaintenanceInfo')}</h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {t('superPowersTitle')}
        </Link>
      </section>
    </Layout>
  );
};

export default MaintenancePage;

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
        name: 'Onderhoud en/of updates uitvoeren',
        item: siteUrl + '/diensten/onderhoud-updates-uitvoeren/',
      },
    ],
  };

  <SEO
    title="Onderhoud en/of updates uitvoeren"
    description="Regelmatig onderhoud en updates om de optimale prestaties en veiligheid
        van je website of webapplicatie te garanderen. Wij zorgen ervoor dat
        alles up-to-date blijft en probleemloos"
    keywords=""
    pathname="/diensten/onderhoud-updates-uitvoeren/"
    schemaMarkup={breadcrumbSchema}
  />;
};
