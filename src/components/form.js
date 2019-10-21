/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import formDesign from '../styles/modules/form.module.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div>
      <h2>Hier kan je ons bereiken.</h2>
      <div className={formDesign.wrapper}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className={formDesign.inputFields}>
            <div className={formDesign.contactInfo}>
              <p>
                <a href="tel:0628213134">
                  <FontAwesomeIcon
                    icon="phone-square-alt"
                    size="3x"
                    color="#f0c410"
                  />
                </a>{' '}
                <span> 06 28 213 134</span>
              </p>
              <p>
                <a href="mailto:info@gimmix.nl">
                  <FontAwesomeIcon icon="at" size="3x" color="#f0c410" />
                </a>{' '}
                <span>info@gimmix.nl</span>
              </p>
            </div>
            <input type="hidden" name="form-name" value="contact" />

            <label>
              <input
                type="text"
                name="name"
                placeholder="Voornaam &amp; Achternaam"
                className={formDesign.input}
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                className={formDesign.input}
              />
            </label>

            <label>
              <input
                type="tel"
                name="email"
                placeholder="Telefoonnummer"
                className={formDesign.input}
              />
            </label>
          </div>
          <div className={formDesign.msg}>
            <label>
              <select name="Onderwerp[]">
                <option value="" disabled selected>
                  Wat wilt u vragen?
                </option>
                <option value="website">Website bouwen</option>
                <option value="seo">SEO aan -/ toepassen</option>
                <option value="update">Website updaten</option>
                <option value="hosting">Vragen over Hosting</option>
                <option value="overig">Ik heb een andere vraag!</option>
              </select>
            </label>

            <label>
              <textarea name="message" placeholder="Bericht" />
            </label>

            <button type="submit">Versturen</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
