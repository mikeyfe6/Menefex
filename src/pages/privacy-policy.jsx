import React from 'react';

import useTranslation from '../hooks/use-translation';

import Layout from '../components/layout';
import SEO from '../components/seo';

const PrivacyPolicy = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <section
        className="privacy-policy"
        dangerouslySetInnerHTML={{ __html: t('privacyPolicy') }}
      />
    </Layout>
  );
};

export default PrivacyPolicy;

export const Head = () => (
  <SEO
    title="Privacy Policy"
    description="Ontdek hoe Menefex uw gegevens beschermt en verwerkt. Bekijk ons privacybeleid voor volledige informatie over ons gebruik van cookies, gegevensbeheer en uw rechten."
    pathname="/privacy-policy/"
  />
);
