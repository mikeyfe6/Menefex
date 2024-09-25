import React from 'react';

// import { Link, graphql, useStaticQuery } from 'gatsby';

// import useTranslation from '../hooks/use-translation';
import useSiteMetadata from '../hooks/use-site-metadata';

import Layout from '../components/layout';
import SEO from '../components/seo';

// import * as topicStyles from '../styles/modules/topics.module.scss';

const FaqPage = () => {
  // const { t, i18n, isHydrated } = useTranslation();
  // const currentLanguage = i18n.language;

  // if (!isHydrated) return null;

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
        name: 'FAQ (Veelgestelde vragen)',
        item: siteUrl + '/faq/',
      },
    ],
  };

  return (
    <SEO
      title="FAQ"
      description=""
      keywords=""
      pathname="/faq/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
