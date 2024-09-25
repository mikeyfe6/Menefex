import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const EmailTemplatePage = () => {
  //   const { t, isHydrated } = useTranslation();

  //   if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        E-mail template laten maken
        <span>.</span>
      </h1>
      <h2 className="page-sub">
        Op maat gemaakte e-mail templates die passen bij jouw branding en zorgen
        voor een consistente en professionele uitstraling in al je
        e-mailcommunicatie.
      </h2>

      <section className={superPowersStyles.powers}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {'Diensten'}
        </Link>
      </section>
    </Layout>
  );
};

export default EmailTemplatePage;

export const Head = () => (
  <SEO
    title="E-mailtemplate laten maken"
    description=""
    keywords=""
    pathname="/email-template-laten-maken/"
  />
);
