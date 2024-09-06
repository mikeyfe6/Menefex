import React from 'react';

import useTranslation from '../hooks/use-translation';

import SEO from '../components/seo';
import Layout from '../components/layout';

const TermsConditions = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <section
        className="terms-conditions"
        dangerouslySetInnerHTML={{ __html: t('termsConditions') }}
      />
    </Layout>
  );
};

export default TermsConditions;

export const Head = () => (
  <SEO
    title="Terms & Conditions"
    description="Bekijk de algemene voorwaarden van Menefex. Deze voorwaarden zijn van toepassing op alle offertes, aanbiedingen, werkzaamheden, en diensten van Menefex, en omvatten informatie over prijzen, betaling, levering, garanties, en meer."
    pathname="/terms-conditions/"
  />
);
