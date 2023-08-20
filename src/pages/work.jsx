import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  projects,
  workimg,
  projectInfo,
  projectText,
  projectHead,
  projectOrg,
  // projectField,
  technologien,
  btnLight,
  workicon,
  btnDark,
} from '../styles/modules/work.module.scss';

const workPage = () => (
  <Layout>
    <div>
      <div className="smallwhitespace" />
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-title">
            Recente Projecten<span className="headdots">.</span>
          </h1>
          <br />

          <p className="page-sub">
            Wij zijn trots op ons werk en showcasen dat ook graag! Neem een kijk
            in ons archief van recente projecten:
          </p>
        </div>
      </div>

      <br />

      {/*
          // * KN-ACDiG!
          */}

      <div className={projects}>
        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          duration={2}
          animateOnce
        >
          <div className="item" id="#KNA">
            <a
              href="https://kn-acdig.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                src="./../images/projects/KNACDiG-screen.png"
                alt="KN-ACDiG"
                className={workimg}
              />
            </a>
            <div className={projectInfo}>
              <p className={projectText}>
                <span className={projectHead}>Client: </span>
                <span className={projectOrg}>KennisNetwerk ACDiG</span>
                <br />
                <br />
                <span>
                  <strong>KN-ACDiG</strong> oftewel KennisNetwerk
                  Afrikaanse-Caribische Diaspora Gemeenschap is een stichting
                  die zich richt op het werken aan de identiteitsversterking,
                  het vergroten van de zichtbaarheid en het kennismanagement
                  (advies tot monitoring) van de Afrikaanse-Caribische Diaspora
                  Gemeenschap.
                </span>
                <br />
                <br />
                <b>
                  * De speerpunten van deze website zijn het delen van
                  informatie en netwerkverbreding
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools: </span>
                <mark className={technologien}>Wordpress</mark>{' '}
                <mark className={technologien}>Additional CSS</mark>{' '}
                <mark className={technologien}>Elementor Pro</mark>
              </p>
            </div>
            <a
              href="https://kn-acdig.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
              className={btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workicon}
              />{' '}
              Ga naar project
              {/* Komt Binnenkort */}
            </a>
            <a href="#!" className={btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workicon}
              />{' '}
              <strike>Niet op Github*</strike>
            </a>
          </div>
        </ScrollAnimation>

        {/*
          // * DS Melodies !
          */}

        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          duration={2}
          animateOnce
        >
          <div className="item" id="#DSM">
            <a
              href="https://dsmelodies.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                src="./../images/projects/DSMelodies-screen.png"
                alt="DS Melodies"
                className={workimg}
              />
            </a>
            <div className={projectInfo}>
              <p className={projectText}>
                <span className={projectHead}>Client: </span>
                <span className={projectOrg}>DS Melodies</span>
                <br />
                <br />
                <span>
                  <strong>DS Melodies</strong> alias Derek Simpey is een
                  professioneel Steeldrum-artiest uit Amsterdam Zuidoost. Met
                  zijn unieke sound die gevormd is uit 18 jaar ervaring,
                  creeeren hij en zijn steelpan-instrument, waar ie ook is, een
                  waardig spectakel.
                </span>
                <br />
                <br />
                <b>
                  * Deze website is gebouwd met oog naar snelheid, abstractie in
                  design en toegankelijkheid
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools: </span>
                <mark className={technologien}>Wordpress</mark>{' '}
                <mark className={technologien}>Additional CSS</mark>{' '}
                <mark className={technologien}>Elementor</mark>
              </p>
            </div>
            <a
              href="https://dsmelodies.com"
              // href="#!"
              rel="noopener noreferrer"
              target="_blank"
              className={btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workicon}
              />{' '}
              Ga naar project
              {/* Komt Binnenkort */}
            </a>
            <a href="#!" className={btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workicon}
              />{' '}
              <strike>Niet op Github*</strike>
            </a>
          </div>
        </ScrollAnimation>

        {/*
          // * AFRODIASPHERE !
          */}

        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          duration={2}
          animateOnce
        >
          <div className="item" id="#ADS">
            <a
              href="https://afrodiasphere.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                src="./../images/projects/Afrodiasphere-screen.png"
                alt="Afrodiasphere"
                className={workimg}
              />
            </a>
            <div className={projectInfo}>
              <p className={projectText}>
                <span className={projectHead}>Project: </span>
                <span className={projectOrg}>Afrodiasphere</span>
                <br />
                <br />
                <span>
                  <strong>Afrodiasphere</strong> is een project geheel op eigen
                  initiatief opgezet, voornamelijk gericht op het makkelijker
                  maken van het delen van informatie onder
                  particulieren/bedrijven die zich willen voortmanifesteren.
                  Maak je profiel aan & join the MOVEMENT!
                </span>
                <br />
                <br />
                <b>
                  * Deze webapplicatie is vooral interactief, gericht op
                  netwerken inclusief sociale media en veel meer toekomstige
                  toepassingen
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools: </span>
                <mark className={technologien}>GatsbyJS</mark>{' '}
                <mark className={technologien}>ReactJS</mark>{' '}
                <mark className={technologien}>Strapi</mark>{' '}
                <mark className={technologien}>Netlify</mark>{' '}
                <mark className={technologien}>RESTful API</mark>{' '}
                <mark className={technologien}>Heroku</mark>
              </p>
            </div>
            <a
              href="https://afrodiasphere.netlify.app"
              rel="noopener noreferrer"
              target="_blank"
              className={btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workicon}
              />{' '}
              Ga naar project
            </a>
            <a
              href="https://github.com/mikeyfe6/Afrodiasphere"
              rel="noopener noreferrer"
              target="_blank"
              className={btnDark}
            >
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workicon}
              />{' '}
              Check op Github*
            </a>
          </div>
        </ScrollAnimation>

        {/*
          // * BLACK HARMONY !
          */}

        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          duration={2}
          animateOnce
        >
          <div className="item" id="#BH">
            <a
              href="https://blackharmony.nl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                src="./../images/projects/Blackharmony-screen.png"
                alt="Eternity Percussion"
                className={workimg}
              />
            </a>
            <div className={projectInfo}>
              <p className={projectText}>
                <span className={projectHead}>Client: </span>
                <span className={projectOrg}>Black Harmony</span>
                <br />
                <br />
                <span>
                  <strong>Black Harmony</strong> is een populaire en
                  getalenteerde zanggroep uit Amsterdam. Deze muziekorganisatie
                  wilt een bijdrage leveren aan de positionering van de
                  traditionele muziek genaamd Apinti Kawina. Black harmony wilt
                  fungeren als ambassadeur als het gaat om traditionele
                  Afro-Surinaamse muziek.
                </span>
                <br />
                <br />
                <b>
                  * Deze website bevat informatie, media en interactieve sociale
                  media toepassingen
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools: </span>
                <mark className={technologien}>Wordpress</mark>{' '}
                <mark className={technologien}>
                  Advanced Custom Field Types
                </mark>{' '}
                <mark className={technologien}>Additional CSS</mark>{' '}
                <mark className={technologien}>Elementor Pro</mark>
              </p>
            </div>
            <a
              href="https://blackharmony.nl"
              rel="noopener noreferrer"
              target="_blank"
              className={btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workicon}
              />{' '}
              Ga naar project
            </a>
            <a href="#!" className={btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workicon}
              />{' '}
              <strike>Niet op Github*</strike>
            </a>
          </div>
        </ScrollAnimation>

        {/*
          // * ETERNITY DRUM!
          */}

        <ScrollAnimation
          animateIn="fadeIn"
          delay={500}
          duration={2}
          animateOnce
        >
          <div className="item" id="#EP">
            <a
              href="https://eternitydrum.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <StaticImage
                src="./../images/projects/Eternitydrum-screen.png"
                alt="Eternity Percussion"
                className={workimg}
              />
            </a>
            <div className={projectInfo}>
              <p className={projectText}>
                <span className={projectHead}>Client: </span>
                <span className={projectOrg}>Eternity Percussion</span>
                <br />
                <br />
                <span>
                  <strong>Eternity Percussion</strong> is een culturele
                  instelling die bijdrage levert aan talentontwikkeling,
                  cultuurparticipatie en visieverbreding van jongeren. D.m.v.
                  o.a. muziekeducatie en inzet van jongeren in eigen organisatie
                  biedt Eternity jongeren de gelegenheid om cultureel te
                  ondernemen en participeren binnen de Nederlandse samenleving.
                </span>
                <br />
                <br />
                <b>
                  * Deze website is gebouwd met oog naar snelheid, overzicht en
                  toegankelijkheid
                </b>
                <br />
                <br />
                <span className={projectHead}> Tools:</span>
                <mark className={technologien}>Wordpress</mark>{' '}
                <mark className={technologien}>
                  Advanced Custom Field Types
                </mark>{' '}
                <mark className={technologien}>Brizy</mark>
              </p>
            </div>
            <a
              href="https://eternitydrum.com"
              rel="noopener noreferrer"
              target="_blank"
              className={btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workicon}
              />{' '}
              Ga naar project
            </a>
            <a href="#!" className={btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workicon}
              />{' '}
              <strike>Niet op Github*</strike>
            </a>
          </div>
        </ScrollAnimation>

        {/*
          // * EXTRA PROJECTEN BIJVOEGEN HIERONDER!
          */}
      </div>
    </div>
    <div className="whitespace" />
  </Layout>
);

export default workPage;

export const Head = () => (
  <SEO
    title="Portfolio"
    description="Wij zijn trots op ons werk en showcasen dat ook graag! Neem een kijk in ons archief van recente projecten."
    keywords="work, website, webapplicatie, projecten, eternity, black harmony, ds melodies, afrodiashpere, wordpress, reactjs, gatsby, elementor, github, portfolio, archief"
    pathname="/work/"
  />
);
