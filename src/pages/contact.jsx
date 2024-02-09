import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import LeadForm from '../components/leadForm';
import Info from '../components/info';
import Maps from '../components/google/maps';

const ContactPage = () => (
  <Layout>
    <h1 className="page-title">
      Contact<span>.</span>
    </h1>

    <div>
      <h5>Laten wij iets geweldigs creëeren! ✨</h5>

      <br />
      <p className="page-sub">
        Jouw website, webshop of webapp laten bouwen door <b>Menefex</b>?
      </p>
      <br />
      <p className="page-sub">
        Vraag een offerte aan! Heb je anders een <u>vraag of opmerking</u>,
        aarzel niet een bericht hieronder achter te laten.
      </p>
      <br />
      <p className="page-sub">
        <b>Binnen één werkdag nemen wij contact met u op.</b>
      </p>
    </div>

    <div className="form-info">
      <LeadForm />
      <Info />
    </div>

    <Maps />
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
