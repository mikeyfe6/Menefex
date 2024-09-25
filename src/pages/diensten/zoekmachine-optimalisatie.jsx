import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

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
        name: 'Zoekmachine Optimalisatie (SEO)',
        item: siteUrl + '/diensten/zoekmachine-optimalisatie/',
      },
    ],
  };

  return (
    <SEO
      title="Zoekmachine Optimalisatie (SEO)"
      description="Verbeter de vindbaarheid van je website in zoekmachines met gerichte
        SEO-strategieën. Wij optimaliseren je website om hogere posities te
        behalen in zoekresultaten, zodat je meer verkeer en klanten aantrekt."
      keywords=""
      pathname="/diensten/zoekmachine-optimalisatie/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
