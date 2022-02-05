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

// import eternity from '../img/projects/Eternitydrum-screen.jpg';
// import blackharmony from '../img/projects/Blackharmony-screen.jpg';
// import comingsoon from '../img/projects/comingsoon.jpg';

const workPage = () => (
  <Layout>
    <SEO
      title="Portfolio"
      description="Wij zijn trots op ons werk en showcasen dat ook graag! Neem een kijk in ons archief van recente projecten."
      keywords="work, website, projecten, eternity, black harmony, wordpress, reactjs, gatsby, elementor, github, portfolio"
      pathname="/work/"
    />

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

      <div className={projects}>
        <ScrollAnimation
          animateIn="fadeIn"
          delay={750}
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
                <span className={projectHead}>Client:</span>
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
                  toegankelijkheid.
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

        <ScrollAnimation
          animateIn="fadeIn"
          delay={750}
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
                <span className={projectHead}>Client:</span>
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
                  * Deze website bevat informatie, media en interactieve social
                  media toepassingen.
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools:</span>
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
          // * EXTRA PROJECTEN BIJVOEGEN HIERONDER!
          */}

        <ScrollAnimation
          animateIn="fadeIn"
          delay={750}
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
                <span className={projectHead}>Project:</span>
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
                  * Deze website is vooral interactief, gericht op netwerken
                  inclusief social media en veel meer toekomstige toepassingen.
                </b>
                <br />
                <br />
                <span className={projectHead}>Tools:</span>
                <mark className={technologien}>Gatsby</mark>{' '}
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
      </div>
    </div>
    <div className="whitespace" />
  </Layout>
);

export default workPage;
