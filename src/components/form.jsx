import React, { useState, useCallback } from 'react';

import { navigate } from 'gatsby';
import { Animated } from 'react-animated-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';

import Maps from './gmaps/maps';

import {
  formwrapper,
  contactForm,
  textarea,
  choosing,
  // recaptcha,
  send,
  contactbox,
  undercol,
  opentijd,
  uniqcol,
  covid,
  socials,
  contacticons,
  fbicon,
  igicon,
  twicon,
  liicon,
  ghicon,
  rssicon,
  patricon,
  waicon,
  spicon,
  skicon,
  hrcont,
  contactgev,
  menefexgev,
  contacttel,
  contactmail,
} from '../styles/modules/form.module.scss';

const Form = () => {
  // const encode = (data) =>
  //   Object.keys(data)
  //     .map(
  //       (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
  //     )
  //     .join('&');

  const [inputs, setInputs] = useState({
    name: '',
    company: '',
    email: '',
    tel: '',
    subject: '',
    message: '',
  });

  const handleChange = useCallback(
    (event) => {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
      });
    },
    [inputs],
  );

  const handleSubmit = useCallback(
    (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();

      axios({
        url: '/.netlify/functions/sendmail',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          ...inputs,
        },
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => console.log('POST ERROR', error));
    },

    [inputs],
  );

  return (
    <div className="container">
      {' '}
      <Animated
        animationIn="fadeIn"
        animationInDelay={2750}
        animationInDuration={2000}
      >
        <div className="row">
          <div className={formwrapper}>
            <form id={contactForm} action="/success/" onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="name">
                    <span className="speccol">*</span> Naam
                    <div className={textarea}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        maxLength="50"
                        value={inputs.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="company">
                    <span className="speccol">*</span> Bedrijfsnaam (optioneel)
                    <div className={textarea}>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        maxLength="30"
                        value={inputs.company}
                        onChange={handleChange}
                      />
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="email">
                    <span className="speccol">*</span> Email
                    <div className={textarea}>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        maxLength="35"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={inputs.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="tel">
                    <span className="speccol">*</span> Telefoon
                    <div className={textarea}>
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        pattern="^\+?\d*$"
                        maxLength="15"
                        value={inputs.tel}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="subject">
                    <span className="speccol">*</span> Selecteer onderwerp
                    <div>
                      <select
                        name="subject"
                        id="subject"
                        className={choosing}
                        value={inputs.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="website">Offerte aanvragen</option>
                        <option value="samenwerking">
                          Samenwerking aangaan
                        </option>
                        <option value="opmerking">Vraag / Opmerking</option>
                        <option value="feedback">Klacht / Feedback</option>
                        <option value="hulp">Hulp & Probleemoplossing</option>
                      </select>
                    </div>
                  </label>
                </li>
                <li>
                  <label htmlFor="text">
                    <span className="speccol">*</span> Type uw bericht hieronder
                    <div className={textarea}>
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        rows="6"
                        value={inputs.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </label>
                </li>
              </ul>

              <button type="submit" className={send}>
                Versturen
              </button>

              <div className="clr" />
            </form>
          </div>
        </div>
      </Animated>
      <div className="whitespace" />
      <br />
      <div>
        <div className={contactbox}>
          <div className="row">
            <div className="col-md">
              <p>
                <b>
                  <u className={undercol}>Wij zijn bereikbaar van:</u>
                </b>
                <br /> <br />
                <span className={opentijd}>
                  <span className={uniqcol}>ma</span> <b>9:00 · 19:00</b>
                  <br />
                  <span className={uniqcol}>di</span> <b>9:00 · 19:00</b>
                  <br />
                  <span className={uniqcol}>wo</span> <b> 9:00 · 19:00</b>
                  <br />
                  <span className={uniqcol}>do</span> <b> 9:00 · 19:00</b>
                  <br />
                  <span className={uniqcol}>vr</span> <b> 9:00 · 19:00</b>
                  <br />
                  <br />
                  <span className={uniqcol}>za - zo</span> <b>gesloten</b>
                  <br />
                  <br />
                  <span className={covid}>
                    <b>&#8251;</b> COVID-19 heeft{' '}
                    <b>
                      <u>geen invloed</u>
                    </b>{' '}
                    gehad op onze werkzaamheden
                  </span>
                </span>
              </p>

              <div className={socials}>
                <b>Volg ons</b> op de voet, <b>support ons</b> en
                <span className={uniqcol}>
                  <b> / </b>
                </span>
                of kom in <b>contact</b>
              </div>
              <div className={contacticons}>
                <a
                  href="https://www.facebook.com/MenefexWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    size="2x"
                    className={fbicon}
                  />
                </a>

                <a
                  href="https://www.instagram.com/menefexwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size="2x"
                    className={igicon}
                  />
                </a>

                <a
                  href="https://www.twitter.com/MenefexWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    size="2x"
                    className={twicon}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/menefexwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    className={liicon}
                  />
                </a>

                <a
                  href="https://github.com/mikeyfe6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size="2x"
                    className={ghicon}
                  />
                </a>

                <a
                  href="https://feeds.feedburner.com/MenefexWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fa', 'rss']}
                    size="2x"
                    className={rssicon}
                  />
                </a>

                <a
                  href="https://www.patreon.com/menefexWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'patreon']}
                    size="2x"
                    className={patricon}
                  />
                </a>

                <a
                  href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'spotify']}
                    size="2x"
                    className={waicon}
                  />
                </a>

                <a
                  href="https://join.skype.com/invite/lpx2blVirPUn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'skype']}
                    size="2x"
                    className={skicon}
                  />
                </a>

                <a
                  href="https://wa.me/31611054318"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'whatsapp']}
                    size="2x"
                    className={spicon}
                  />
                </a>
              </div>

              <hr className={hrcont} />
            </div>
            <br />
            <div className="col-md">
              <p className={contactgev}>
                <b>
                  {' '}
                  <span className={uniqcol}>Menefex</span> Webmediabedrijf{' '}
                </b>
                <br />
                gevestigd in Amsterdam-Zuidoost
                <br />
                <span className={menefexgev}>
                  <br />
                  <u className={undercol}>Kamer van koophandel-nummer</u> <br />
                  <i>
                    <b>76045315</b>
                  </i>
                  <br />
                  <br />
                  <u className={undercol}>BTW-nummer</u>
                  <br />
                  <i>
                    <b>NL 003040579B17</b>
                  </i>
                  <br />
                  <br />
                  <u className={undercol}>BANK-nummer</u>
                  <br />
                  <i>
                    {' '}
                    <b>NL10 BUNQ 2038 8619 94</b>
                  </i>
                </span>
              </p>

              <FontAwesomeIcon icon="mobile" size="lg" color="#1db954" />
              <p className={contacttel}>
                · &nbsp;<a href="tel:0611054318">+31 6 11 05 43 18</a>
              </p>
              <br />
              <FontAwesomeIcon icon="paper-plane" size="lg" color="#74aece" />
              <p className={contactmail}>
                · &nbsp;
                <a
                  href="mailto:info@menefex.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  info@menefex.nl
                </a>
              </p>
            </div>
          </div>
          <br />
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Form;
