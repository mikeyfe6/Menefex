import React from 'react';

import { Link } from 'gatsby';

// import useTranslation from '../hooks/use-translation';
import useSiteMetadata from '../hooks/use-site-metadata';

import Layout from '../components/layout';
import SEO from '../components/seo';

import * as superPowersStyles from '../styles/modules/superpowers.module.scss';

const SuperPowersPage = () => {
  // const { t, isHydrated } = useTranslation();

  // if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        Diensten<span>.</span>
      </h1>
      <h2 className="page-sub">
        Hier een overzicht van de verschillende diensten die wij aanbieden. Deze
        diensten zijn ontworpen om bedrijven te helpen met hun online
        aanwezigheid en efficiëntie.
      </h2>
      <section className={superPowersStyles.superPowers}>
        <div>
          <h3>Website laten maken</h3>
          <hr />
          <p>
            Op maat gemaakte websites die perfect aansluiten bij jouw branding
            en doelstellingen. Wij ontwerpen professionele, gebruiksvriendelijke
            websites die zorgen voor een sterke online aanwezigheid en optimale
            gebruikerservaring.
          </p>
          <Link to="/diensten/website-laten-maken/" name="service">
            Meer info
          </Link>
        </div>
        <div>
          <h3>Webapplicatie laten maken</h3>
          <hr />
          <p>
            Professioneel op maat gemaakte webapplicaties die volledig
            aansluiten op jouw bedrijfsbehoeften. Onze webapplicaties zijn
            gebruiksvriendelijk en ontworpen om jouw processen te optimaliseren
            en de efficiëntie te verhogen.
          </p>
          <Link to="/diensten/webapplicatie-laten-maken/" name="service">
            Meer info
          </Link>
        </div>
        <div>
          <h3>Webshop laten maken</h3>
          <hr />
          <p>
            Professioneel ontworpen webshops die volledig zijn afgestemd op jouw
            producten en doelgroep. Onze op maat gemaakte webshops bieden een
            gebruiksvriendelijke interface en optimale functionaliteit om jouw
            online verkoop te maximaliseren.
          </p>
          <Link to="/diensten/webshop-laten-maken/" name="service">
            Meer info
          </Link>
        </div>
        <div>
          <h3>E-mail template laten maken</h3>
          <hr />
          <p>
            Op maat gemaakte e-mail templates die passen bij jouw branding en
            zorgen voor een consistente en professionele uitstraling in al je
            e-mailcommunicatie.
          </p>
          <Link to="/diensten/email-template-laten-maken/" name="service">
            Meer info
          </Link>
        </div>
        <div>
          <h3>
            Onderhoud en <span>/</span> of updates uitvoeren
          </h3>
          <hr />
          <p>
            Regelmatig onderhoud en updates om de optimale prestaties en
            veiligheid van je website of webapplicatie te garanderen. Wij zorgen
            ervoor dat alles up-to-date blijft en probleemloos functioneert.
          </p>
          <Link to="/diensten/onderhoud-updates-uitvoeren/" name="service">
            Meer info
          </Link>
        </div>
        <div>
          <h3>Zoekmachine Optimalisatie (SEO)</h3>
          <hr />
          <p>
            Verbeter de vindbaarheid van je website in zoekmachines met gerichte
            SEO-strategieën. Wij optimaliseren je website om hogere posities te
            behalen in zoekresultaten, zodat je meer verkeer en klanten
            aantrekt.
          </p>
          <Link to="/diensten/zoekmachine-optimalisatie/" name="service">
            Meer info
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
