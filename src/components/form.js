/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import formDesign from '../styles/modules/form.module.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div>
      <h2>Form Testing With netlify</h2>
      <div className={formDesign.wrapper}>
        <form
          className={formDesign.contactForm}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div className={formDesign.inputFields}>
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
                name="tel"
                placeholder="Telefoonnummer"
                className={formDesign.input}
              />
            </label>

            <label>
              <select name="onderwerp" form="contact">
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
          </div>
          <div className={formDesign.msg}>
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
