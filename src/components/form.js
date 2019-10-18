/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// import formDesign from '../styles/modules/form.module.scss';

const Form = () => {
  //   const today = new Date()

  return (
    <div>
      <h2>Form Testing With netlify</h2>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message:{' '}
            <textarea name="message">MESSAGE! #waynesbrothersvoice</textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Form;
