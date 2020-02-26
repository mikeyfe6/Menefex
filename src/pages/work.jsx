import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';

// import { Link } from 'gatsby';

import SEO from '../components/seo';

import workDesign from '../styles/modules/work.module.scss';

import eternity from '../img/projects/Eternitydrum-screen.jpg';
import blackharmony from '../img/projects/Blackharmony-screen.jpg';
// import comingsoon from '../img/projects/comingsoon.jpg';

const workPage = () => {
  return (
    <Layout>
      <SEO title="Projecten" />

      <div className="container">
        <div className="hero-content">
          <div className="whitespace" />

          <div className="row">
            <div className="col-lg-8">
              <h2 className="page-title" data-wow-delay="1s">
                Recente Projecten.
              </h2>
              <br />

              <p data-wow-delay="1.2s">
                <b>
                  Wij zijn trots op ons werk en showcasen dat ook graag! <br />
                  Neem een kijkje in ons archief van recente projecten:
                </b>
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className={workDesign.projects}>
          <div className="item">
            <a href="#!">
              <img src={eternity} alt="Eternity Drum" />
            </a>
            <div className={workDesign.projectInfo}>
              <p>
                <b>
                  Deze website is gebouwd in opdracht van{' '}
                  <u>Stichting Eternity Drum</u>. Met oog naar snelheid,
                  overzicht en duidelijkheid.
                </b>
                <br />
                <br />
                <br />
                <span>Client:</span>
                Eternity Percussion
                <br />
                <br />
                <span>Tools:</span>
                Wordpress, Custom Field Types, Elementor Pro
              </p>
            </div>
            <a href="#!" className={workDesign.btnLight}>
              <FontAwesomeIcon
                icon="eye"
                color="#f0c410"
                className={workDesign.workicon}
              />{' '}
              Go to Project
            </a>
            <a href="#!" className={workDesign.btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#f0c410"
                className={workDesign.workicon}
              />{' '}
              View on Github
            </a>
          </div>

          {/* 
          // * EXTRA PROJECTEN BIJVOEGEN HIERONDER!
          */}

          <div className="item">
            <a href="#!">
              <img src={blackharmony} alt="Black Harmony" />
            </a>
            <div className={workDesign.projectInfo}>
              <p>
                <b>
                  Deze website is gebouwd in opdracht van <u>Black Harmony</u>,
                  een getalenteerde zanggroep uit Amsterdam. Deze website bevat
                  informatie, media en interactieve social media toepassingen.
                </b>
                <br />
                <br />
                <span>Client:</span>
                Black Harmony
                <br />
                <br />
                <span>Tools:</span>
                Wordpress, Additional CSS, Advanced Custom Field Types,
                Elementor Pro
              </p>
            </div>
            <a href="#!" className={workDesign.btnLight}>
              <FontAwesomeIcon
                icon="eye"
                color="#f0c410"
                className={workDesign.workicon}
              />{' '}
              Go to Project
            </a>
            <a href="#!" className={workDesign.btnDark}>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#f0c410"
                className={workDesign.workicon}
              />{' '}
              View on Github
            </a>
          </div>
        </div>
      </div>
      <div className="whitespace" />

      {/* <div className="container-fluid"> */}
      {/* <br />
        <br />
        <br />

        <h6>Selected Projects</h6>

        <div className="whitespace" />
        <div className="whitespace" />

        <div className="row">
          <div className="col-lg-8" />

          <div className="col-lg-4 project project1 wow fadeInUp" />
        </div>

        <div className="whitespace" />

        <div className="row">
          <div className="col-lg-6 project project2 wow fadeInUp" />

          <div className="col-lg-6" />
        </div>

        <div className="whitespace" />

        <div className="row">
          <div className="col-lg-7" />

          <div className="col-lg-4 project project3 wow fadeInUp" />

          <div className="col-lg-1" />
        </div>

        <div className="whitespace" />

        <div className="row">
          <div className="col-lg-1" />

          <div className="col-lg-5 project project4 wow fadeInUp" />

          <div className="col-lg-6" />

          <div className="whitespace" />
        </div> */}
      {/* </div> */}
    </Layout>
  );
};

export default workPage;
