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
    description="Hoe gaan wij om met uw gegevens en meer? Bekijk onze privacybeleid."
    pathname="/privacy-policy/"
  />
);
