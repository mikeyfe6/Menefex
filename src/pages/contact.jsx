import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Layout from '../components/layout';

import SEO from '../components/seo';

import contactDesign from '../styles/modules/contact.module.scss';

import Form from '../components/form';

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="Offerte aanvragen? samenwerking of gewoon gedag zeggen. Neem contact met ons op!"
        keywords="contact, gimmix, michael fransman, mikeyfe6, offerte, openingstijden, laten bouwen"
        pathname="/contact/"
      />

      <div className="container">
        <div className="smallwhitespace" />
        <h1 className="page-title">
          Contact<span className="headdots">.</span>
        </h1>
        <div className="row">
          <div className="col-lg-8">
            <br />
            <ScrollAnimation animateIn="fadeInUp" delay={1000}>
              <h3 className={contactDesign.contacttitle}>
                Laten wij samen iets geweldigs creëeren ✨
              </h3>
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInUp" delay={1200}>
              <p className="page-sub">
                Jouw website, webshop of webapp laten bouwen door <b>Gimmix</b>?
                Vraag een offerte aan! <br /> <br />
                Heb je anders een <u>vraag of opmerking</u>, aarzel niet een
                bericht hieronder achter te laten. <br />
                <br /> <b>Binnen één werkdag nemen wij contact met u op.</b>
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <br />
        <Form />
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
