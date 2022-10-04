import React, { useEffect, useState, useCallback } from 'react';

import { navigate } from 'gatsby';
import { Animated } from 'react-animated-css';

import axios from 'axios';

import {
  formwrapper,
  contactForm,
  textarea,
  choosing,
  // recaptcha,
  send,
} from '../styles/modules/form.module.scss';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    company: '',
    email: '',
    tel: '',
    subject: 'Ik wil een offerte aanvragen',
    text: '',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('window is defined & active!');
      if (sessionStorage.getItem('mnfx') !== null) {
        const mnfxPrice = sessionStorage.getItem('mnfx');
        console.log('sessionStorage is not empty, check:', mnfxPrice);
        setInputs({ text: mnfxPrice });

        const doThis = () => {
          console.log('sessionStorage removed!');
          setTimeout(() => sessionStorage.removeItem('mnfx'), 3000);
        };
        doThis();
      }
    } else {
      console.log('window is not defined!');
    }
  }, []);

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
        // headers: { 'Content-Type': 'application/json' },
        data: inputs,
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
                        id="contact_name"
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
                    <span className="speccol">*</span> E-mail
                    <div className={textarea}>
                      <input
                        type="email"
                        name="email"
                        id="contact_email"
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
                        id="contact_subject"
                        className={choosing}
                        value={inputs.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="Ik wil een offerte aanvragen">
                          Offerte aanvragen
                        </option>
                        <option value="Ik wil een samenwerking aangaan">
                          Samenwerking aangaan
                        </option>
                        <option value="Ik heb een vraag of opmerking">
                          Vraag / Opmerking
                        </option>
                        <option value="Ik wil graag feedback geven">
                          Klacht / Feedback
                        </option>
                        <option value="Ik wil graag hulp of ondersteuning">
                          Hulp & Probleemoplossing
                        </option>
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
                        name="text"
                        id="contact_text"
                        rows="6"
                        value={inputs.text}
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
    </div>
  );
};

export default Form;
