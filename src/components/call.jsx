/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import callStyles from '../styles/modules/call.module.scss';

const Call = () => {
  //   const today = new Date()

  return (
    <div className={callStyles.formwrapper}>
      <form
        name="call-form"
        id={callStyles.callForm}
        method="POST"
        action="/success"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="call-form" />
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
                defaultValue=""
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
                defaultValue=""
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
                name="tijdstip[]"
                className={callStyles.choosing}
                required
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
                defaultValue=""
              />
            </div>
          </li>
        </ul>

        <button
          type="submit"
          name="submit"
          id="call-submit"
          className={callStyles.send}
          action="../pages/success.jsx"
        >
          Bel mij terug!
        </button>
        <div className="clr" />
      </form>
    </div>
  );
};

export default Call;
