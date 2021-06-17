import React, { useState, useCallback } from 'react';

import { navigate } from 'gatsby';

import axios from 'axios';

import {
  formwrapper,
  callForm,
  terugbel,
  thick,
  fillareaone,
  fillareatwo,
  textarea,
  // recaptcha,
  callbtn,
  choosing,
} from '../styles/modules/call.module.scss';

// TODO: ENV goed instellen!

const Call = () => {
  const [inputs, setInputs] = useState({
    name: '',
    tel: '',
    tijdstip: '',
    text: '',
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
    <div className={formwrapper}>
      <form onSubmit={handleSubmit} id={callForm} action="/success/">
        <h5 className={terugbel}>Terugbelverzoek</h5>
        <hr className={thick} />
        <ul className={fillareaone}>
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
            <label htmlFor="tel">
              <span className="speccol">*</span> Telefoon
              <div className={textarea}>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  maxLength="15"
                  pattern="^\+?\d*$"
                  value={inputs.tel}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="choosing">
              <span className="speccol">*</span> Selecteer een gewenst tijdstip
              <div>
                <select
                  required
                  name="tijdstip"
                  className={choosing}
                  value={inputs.tijdstip}
                  onChange={handleChange}
                  multiple={false}
                >
                  <option value="tienuur" selected>
                    Tussen 10:00 - 10:30 uur
                  </option>
                  <option value="elfuur">Tussen 11:00 - 10:30 uur</option>
                  <option value="twaalfuur">Tussen 12:00 - 12:30 uur</option>
                  <option value="tweeuur">Tussen 14:00 - 14:30 uur</option>
                  <option value="drieuur">Tussen 15:00 - 15:30 uur</option>
                  <option value="vieruur">Tussen 16:00 - 16:30 uur</option>
                  <option value="vijfuur">Tussen 17:00 - 17:30 uur</option>
                  <option value="zesuur">Tussen 18:00 - 18:30 uur</option>
                </select>
              </div>
            </label>
          </li>
        </ul>
        <ul className={fillareatwo}>
          <li>
            <label htmlFor="text">
              <span className="speccol">*</span> Heeft u nog opmerkingen?
              (optioneel)
              <div className={textarea}>
                <textarea
                  type="text"
                  name="text"
                  id="text"
                  rows="6"
                  value={inputs.text}
                  onChange={handleChange}
                />
              </div>
            </label>
          </li>
        </ul>
        <div className="clr" />

        <button type="submit" className={callbtn}>
          Bel mij terug!
        </button>

        <div className="clr" />
      </form>
    </div>
  );
};

export default Call;
