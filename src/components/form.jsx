/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/form.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <form
              name="contact-form"
              id="contact-form"
              method="post"
              action="post"
            >
              <ul>
                <li className="wow fadeInUp" data-wow-delay="1.4s">
                  <label htmlFor="contact-name">Name :</label>
                  <div className="textarea">
                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      value=""
                      required
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.6s">
                  <label htmlFor="contact-email">Email :</label>
                  <div className="textarea">
                    <input
                      type="email"
                      name="contact-email"
                      id="contact-email"
                      value=""
                      required
                    />
                  </div>
                </li>
                <li className="wow fadeInUp" data-wow-delay="1.6s">
                  <label htmlFor="contact-project">Message :</label>
                  <div className="textarea">
                    <textarea
                      type="email"
                      name="contact-project"
                      id="contact-project"
                      rows="6"
                      value=""
                      required
                    />
                  </div>
                </li>
              </ul>

              <button
                type="submit"
                name="contact-submit"
                id="contact-submit"
                className="send wow fadeInUp"
              >
                Stuur Bericht
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
