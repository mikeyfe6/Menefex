/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import formStyles from '../styles/modules/form.module.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div className="container">
      <div className="row">
        <div className={formStyles.formwrapper}>
          <form
            name="contact-form"
            id={formStyles.contactForm}
            method="POST"
            action="/success"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <ul>
              <li>
                <label htmlFor="contact-name">
                  <span className="speccol">*</span> Naam
                </label>
                <div className={formStyles.textarea}>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    defaultValue=""
                    required
                  />
                </div>
              </li>
              <li>
                <label htmlFor="contact-company">
                  <span className="speccol">*</span> Bedrijfsnaam (optioneel)
                </label>
                <div className={formStyles.textarea}>
                  <input
                    type="text"
                    name="company"
                    id="contact-company"
                    defaultValue=""
                  />
                </div>
              </li>
              <li>
                <label htmlFor="contact-email">
                  <span className="speccol">*</span> Email
                </label>
                <div className={formStyles.textarea}>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    maxLength="35"
                    defaultValue=""
                    required
                  />
                </div>
              </li>
              <li>
                <label htmlFor="contact-tel">
                  <span className="speccol">*</span> Telefoon
                </label>
                <div className={formStyles.textarea}>
                  <input
                    type="tel"
                    name="tel"
                    id="contact-tel"
                    maxLength="15"
                    defaultValue=""
                    required
                  />
                </div>
              </li>
              <li>
                <label htmlFor="contact-msg">
                  <span className="speccol">*</span> Selecteer onderwerp
                </label>
                <div>
                  <select
                    name="onderwerp[]"
                    className={formStyles.choosing}
                    required
                  >
                    <option value="website">Offerte aanvragen</option>
                    <option value="samenwerking">Samenwerking aangaan</option>
                    <option value="opmerking">Vraag / Opmerking</option>
                    <option value="feedback">Klacht / Feedback</option>
                    <option value="hulp">Hulp & Probleemoplossing</option>
                  </select>
                </div>
              </li>
              <li>
                <label htmlFor="contact-project">
                  <span className="speccol">*</span> Type uw bericht hieronder
                </label>
                <div className={formStyles.textarea}>
                  <textarea
                    type="text"
                    name="message"
                    id="contact-project"
                    rows="6"
                    defaultValue=""
                    required
                  />
                </div>
              </li>
            </ul>

            <button
              type="submit"
              name="submit"
              id="contact-submit"
              className={formStyles.send}
              action="../pages/success.jsx"
            >
              Versturen
            </button>
            <div className="clr" />
          </form>
        </div>
      </div>
      <div className="whitespace" />
      <hr className={formStyles.thick} />
      <br />
      <div>
        <div className={`${formStyles.contactbox}`}>
          <div className="row">
            <div className="col-md">
              <p>
                <u>Wij zijn bereikbaar van:</u> <br /> <br />
                <span className={formStyles.opentijd}>
                  ma: &nbsp; <b>9:00 - 19:00</b>
                  <br />
                  di: &nbsp; <b>9:00 - 19:00</b>
                  <br />
                  wo: &nbsp; <b>9:00 - 19:00</b>
                  <br />
                  do: &nbsp; <b>9:00 - 19:00</b>
                  <br />
                  vri: &nbsp; <b>9:00 - 19:00</b>
                  <br />
                  <br />
                  za - zo: &nbsp; <b>gesloten</b>
                  <br />
                  <br />
                  <span className={formStyles.covid}>
                    * (COVID-19 heeft <u>geen invloed</u> gehad op onze
                    werkzaamheden)
                  </span>
                </span>
              </p>
              __________________________ <br /> <br /> <br />
              <div className={formStyles.contacticons}>
                <a
                  href="https://www.facebook.com/GimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.fbicon}
                  />
                </a>
                ⌁
                <a
                  href="https://www.instagram.com/gimmixwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.igicon}
                  />
                </a>
                ⌁
                <a
                  href="https://www.twitter.com/GimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.twicon}
                  />
                </a>
                ⌁
                <a
                  href="https://www.linkedin.com/company/gimmixwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.liicon}
                  />
                </a>
                ⌁
                <a
                  href="https://github.com/mikeyfe6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.ghicon}
                  />
                </a>
                ⌁
                <a
                  href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'spotify']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.waicon}
                  />
                </a>
                ⌁
                <a
                  href="https://wa.me/31611054318"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'whatsapp']}
                    size="lg"
                    color="#827f6e"
                    className={formStyles.spicon}
                  />
                </a>
              </div>
              <hr className={formStyles.hrcont} />
            </div>
            <br />
            <div className="col-md">
              &nbsp;
              <FontAwesomeIcon icon="mobile" size="lg" color="#827f6e" />
              <p className={formStyles.contacttel}>
                <a href="tel:0611054318">+31 6 11 05 43 18</a>
              </p>
              <br />
              <FontAwesomeIcon icon="paper-plane" size="lg" color="#827f6e" />
              <p className={formStyles.contactmail}>
                <a href="mailto:info@gimmix.nl">info@gimmix.nl</a>
              </p>
              <br />
              <br />
              <p className={formStyles.contactgev}>
                <b>Gimmix Webmediabedrijf,</b> <br />
                gevestigd in Amsterdam-Zuidoost.
                <br />
                <span className={formStyles.gimmixgev}>
                  <br />
                  <u>Kamer van koophandel-nummer</u> <br />
                  <i>
                    <b>76045315</b>
                  </i>
                  <br />
                  <br />
                  <u>BTW-nummer</u>
                  <br />
                  <i>
                    <b>NL 003040579B17</b>
                  </i>
                  <br />
                  <br />
                  <u>BANK-nummer</u>
                  <br />
                  <i>
                    <b>NL10 BUNQ 2038 8619 94</b>
                  </i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whitespace" />
      <hr className={formStyles.thick} />
    </div>
  );
};

export default Form;
