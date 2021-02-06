import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';

import SEO from '../components/seo';

import workDesign from '../styles/modules/work.module.scss';

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

    <div className="container">
      <div className="smallwhitespace" />
      <div className="row">
        <div className="col-lg-12">
          <h1 className="page-title" data-wow-delay="1s">
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

      <div className={workDesign.projects}>
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
              <img
                src="https://i.postimg.cc/pXj0DScY/Eternitydrum-screen.png"
                alt="Eternity Drum"
                className={workDesign.workimg}
              />
            </a>
            <div className={workDesign.projectInfo}>
              <p className={workDesign.projectText}>
                <span className={workDesign.projectHead}>Client:</span>
                <span className={workDesign.projectOrg}>
                  Eternity Percussion
                </span>
                <br />
                <br />
                <span className={workDesign.projectField}>
                  Eternity Percussion is een culturele instelling die bijdrage
                  levert aan talentontwikkeling, cultuurparticipatie en
                  visieverbreding van jongeren. D.m.v. o.a. muziekeducatie en
                  inzet van jongeren in eigen organisatie biedt Eternity
                  jongeren de gelegenheid om cultureel te ondernemen en
                  participeren binnen de Nederlandse samenleving.
                </span>
                <br />
                <br />
                <b>
                  * Deze website is gebouwd met oog naar snelheid, overzicht en
                  toegankelijkheid.
                </b>
                <br />
                <br />
                <span className={workDesign.projectHead}> Tools:</span>
                <mark className={workDesign.technologien}>Wordpress</mark>{' '}
                <mark className={workDesign.technologien}>
                  Advanced Custom Field Types
                </mark>{' '}
                <mark className={workDesign.technologien}>Brizy</mark>
              </p>
            </div>
            <a
              href="https://eternitydrum.com"
              rel="noopener noreferrer"
              target="_blank"
              className={workDesign.btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workDesign.workicon}
              />{' '}
              Ga naar project
            </a>
            <a href="#!" className={workDesign.btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workDesign.workicon}
              />{' '}
              Niet op Github*
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
              <img
                src="https://i.postimg.cc/fbzBQRzB/Blackharmony-screen.png"
                alt="Black Harmony"
                className={workDesign.workimg}
              />
            </a>
            <div className={workDesign.projectInfo}>
              <p className={workDesign.projectText}>
                <span className={workDesign.projectHead}>Client:</span>
                <span className={workDesign.projectOrg}>Black Harmony</span>
                <br />
                <br />
                Black Harmony is een populaire en getalenteerde zanggroep uit
                Amsterdam. Deze muziekorganisatie wilt een bijdrage leveren aan
                de positionering van de traditionele muziek genaamd Apinti
                Kawina. Black harmony wilt fungeren als ambassadeur als het gaat
                om traditionele Afro-Surinaamse muziek.
                <br />
                <br />
                <b>
                  * Deze website bevat informatie, media en interactieve social
                  media toepassingen.
                </b>
                <br />
                <br />
                <span className={workDesign.projectHead}>Tools:</span>
                <mark className={workDesign.technologien}>Wordpress</mark>{' '}
                <mark className={workDesign.technologien}>
                  Advanced Custom Field Types
                </mark>{' '}
                <mark className={workDesign.technologien}>Additional CSS</mark>{' '}
                <mark className={workDesign.technologien}>Elementor Pro</mark>
              </p>
            </div>
            <a
              href="https://blackharmony.nl"
              rel="noopener noreferrer"
              target="_blank"
              className={workDesign.btnLight}
            >
              <FontAwesomeIcon
                icon="eye"
                color="#FFCC00"
                className={workDesign.workicon}
              />{' '}
              Ga naar project
            </a>
            <a href="#!" className={workDesign.btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#FFCC00"
                className={workDesign.workicon}
              />{' '}
              Niet op Github*
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
    <div className="whitespace" />
  </Layout>
);

export default workPage;
