import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import useSiteMetadata from '../hooks/use-site-metadata';

import * as portfolioStyles from '../styles/modules/portfolio.module.scss';

const PortfolioPage = () => (
  <Layout>
    <h1 className="page-title">
      Recente Projecten<span>.</span>
    </h1>

    <p className="page-sub">
      Wij zijn trots op ons werk en showcasen dat ook graag! Neem een kijk in
      ons archief van recente projecten..
    </p>

    <section>
      <div className={portfolioStyles.portfolio}>
        {/*
          // * AFRODIASPHERE !
          */}

        <div id="#ADS">
          <a
            href="https://afrodiasphere.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StaticImage
              src="../../public/project-images/afrodiasphere.png"
              alt="Afrodiasphere"
              className={portfolioStyles.portfolioImg}
            />
          </a>
          <div className={portfolioStyles.portfolioInfo}>
            <span>Project:</span>
            <h5>Afrodiasphere</h5>
            <p>
              <strong>Afrodiasphere</strong> is een project geheel op eigen
              initiatief opgezet, voornamelijk gericht op het makkelijker maken
              van het delen van informatie onder particulieren/bedrijven die
              zich willen voortmanifesteren. Maak je profiel aan & join the
              MOVEMENT!
            </p>
            <p>
              * Deze webapplicatie is vooral interactief, gericht op netwerken
              inclusief sociale media en veel meer toekomstige toepassingen
            </p>
            <div className={portfolioStyles.tools}>
              <span>Tools:</span>
              <ul>
                <li>GatsbyJS</li>
                <li>ReactJS</li>
                <li>Strapi</li>
                <li>Netlify</li>
                <li>RESTful API</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <div className={portfolioStyles.portfolioBtns}>
            <a
              href="https://afrodiasphere.com"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnLight}
            >
              <i className="fa-solid fa-eye" />
              Ga naar project
            </a>
            <a
              href="https://github.com/mikeyfe6/Afrodiasphere"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnDark}
            >
              <i className="fa-brands fa-github" />
              Github Repo
            </a>
          </div>
        </div>

        {/*
          // * ETERNITY DRUM!
          */}

        <div id="#EP">
          <a
            href="https://eternitydrum.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StaticImage
              src="../../public/project-images/eternitydrum.png"
              alt="Eternity Percussion"
              className={portfolioStyles.portfolioImg}
            />
          </a>
          <div className={portfolioStyles.portfolioInfo}>
            <span>Client:</span>
            <h5>Eternity Percussion</h5>
            <p>
              <strong>Eternity Percussion</strong> is een culturele instelling
              die bijdrage levert aan talentontwikkeling, cultuurparticipatie en
              visieverbreding van jongeren. D.m.v. o.a. muziekeducatie en inzet
              van jongeren in eigen organisatie biedt Eternity jongeren de
              gelegenheid om cultureel te ondernemen en participeren binnen de
              Nederlandse samenleving.
            </p>
            <p>
              * Deze website is gebouwd met oog naar snelheid, overzicht en
              toegankelijkheid
            </p>
            <div className={portfolioStyles.tools}>
              <span>Tools:</span>
              <ul>
                <li>GatsbyJS</li>
                <li>ReactJS</li>
                <li>Netlify</li>
                <li>Contentful</li>
              </ul>
            </div>
          </div>
          <div className={portfolioStyles.portfolioBtns}>
            <a
              href="https://eternitydrum.com"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnLight}
            >
              <i className="fa-solid fa-eye" />
              Ga naar project
            </a>
            <a
              href="https://github.com/mikeyfe6/eternity-drum"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnDark}
            >
              <i className="fa-brands fa-github" />
              Github Repo
            </a>
          </div>
        </div>

        {/*
          // * KN-ACDiG!
          */}

        <div id="#KNA">
          <a
            href="https://kn-acdig.com"
            // href="#!"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StaticImage
              src="../../public/project-images/kn-acdig.png"
              alt="KN-ACDiG"
              className={portfolioStyles.portfolioImg}
            />
          </a>
          <div className={portfolioStyles.portfolioInfo}>
            <span>Client:</span>
            <h5>KennisNetwerk ACDiG</h5>
            <p>
              <strong>KN-ACDiG</strong> oftewel KennisNetwerk
              Afrikaanse-Caribische Diaspora Gemeenschap is een stichting die
              zich richt op het werken aan de identiteitsversterking, het
              vergroten van de zichtbaarheid en het kennismanagement (advies tot
              monitoring) van de Afrikaanse-Caribische Diaspora Gemeenschap.
            </p>
            <p>
              * De speerpunten van deze website zijn het delen van informatie en
              netwerkverbreding
            </p>
            <div className={portfolioStyles.tools}>
              <span>Tools:</span>
              <ul>
                <li>Wordpress</li>
                <li>Custom CSS</li>
                <li>Elementor</li>
              </ul>
            </div>
          </div>
          <div className={portfolioStyles.portfolioBtns}>
            <a
              href="https://kn-acdig.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnLight}
            >
              <i className="fa-solid fa-eye" />
              Ga naar project
            </a>
            <a href="#!" className={portfolioStyles.btnDark}>
              <i className="fa-brands fa-github" />
              <strike>Niet op Github</strike>
            </a>
          </div>
        </div>

        {/*
          // * DS Melodies !
          */}

        <div id="#DSM">
          <a
            href="https://dsmelodies.com"
            // href="#!"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StaticImage
              src="../../public/project-images/dsmelodies.png"
              alt="DS Melodies"
              className={portfolioStyles.portfolioImg}
            />
          </a>
          <div className={portfolioStyles.portfolioInfo}>
            <span>Client:</span>
            <h5>DS Melodies</h5>
            <p>
              <strong>DS Melodies</strong> alias Derek Simpey is een
              professioneel Steeldrum-artiest uit Amsterdam Zuidoost. Met zijn
              unieke sound die gevormd is uit 18 jaar ervaring, creeeren hij en
              zijn steelpan-instrument, waar ie ook is, een waardig spectakel.
            </p>
            <p>
              * Deze website is gebouwd met oog naar snelheid, abstractie in
              design en toegankelijkheid
            </p>
            <div className={portfolioStyles.tools}>
              <span>Tools:</span>
              <ul>
                <li>Wordpress</li>
                <li>Custom CSS</li>
                <li>Elementor</li>
              </ul>
            </div>
          </div>
          <div className={portfolioStyles.portfolioBtns}>
            <a
              href="https://dsmelodies.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnLight}
            >
              <i className="fa-solid fa-eye" />
              Ga naar project
              {/* Komt Binnenkort */}
            </a>
            <a href="#!" className={portfolioStyles.btnDark}>
              <i className="fa-brands fa-github" />
              <strike>Niet op Github</strike>
            </a>
          </div>
        </div>

        {/*
          // * BLACK HARMONY !
          */}

        <div id="#BH">
          <a
            href="https://blackharmony.nl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <StaticImage
              src="../../public/project-images/blackharmony.png"
              alt="Eternity Percussion"
              className={portfolioStyles.portfolioImg}
            />
          </a>
          <div className={portfolioStyles.portfolioInfo}>
            <span>Client:</span>
            <h5>Black Harmony</h5>
            <p>
              <strong>Black Harmony</strong> is een populaire en getalenteerde
              zanggroep uit Amsterdam. Deze muziekorganisatie wilt een bijdrage
              leveren aan de positionering van de traditionele muziek genaamd
              Apinti Kawina. Black harmony wilt fungeren als ambassadeur als het
              gaat om traditionele Afro-Surinaamse muziek.
            </p>
            <p>
              * Deze website bevat informatie, media en interactieve sociale
              media toepassingen
            </p>
            <div className={portfolioStyles.tools}>
              <span>Tools:</span>
              <ul>
                <li>Wordpress</li>
                <li>Advanced Custom Field Types</li>
                <li>Custom CSS</li>
                <li>Elementor</li>
              </ul>
            </div>
          </div>
          <div className={portfolioStyles.portfolioBtns}>
            <a
              href="https://blackharmony.nl"
              rel="noopener noreferrer"
              target="_blank"
              className={portfolioStyles.btnLight}
            >
              <i className="fa-solid fa-eye" />
              Ga naar project
            </a>
            <a href="#!" className={portfolioStyles.btnDark}>
              <i className="fa-brands fa-github" />
              <strike>Niet op Github</strike>
            </a>
          </div>
        </div>

        {/*
          // * EXTRA PROJECTEN BIJVOEGEN HIERONDER!
          */}
      </div>
    </section>
  </Layout>
);

export default PortfolioPage;

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
        name: 'Portfolio',
        item: siteUrl + '/portfolio/',
      },
    ],
  };

  return (
    <SEO
      title="Portfolio"
      description="Wij zijn trots op ons werk en showcasen dat ook graag! Neem een kijk in ons archief van recente projecten."
      keywords="work, website, webapplicatie, projecten, eternity, black harmony, ds melodies, afrodiashpere, wordpress, reactjs, gatsby, elementor, github, portfolio, archief"
      pathname="/portfolio/"
      schemaMarkup={breadcrumbSchema}
    />
  );
};
