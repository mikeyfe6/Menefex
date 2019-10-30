import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';

import Form from '../components/form';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />

      <div className="whitespace" />
      <div className="whitespace" />
      <div className="container">
        <h1>Contact Us</h1>
        <div className="hero-content">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp" data-wow-delay="1s">
                say hello.👋🏾
              </h3>

              <p className="wow fadeInUp" data-wow-delay="1.2s">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate voluptatum repellat cumque harum pariatur, distinctio
                quod nemo ab asperiores blanditiis iure iste labore! Eaque,
                sapiente eveniet! A, deserunt quod eos, non dicta illum quae
                veritatis nisi voluptatum vel pariatur, commodi eveniet tempore.
              </p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Layout>
  );
};

export default ContactPage;

/* <a
          href="https://twitter.com/mikeyfe"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */
