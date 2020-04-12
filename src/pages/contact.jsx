/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Layout from '../components/layout';

import SEO from '../components/seo';

import contactDesign from '../styles/modules/contact.module.scss';

import Form from '../components/form';
import Maps from '../components/gmaps/maps';

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Samenwerking of gewoon gedag zeggen. Neem contact met ons op!"
        keywords="contact, gimmix, michael fransman, mikeyfe6"
        pathname="/contact/"
      />

      <div className="container">
        <div className="whitespace" />
        <h2 className="page-title">
          Contact<span className="headdots">.</span>
        </h2>
        <div className="row">
          <div className="col-lg-8">
            <br />
            <ScrollAnimation animateIn="fadeInUp" delay={1000}>
              <h3 className={contactDesign.contacttitle}>Zeg 'ns hallo 👋🏾</h3>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInUp" delay={1200}>
              <p className="page-sub">
                Jouw website of webapp laten bouwen door <b>Gimmix</b>? Vraag
                een offerte aan! <br /> <br />
                Heb je anders een <u>vraag of opmerking</u>, aarzel niet een
                bericht hieronder achter te laten. <br />
                <br /> Wij zorgen dan spoedig contact met u op te nemen.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <br />
        <Form />
        <br />
        <br />
        <Maps />
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

export default ContactPage;

/* <a
          href="https://twitter.com/mikeyfe"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */
