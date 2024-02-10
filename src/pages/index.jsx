import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import Hero from '../components/hero';
import Service from '../components/services';
import Projects from '../components/slider';
import Smallbio from '../components/smallbio';
import Actual from '../components/actual';

const IndexPage = () => (
  <Layout>
    <Hero />

    <div className="vertical-line-long" />

    <div id="biografiescroll" />

    <h3 className="home-title">Biografie</h3>

    <Smallbio />

    <div className="vertical-line-short" />

    <div id="actualscroll" />

    <h3 className="home-title">Actueel</h3>

    <Actual />

    <div className="vertical-line-short" />

    <div id="servicescroll" />

    <h3 className="home-title">Services & Diensten</h3>

    <Service />

    <div className="vertical-line-short" />

    <div id="projectscroll" />

    <h3 className="home-title"> Recente Projecten</h3>

    <Projects />
  </Layout>
);

export default IndexPage;

export const Head = () => {
  const { title, company, siteUrl, image, favicon, bizTel } = useSiteMetadata();

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
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: title,
    url: siteUrl,
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: title,
    alternateName: company,
    url: siteUrl,
    image: siteUrl + image,
    logo: siteUrl + favicon,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: bizTel,
        areaServed: ['NL', 'BE', 'SR', 'GB'],
        contactOption: 'TollFree',
        contactType: 'customer service',
        availableLanguage: ['Dutch', 'es', 'en', 'German'],
      },
      {
        '@type': 'ContactPoint',
        telephone: bizTel,
        areaServed: ['NL', 'BE', 'SR', 'GB'],
        contactOption: 'TollFree',
        contactType: 'technical support',
        availableLanguage: ['Dutch', 'es', 'en', 'German'],
      },
    ],
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
    <>
      <SEO
        title="#1 Website Specialist"
        description="Website, webshop of webapplicatie laten maken? Al vanaf €295,- | Menefex Webmediabedrijf uit Amsterdam staat garant voor al uw webgerelateerde wensen en ambities."
        keywords="website, webapplicatie, webshop, wordpress, SEO, amsterdam, specialist, menefex, webmediabedrijf, modern, professioneel, ontwikkelen, bob, webbeheerder, webmaster, projecten, portfolio, services, diensten, biografie, web development, app development, jamstack, michael fransman, gatsby, laten bouwen"
        schemaMarkup={[breadcrumbSchema, websiteSchema, organizationSchema]}
      />
    </>
  );
};
