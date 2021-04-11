import React from 'react';

import { navigate } from 'gatsby';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  formwrapper,
  callForm,
  terugbel,
  thick,
  fillareaone,
  fillareatwo,
  textarea,
  recaptcha,
  callbtn,
  choosing,
} from '../styles/modules/call.module.scss';

// TODO: ENV goed instellen!

const Call = () => {
  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');

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
        }).then(() => navigate(form.getAttribute('action')));
        // .catch(() => console.log('POST ERROR'));
      }
    },
    [inputs, recaptchaValue],
  );

  return (
    <div className={formwrapper}>
      <form
        onSubmit={handleSubmit}
        name="Call Form"
        id={callForm}
        method="POST"
        action="/success/"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <input type="hidden" name="form-name" value="Call Form" />
        <h5 className={terugbel}>Terugbelverzoek</h5>
        <hr className={thick} />
        <ul className={fillareaone}>
          <li>
            <label htmlFor="call-name">
              <span className="speccol">*</span> Naam
              <div className={textarea}>
                <input
                  type="text"
                  name="name"
                  id="call-name"
                  value={inputs.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </li>
          <li>
            <label htmlFor="call-tel">
              <span className="speccol">*</span> Telefoon
              <div className={textarea}>
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
            </label>
          </li>
          <li>
            <label htmlFor="call-msg">
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
            </label>
          </li>
        </ul>
        <ul className={fillareatwo}>
          <li>
            <label htmlFor="call-opmerking">
              <span className="speccol">*</span> Heeft u nog opmerkingen?
              (optioneel)
              <div className={textarea}>
                <textarea
                  type="text"
                  name="message"
                  id="call-opmerking"
                  rows="6"
                  value={inputs.text}
                  onChange={handleChange}
                />
              </div>
            </label>
          </li>
        </ul>
        <div className="clr" />
        <ReCAPTCHA
          sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
          className={recaptcha}
          onChange={handleChangeReCAPTCHA}
        />
        <div className="clr" />
        <button
          type="submit"
          name="submit"
          id="call-submit"
          className={callbtn}
        >
          Bel mij terug!
        </button>

        <div className="clr" />
      </form>
    </div>
  );
};

export default Call;
