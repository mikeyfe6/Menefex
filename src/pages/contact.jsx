import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import LeadForm from '../components/leadForm';
import Info from '../components/info';
import Maps from '../components/google/maps';

const ContactPage = () => {
  return (
    <Layout>
      <h1 className="page-title">
        Contact<span>.</span>
      </h1>

      <div>
        <h5>Laten wij iets geweldigs creëeren! ✨</h5>

        <br />
        <p className="page-sub">
          Jouw website, webshop of webapp laten bouwen door <b>Menefex</b>?
        </p>
        <br />
        <p className="page-sub">
          Vraag een offerte aan! Heb je anders een <u>vraag of opmerking</u>,
          aarzel niet een bericht hieronder achter te laten.
        </p>
        <br />
        <p className="page-sub">
          <b>Binnen één werkdag nemen wij contact met u op.</b>
        </p>
      </div>

      <div className="form-info">
        <LeadForm />
        <Info />
      </div>

      <Maps />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  const {
    title,
    author,
    siteUrl,
    image,
    favicon,
    description,
    bizTel,
    bizEmail,
  } = useSiteMetadata();

  const breadcrumbSchema = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
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
        name: 'Contact',
        item: siteUrl + '/contact/',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: title,
    founder: {
      '@type': 'Person',
      name: author,
    },
    image: siteUrl + image,
    logo: siteUrl + favicon,
    '@id': siteUrl, // #localbusiness
    description: description,
    url: siteUrl,
    telephone: bizTel,
    email: bizEmail,
    hasMap: 'https://g.page/MenefexWMB?share',
    areaServed: {
      '@type': 'geoShape',
      addressCountry: ['Netherlands', 'Belgium', 'Surinam'],
    },
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kelbergen 192',
      addressLocality: 'Amsterdam',
      postalCode: '1104LJ',
      addressCountry: 'NL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '52.31049600748774',
      longitude: '4.973736770446289',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    sameAs: [
      'https://www.facebook.com/MenefexWMB',
      'https://www.twitter.com/MenefexWMB',
      'https://www.instagram.com/menefexwmb/',
      'https://www.linkedin.com/company/menefexwmb/',
      'https://github.com/mikeyfe6',
      'https://www.patreon.com/menefexWMB',
      'https://feeds.feedburner.com/MenefexWMB',
      'https://wa.me/31611054318',
      'https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=5a3ca09f8cba4300',
    ],
  };

  return (
    <SEO
      title="Contact"
      description="Offerte aanvragen? Samenwerking of gewoon gedag zeggen. Neem contact met ons op!"
      keywords="contact, menefex, michael fransman, mikeyfe6, offerte, openingstijden, vraag, opmerking, klacht, feedback, hulp, probleemoplossing, bericht, social media"
      pathname="/contact/"
      schemaMarkup={[breadcrumbSchema, localBusinessSchema]}
    />
  );
};
