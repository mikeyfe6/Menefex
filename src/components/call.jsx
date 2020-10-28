import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { navigate } from 'gatsby';

import callStyles from '../styles/modules/call.module.scss';

// TODO: ENV goed instellen!

const Call = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');
  };

  const [inputs, setInputs] = React.useState({
    name: '',
    tel: '',
    tijdstip: '',
    message: '',
  });

  const [recaptchaValue, setRecaptchaValue] = React.useState('');
  const handleChange = React.useCallback(
    (event) => {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
      });
    },
    [inputs],
  );

  const handleChangeReCAPTCHA = React.useCallback((value) => {
    setRecaptchaValue(value);
  }, []);

  const handleSubmit = React.useCallback(
    (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      event.stopPropagation();
      if (recaptchaValue != null && recaptchaValue !== '') {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            'g-recaptcha-response': recaptchaValue,
            ...inputs,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch(() => console.log('POST ERROR'));
      }
    },
    [inputs, recaptchaValue],
  );

  return (
    <div className={callStyles.formwrapper}>
      <form
        onSubmit={handleSubmit}
        name="Call Form"
        id={callStyles.callForm}
        method="POST"
        action="/success/"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="Call Form" />
        <h5 className={callStyles.terugbel}>Terugbelverzoek</h5>
        <hr className={callStyles.thick} />
        <ul className={callStyles.fillareaone}>
          <li>
            <label htmlFor="call-name">
              <span className="speccol">*</span> Naam
            </label>
            <div className={callStyles.textarea}>
              <input
                type="text"
                name="name"
                id="call-name"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </div>
          </li>
          <li>
            <label htmlFor="call-tel">
              <span className="speccol">*</span> Telefoon
            </label>
            <div className={callStyles.textarea}>
              <input
                type="tel"
                name="tel"
                id="call-tel"
                maxLength="15"
                value={inputs.tel}
                onChange={handleChange}
                required
              />
            </div>
          </li>
          <li>
            <label htmlFor="call-msg">
              <span className="speccol">*</span> Selecteer een gewenst tijdstip
            </label>
            <div>
              <select
                required
                name="tijdstip"
                className={callStyles.choosing}
                value={inputs.tijdstip}
                onChange={handleChange}
                multiple={false}
              >
                <option value="tienuur">Tussen 10:00 - 10:30 uur</option>
                <option value="elfuur">Tussen 11:00 - 10:30 uur</option>
                <option value="twaalfuur">Tussen 12:00 - 12:30 uur</option>
                <option value="tweeuur">Tussen 14:00 - 14:30 uur</option>
                <option value="drieuur">Tussen 15:00 - 15:30 uur</option>
                <option value="vieruur">Tussen 16:00 - 16:30 uur</option>
                <option value="vijfuur">Tussen 17:00 - 17:30 uur</option>
                <option value="zesuur">Tussen 18:00 - 18:30 uur</option>
              </select>
            </div>
          </li>
        </ul>
        <ul className={callStyles.fillareatwo}>
          <li>
            <label htmlFor="call-opmerking">
              <span className="speccol">*</span> Heeft u nog opmerkingen?
              (optioneel)
            </label>
            <div className={callStyles.textarea}>
              <textarea
                type="text"
                name="message"
                id="call-opmerking"
                rows="6"
                value={inputs.text}
                onChange={handleChange}
              />
            </div>
          </li>
        </ul>
        <div className="clr" />
        <ReCAPTCHA
          sitekey={process.env.SITE_RECAPTCHA_KEY}
          className={callStyles.recaptcha}
          onChange={handleChangeReCAPTCHA}
        />
        <div className="clr" />
        <button
          type="submit"
          name="submit"
          id="call-submit"
          className={callStyles.callbtn}
        >
          Bel mij terug!
        </button>

        <div className="clr" />
      </form>
    </div>
  );
};

export default Call;
