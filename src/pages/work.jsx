import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import '../styles/work.scss';

import SEO from '../components/seo';

const workPage = () => {
  return (
    <Layout>
      <SEO title="Projecten" />

      <div className="container">
        <div className="hero-content">
          <br />
          <br />
          <div className="whitespace" />
          <div className="whitespace" />

          <div className="row">
            <div className="col-lg-8">
              <h3 className="wow fadeInUp" data-wow-delay="1s">
                Work.
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
      </div>

      <div className="container-fluid">
        <br />
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
        </div>
      </div>
    </Layout>
  );
};

export default workPage;
