import React from 'react';

import SEO from '../components/seo';

import Layout from '../components/layout';
import aboutDesign from '../styles/modules/about.module.scss';

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Kom meer te weten over Gimmix"
        keywords="over, gimmix, doelen, uniek, ondersteuning"
        pathname="/about/"
      />

      <div className="whitespace" />
      <div className="container">
        <div className="hero-content">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="page-title">
                Over Gimmix<span className="headdots">.</span>
              </h2>
              <br />

              <h3 className={aboutDesign.overtitle}>Wie zijn wij?</h3>
              <p>
                <b>Gimmix</b> is een jong webmediabedrijf, opgericht door{' '}
                <a
                  href="https://www.linkedin.com/in/michaelfransman"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Michael Fransman
                </a>
                , die zich inzet en gespecialiseerd is in het uitdenken en
                ontwikkelen van websites en webapplicaties. Wij zorgen dat de
                ambities van de klant en het eindproduct tot één komen.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>Waar staan wij voor?</h3>
              <p>
                <b>Gimmix</b> staat voor efficiëntie, innovatie,
                gebruiksvriendelijkheid en misschien wel twee van onze
                belangrijkste aspecten; de functionaliteit en de moderne design.
                Wij bouwen onze softwareproducten op maatwerk en zorgen dat de
                klant zich zoveel mogelijk kan relativeren met het eindproduct.
                Wij zijn van mening dat de functionaliteit in balans moet zijn
                met de visuele aspecten van de website voor een ultieme
                ervaring.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Wat maakt ons als Gimmix zo uniek?
              </h3>
              <p>
                <b>Gimmix</b> biedt het nodige hulp, service en
                communicatiebehoud vóór, tijdens en ná het bouwproces van uw
                product op een hoog plateau staan. Wij denken sterk mee met de
                klant. Wij werken met de nieuwste en meest stabiele software,
                zodat u product veilig en duurzaam blijft. Bij Gimmix
                respecteren we essentiële details en is niks onmogelijk. Er
                wordt er tot over de laatste pixel nagedacht.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Onze doelen, streven en motivatie?
              </h3>
              <p>
                <b>Gimmix</b> heeft als drijfveren de interesse in de
                diversiteit van software en de oneindige mogelijkheden die
                technologie deze tijd biedt. Bovendien motiveert het ons als we
                onze tevreden klanten een digitale brug kunnen bieden en hun
                ambities als een product wereldwijd op de kaart kunnen zetten
                door middel van een website of webapplicatie.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace" />
    </Layout>
  );
};

// data-wow-descapeelay="0.2s"

export default AboutPage;
