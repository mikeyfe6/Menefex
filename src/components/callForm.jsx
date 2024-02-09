import React, { useState, useCallback } from 'react';

import { navigate } from 'gatsby';

import axios from 'axios';

import * as callStyles from '../styles/modules/callForm.module.scss';

// TODO: change to callForm.scss

// const d = new Date();
// const hour = d.getHours();
// console.log(hour);

const Call = ({ callRef }) => {
  const [inputs, setInputs] = useState({
    name: '',
    tel: '',
    tijdstip: 'tussen 10:00 - 10:30u',
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
    <form
      onSubmit={handleSubmit}
      className={callStyles.callForm}
      action="/success/"
    >
      <h5>Terugbelverzoek</h5>
      <hr />

      <label htmlFor="call_name">
        <span>*</span> Naam
      </label>
      <input
        type="text"
        name="name"
        id="call_name"
        value={inputs.name}
        onChange={handleChange}
        ref={callRef}
        required
      />

      <label htmlFor="call_tel">
        <span>*</span> Telefoon
      </label>
      <input
        type="tel"
        name="tel"
        id="call_tel"
        value={inputs.tel}
        onChange={handleChange}
        required
      />

      <label htmlFor="call_time">
        <span>*</span> Selecteer een gewenst tijdstip
      </label>
      <select
        required
        name="tijdstip"
        id="call_time"
        value={inputs.tijdstip}
        onChange={handleChange}
        multiple={false}
      >
        <option value="tussen 10:00 - 10:30u">Tussen 10:00 - 10:30 uur</option>
        <option value="tussen 11:00 - 11:30u">Tussen 11:00 - 10:30 uur</option>
        <option value="tussen 12:00 - 12:30u">Tussen 12:00 - 12:30 uur</option>
        <option value="tussen 13:00 - 13:30u">Tussen 14:00 - 14:30 uur</option>
        <option value="tussen 14:00 - 14:30u">Tussen 15:00 - 15:30 uur</option>
        <option value="tussen 15:00 - 15:30u">Tussen 16:00 - 16:30 uur</option>
        <option value="tussen 16:00 - 16:30u">Tussen 17:00 - 17:30 uur</option>
        <option value="tussen 17:00 - 17:30u">Tussen 18:00 - 18:30 uur</option>
      </select>

      <label htmlFor="call_text">
        <span>*</span> Heeft u nog opmerkingen? (optioneel)
      </label>
      <textarea
        type="text"
        name="text"
        id="call_text"
        rows="6"
        value={inputs.text}
        onChange={handleChange}
      />

      <button type="submit">Bel mij terug</button>
    </form>
  );
};

export default Call;
