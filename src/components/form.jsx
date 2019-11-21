/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/form.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8'>
            <form
              name='contact-form'
              id='contact-form'
              method='POST'
              action='/success'
              data-netlify='true'>
              <input type='hidden' name='form-name' value='contact-form' />
              <ul>
                <li className='wow fadeInUp' data-wow-delay='1.4s'>
                  <label htmlFor='contact-name'>* Naam</label>
                  <div className='textarea'>
                    <input
                      type='text'
                      name='name'
                      id='contact-name'
                      defaultValue=''
                      required
                    />
                  </div>
                </li>
                <li className='wow fadeInUp' data-wow-delay='1.6s'>
                  <label htmlFor='contact-email'>* Email</label>
                  <div className='textarea'>
                    <input
                      type='email'
                      name='email'
                      id='contact-email'
                      defaultValue=''
                      required
                    />
                  </div>
                </li>
                <li className='wow fadeInUp' data-wow-delay='1.6s'>
                  <label htmlFor='contact-project'>* Bericht</label>
                  <div className='textarea'>
                    <textarea
                      type='text'
                      name='message'
                      id='contact-project'
                      rows='6'
                      defaultValue=''
                      required
                    />
                  </div>
                </li>
              </ul>

              <div data-netlify-recaptcha='true' />
              <button
                type='submit'
                name='submit'
                id='contact-submit'
                className='send wow fadeInUp'>
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
