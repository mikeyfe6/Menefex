import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';

import Form from '../components/form';

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact Us</h1>

      <Form />
    </Layout>
  );
};

export default ContactPage;

/* <a
          href="https://twitter.com/mikeyfe"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */
