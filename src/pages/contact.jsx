import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';
import Form from '../components/form';
import Box from '../components/box';
import SEO from '../components/seo';

import { contacttitle } from '../styles/modules/contact.module.scss';

const ContactPage = () => (
  <Layout>
    <div>
      <div className="smallwhitespace" />
      <h1 className="page-title">
        Contact<span className="headdots">.</span>
      </h1>
      <div className="row">
        <div className="col-lg-8">
          <br />
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={500}
            duration={1}
            animateOnce
          >
            <h3 className={contacttitle}>
              Laten wij iets geweldigs creëeren! ✨
            </h3>
          </ScrollAnimation>

          <br />
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={1000}
            duration={1}
            animateOnce
          >
            <p className="page-sub">
              Jouw website, webshop of webapp laten bouwen door <b>Menefex</b>?
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
      <Box />
    </div>
    <div className="whitespace" />
  </Layout>
);

export default ContactPage;

export const Head = () => (
  <SEO
    title="Contact"
    description="Offerte aanvragen? Samenwerking of gewoon gedag zeggen. Neem contact met ons op!"
    keywords="contact, menefex, michael fransman, mikeyfe6, offerte, openingstijden, vraag, opmerking, klacht, feedback, hulp, probleemoplossing, bericht, social media"
    pathname="/contact/"
  />
);
