/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import formStyles from '../styles/modules/form.module.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div className="row">
      <div className="container">
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
                    <option value="samenwerking">Samenwerking</option>
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

            <div>
              <div className={`${formStyles.contactbox}`}>
                <div className="row">
                  <div className="col-md">
                    <p>
                      <u>Wij zijn bereikbaar van:</u> <br /> <br />
                      <span className={formStyles.opentijd}>
                        ma: &nbsp; 9:00 - 19:00
                        <br />
                        di: &nbsp; 9:00 - 19:00
                        <br />
                        wo: &nbsp; 9:00 - 19:00
                        <br />
                        do: &nbsp; 9:00 - 19:00
                        <br />
                        vri: &nbsp; 9:00 - 19:00
                        <br />
                        <br />
                        <b>za - zo: &nbsp; gesloten</b>
                        <br />
                        <br />
                      </span>
                    </p>
                  </div>
                  <div className="col-md">
                    &nbsp;
                    <FontAwesomeIcon icon="mobile" size="lg" color="#656565" />
                    <p className={formStyles.contacttel}>
                      <a href="tel:0611054318">: +31 6 11 05 43 18</a>
                    </p>
                    <br />
                    <FontAwesomeIcon
                      icon="paper-plane"
                      size="lg"
                      color="#656565"
                    />
                    <p className={formStyles.contactmail}>
                      <a href="mailto:contact@gimmix.nl">: contact@gimmix.nl</a>
                    </p>
                    <br />
                    <br />
                    <p className={formStyles.contactgev}>
                      <b>Gimmix Webmediabedrijf</b> <br />
                      <span className={formStyles.gimmixgev}>
                        <u>Kamer van koophandel-nummer:</u> <br />{' '}
                        <i>76045315</i>
                        <br />
                        <u>BTW-nummer: </u>
                        <br />
                        <i>NL 003040579B17</i>
                        <br />
                        <u>BANK-nummer: </u>
                        <br />
                        <i>NL10 BUNQ 2038 8619 94</i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
