import React from 'react';

import { Link } from 'gatsby';

import useTranslation from '../../hooks/use-translation';
import useSiteMetadata from '../../hooks/use-site-metadata';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import * as superPowersStyles from '../../styles/modules/superpowers.module.scss';

const WebsitePage = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <Layout>
      <h1 className="page-title">
        {t('superPowersWebsite')}
        <span>.</span>
      </h1>

      <h2 className="page-sub">
        Bij Menefex bieden we op maat gemaakte websites die perfect aansluiten
        bij jouw merk, doelen en doelgroep. Onze focus ligt op het ontwerpen van
        websites die zowel visueel aantrekkelijk als functioneel zijn. Of je nu
        een start-up bent of een gevestigde onderneming, wij zorgen ervoor dat
        jouw online aanwezigheid krachtig, modern en gebruiksvriendelijk is.
      </h2>

      <br />

      <div className="page-content">
        <h3>
          <strong>Wat je van ons kunt verwachten:</strong>
        </h3>

        <ol>
          <li>
            <h4>Uniek Maatwerkdesign</h4>
            <p>
              Elke website die wij ontwerpen, is uniek. We nemen jouw wensen en
              branding als uitgangspunt om een visueel aantrekkelijk ontwerp te
              creëren dat zich onderscheidt van de concurrentie. Geen standaard
              templates, maar een website die jouw verhaal vertelt.
            </p>
          </li>
          <li>
            <h4>Snelle Laadtijden</h4>
            <p>
              Wij begrijpen hoe belangrijk snelheid is voor zowel gebruikers als
              zoekmachines. Daarom optimaliseren we jouw website voor snelle
              laadtijden, zodat bezoekers niet afhaken en zoekmachines jouw
              website hoger waarderen.
            </p>
          </li>
          <li>
            <h4>Gebruiksvriendelijke Interface en Ervaring</h4>
            <p>
              Een goede website is eenvoudig te navigeren. Wij zorgen voor een
              intuïtieve gebruikerservaring, waarbij bezoekers snel en
              gemakkelijk de informatie vinden die ze zoeken. Dit verbetert niet
              alleen de gebruikerstevredenheid, maar verhoogt ook de kans op
              conversies.
            </p>
          </li>
          <li>
            <h4>Toekomstbestendig en Compatibel</h4>
            <p>
              Onze websites voldoen aan alle moderne technische eisen en zijn
              compatibel met alle populaire browsers en apparaten. Dit betekent
              dat jouw website overal en altijd toegankelijk is, of het nu op
              desktop, tablet of mobiel is.
            </p>
          </li>
        </ol>

        <br />

        <h3>
          <strong>Voordelen van een website op maat: </strong>
        </h3>

        <ul>
          <li>
            <p>
              <strong>SEO-vriendelijk:</strong> Onze websites zijn volledig
              geoptimaliseerd voor zoekmachines, wat betekent dat je online
              beter gevonden wordt.
            </p>
          </li>
          <li>
            <p>
              <strong>Flexibiliteit:</strong> De website kan meegroeien met je
              bedrijf. Of je nu op zoek bent naar een webshop, blog of
              portfolio, wij integreren naadloos alle functionaliteiten.
            </p>
          </li>
          <li>
            <p>
              <strong>Beveiliging:</strong> Jouw website is veilig en voldoet
              aan alle moderne beveiligingsstandaarden, zoals SSL-certificaten.
            </p>
          </li>
        </ul>
      </div>

      <section className={superPowersStyles.buttons}>
        <Link to="/diensten/">
          <i className="fa-solid fa-angles-left" /> {t('superPowersServices')}
        </Link>
        <Link to="/prijzen/">
          {t('superPowersPrices')} <i className="fa-solid fa-angles-right" />
        </Link>
      </section>
    </Layout>
  );
};

export default WebsitePage;

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
        name: 'Website laten maken',
        item: siteUrl + '/diensten/website-laten-maken/',
      },
    ],
  };

  return (
    <SEO
      title="Website laten maken"
      description="Op maat gemaakte websites die perfect aansluiten bij jouw branding en
        doelstellingen. Wij ontwerpen professionele, gebruiksvriendelijke
        websites die zorgen voor een sterke online aanwezigheid en optimale
        gebruikerservaring."
      keywords=""
      pathname="/diensten/website-laten-maken/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
