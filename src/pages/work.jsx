import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import '../styles/work.scss';

import eternity from '../img/projects/Eternitydrum-screen.png';
import comingsoon from '../img/projects/comingsoon.jpg';

import SEO from '../components/seo';

const workPage = () => {
  return (
    <Layout>
      <SEO title='Projecten' />

      <div className='container'>
        <div className='hero-content'>
          <div className='whitespace' />

          <div className='row'>
            <div className='col-lg-8'>
              <h2 className='page-title wow fadeInUp' data-wow-delay='1s'>
                Recente Projecten.
              </h2>
              <br />

              <p className='wow fadeInUp' data-wow-delay='1.2s'>
                <b>
                  Wij zijn trots op ons werk en showcasen dat ook graag! <br />
                  Neem een kijkje in ons archief van recente projecten:
                </b>
              </p>
            </div>
          </div>
        </div>

        <div className='whitespace' />

        <div className='projects'>
          <div className='item'>
            <a href='#!'>
              <img src={eternity} alt='Eternity Drum' />
            </a>
            <div className='project-info'>
              <p>
                <b>
                  Dit project is een puur informatieve website gebouwd in
                  samenwerking met Eternity Drum uit Amsterdam.
                </b>
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
            <a href='#!' className='btn-light'>
              <FontAwesomeIcon
                icon='eye'
                color='#f0c410'
                className='workicon'
              />{' '}
              Go to Project
            </a>
            <a href='#!' className='btn-dark'>
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color='#f0c410'
                className='workicon'
              />{' '}
              View on Github
            </a>
          </div>

          {/* 
          // * EXTRA PROJECTEN BIJVOEGEN HIERONDER!
          */}

          <div className='item'>
            {/* <a href="#!">
              <img src={comingsoon} alt="Eternity Drum" />
            </a>
            <a href="#!" className="btn-light">
              <FontAwesomeIcon
                icon="eye"
                color="#f0c410"
                className="workicon"
              />{' '}
              Go to Project
            </a>
            <a href="#!" className="btn-dark">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#f0c410"
                className="workicon"
              />{' '}
              View on Github
            </a> */}
          </div>

          <div className='item'>
            {/* <a href="#!">
              <img src={comingsoon} alt="Eternity Drum" />
            </a>
            <a href="#!" className="btn-light">
              <FontAwesomeIcon
                icon="eye"
                color="#f0c410"
                className="workicon"
              />{' '}
              Go to Project
            </a>
            <a href="#!" className="btn-dark">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#f0c410"
                className="workicon"
              />{' '}
              View on Github
            </a> */}
          </div>

          <div className='item'>
            {/* <a href="#!">
              <img src={comingsoon} alt="Eternity Drum" />
            </a>
            <a href="#!" className="btn-light">
              <FontAwesomeIcon
                icon="eye"
                color="#f0c410"
                className="workicon"
              />{' '}
              Go to Project
            </a>
            <a href="#!" className="btn-dark">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                color="#f0c410"
                className="workicon"
              />{' '}
              View on Github
            </a> */}
          </div>
        </div>
        <div className='whitespace' />
      </div>

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
