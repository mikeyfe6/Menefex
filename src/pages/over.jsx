import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import About from '../components/about';
import Spotify from '../components/spotify';

const AboutPage = () => (
  <Layout>
    <h1 className="page-title">
      Over Menefex<span>.</span>
    </h1>

    {/* <p className="page-sub">Kom meer te weten over ons...</p> */}

    <div className="about-spotify">
      <About />
      <Spotify />
    </div>
  </Layout>
);

export default AboutPage;

export const Head = () => (
  <SEO
    title="Over Menefex"
    description="Kom meer te weten over Menefex, de oprichter Michael Fransman, doelen & streven en meer..."
    keywords="over menefex, doelen, biografie, motivatie, spotify playlist, stayvibin, gespecialiseerd, webmediabedrijf, michael fransman, verhaal, about"
    pathname="/over/"
  />
);
