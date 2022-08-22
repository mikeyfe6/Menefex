import React from 'react';

import { Animated } from 'react-animated-css';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { overtitle, aboutText } from '../styles/modules/about.module.scss';
import { thick, spotcont, spotext } from '../styles/modules/spoti.module.scss';

const AboutPage = () => (
  <Layout>
    <div className="smallwhitespace" />
    <div>
      <div className="row">
        <div className="col-lg-8">
          <h1 className="page-title">
            Over Menefex<span className="headdots">.</span>
          </h1>
          <br />
          <Animated
            animationIn="fadeInRight"
            animationInDelay={750}
            animationInDuration={2000}
          >
            <h3 className={overtitle}>Wie zijn wij?</h3>
            <p className={aboutText}>
              <b>Menefex</b> is een jong en modern webmediabedrijf, opgericht
              door{' '}
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
          </Animated>
          <br />
          <Animated
            animationIn="fadeInRight"
            animationInDelay={1000}
            animationInDuration={2000}
          >
            <h3 className={overtitle}>Waar staan wij voor?</h3>
            <p className={aboutText}>
              <b>Menefex</b> staat voor efficiëntie, innovatie,
              gebruiksvriendelijkheid en misschien wel twee van onze
              belangrijkste aspecten; de functionaliteit en de moderne design.
              Wij bouwen onze softwareproducten op maatwerk en zorgen dat de
              klant zich zoveel mogelijk kan relativeren met het eindproduct.
              Wij zijn van mening dat de functionaliteit in balans moet zijn met
              de visuele aspecten van de website / webapplicatie voor een
              ultieme ervaring.
            </p>
          </Animated>
          <br />
          <Animated
            animationIn="fadeInRight"
            animationInDelay={1250}
            animationInDuration={2000}
          >
            <h3 className={overtitle}>Wat maakt ons als Menefex zo uniek?</h3>
            <p className={aboutText}>
              <b>Menefex</b> biedt de nodige hulp, service en communicatie vóór,
              tijdens en ná het bouwproces van uw product en heeft deze op een
              hoog plateau staan. Wij denken sterk mee met de klant. Wij werken
              met de nieuwste en meest stabiele software, zodat u product veilig
              en duurzaam blijft. Bij Menefex respecteren we essentiële details
              en is niks onmogelijk. Er wordt bij het bouwen tot over de laatste
              pixel nagedacht.
            </p>
          </Animated>
          <br />
          <Animated
            animationIn="fadeInRight"
            animationInDelay={1500}
            animationInDuration={2000}
          >
            <h3 className={overtitle}>Onze doelen, streven en motivatie?</h3>
            <p className={aboutText}>
              <b>Menefex</b> heeft als drijfveren de interesse in de diversiteit
              van software en de oneindige mogelijkheden die technologie deze
              tijd biedt. Bovendien motiveert het ons als we onze tevreden
              klanten een digitale brug kunnen bieden en hun ambities verpakt
              een digitaal product wereldwijd op de kaart kunnen zetten door
              middel van een website of webapplicatie.
            </p>
          </Animated>

          <div className="whitespace" />
          <Animated
            animationIn="fadeInRight"
            animationInDelay={1750}
            animationInDuration={2000}
          >
            <hr className={thick} />
          </Animated>
          <div className="whitespace" />
          <Animated
            animationIn="fadeIn"
            animationInDelay={3500}
            animationInDuration={2750}
          >
            <div className={spotcont}>
              <p className={spotext}>
                {' '}
                <br />
                <b>
                  <b>WE ❤︎ MUSIC !</b> Daarom delen we ons{' '}
                  <u>work, chill & vibe</u> - playlist. Geniet ervan en blijf
                  ons volgen voor updates.
                </b>
              </p>{' '}
              <iframe
                title="Menefex' #STAYVIBIN Playlist"
                src="https://open.spotify.com/embed/playlist/08UGoWTjvpuooABCWyPx0m"
                loading="lazy"
                width="100%"
                height="444"
                frameBorder="1"
                allowtransparency="true"
                allow="encrypted-media"
              />
            </div>
          </Animated>
        </div>
      </div>
    </div>
    <div className="whitespace" />
  </Layout>
);

export default AboutPage;

export const Head = () => (
  <SEO
    title="About"
    description="Kom meer te weten over Menefex, de oprichter Michael Fransman, doelen & streven en meer..."
    keywords="over menefex, doelen, biografie, motivatie, spotify playlist, stayvibin, gespecialiseerd, webmediabedrijf, michael fransman, verhaal, about"
    pathname="/about/"
  />
);
