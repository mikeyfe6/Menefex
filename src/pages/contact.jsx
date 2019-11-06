import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Layout from '../components/layout';

import SEO from '../components/seo';

import Form from '../components/form';
import Maps from '../components/maps';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="container">
        <div className="whitespace" />
        <div className="whitespace" />
        <h2 className="page-title">Contact.</h2>
        <div className="hero-content">
          <div className="row">
            <div className="col-lg-8">
              <br />
              <ScrollAnimation animateIn="fadeInUp" delay={1000}>
                <h3>say hello.👋🏾</h3>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" delay={1200}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptate voluptatum repellat cumque harum pariatur,
                  distinctio quod nemo ab asperiores blanditiis iure iste
                  labore! Eaque, sapiente eveniet! A, deserunt quod eos, non
                  dicta illum quae veritatis nisi voluptatum vel pariatur,
                  commodi eveniet tempore.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <Form />
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
