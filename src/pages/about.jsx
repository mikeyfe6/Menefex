import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div className="whitespace" />
      <div className="container">
        <div className="hero-content">
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <div className="whitespace" />
              <h2 className="wow fadeInUp">About me.</h2>
              <br />

              <p className="wow fadeInUp">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officia labore animi iure illum iste ipsam, error consectetur
                eum rem possimus veritatis esse porro, consequatur iusto
                accusamus corporis provident maxime corrupti ipsa soluta, natus
                repellat. Nemo harum libero soluta facilis cumque voluptatem
                ducimus aliquam sit reprehenderit magnam ratione earum mollitia
                expedita eligendi voluptatum neque delectus modi vel excepturi
                perspiciatis dolorum, voluptas amet doloribus? Amet, fugit
                quaerat! Consequatur perspiciatis porro ullam assumenda.
              </p>

              <p claclassNamess="wow fadeInUp" data-wow-delay="0.2s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ullam temporibus maxime dolores voluptas quia sed
                omnis quam fugiat, minus similique corporis quas nihil inventore
                consequatur corrupti, cumque placeat dolorum ipsam. Quibusdam
                obcaecati doloremque perspiciatis quis incidunt explicabo est
                eveniet perferendis, quam cupiditate nobis fuga sed sit quaerat
                natus? Corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
