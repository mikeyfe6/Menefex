import React from 'react';

import SEO from '../components/seo';

import Layout from '../components/layout';
import aboutDesign from '../styles/modules/about.module.scss';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />

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
                Gimmix is een jong digitaal -/ webmediabedrijf, opgericht door
                Michael Fransman, die zich inzet digitale oplossingen uit te
                denken en toe te passen voor eventuele passerende problemen
                en/of ambities van de client.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Wat zijn onze doelen en streven?
              </h3>
              <p>
                Wij staan voor efficientie, innovatie, gebruiksvriendelijkheid
                en misschien wel één van onze belangrijkste aspecten; &apos; de
                design &apos;. Wij zijn van mening dat de functionaliteit in
                balans moet zijn met de visuele aspecten van de website voor een
                ultieme ervaring.
              </p>
              <br />
              <h3 className={aboutDesign.overtitle}>
                Wat maakt ons als Gimmix zo uniek?
              </h3>
              <p>
                Wat Gimmix uniek maakt is dat we sterk meedenken met de
                client/klant. Wj werken met de nieuwste en meest stabiele
                software, zodat u product veilig en duurzaam blijft. Bij al onze
                websites is er tot op de laatste pixel over nagedacht. Bovendien
                zijn er geen grenzen aan de ondersteuning die wij bieden.
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
