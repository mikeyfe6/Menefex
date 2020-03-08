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
                <label htmlFor="contact-name">* Naam</label>
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
                <label htmlFor="contact-email">* Email</label>
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
                <label htmlFor="contact-tel">* Telefoon</label>
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
                <label htmlFor="contact-msg">* Selecteer onderwerp</label>
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
                  * Type uw bericht hieronder
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
    </div>
  );
};

export default Form;
