import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { navigate } from 'gatsby';

import { Animated } from 'react-animated-css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import formStyles from '../styles/modules/form.module.scss';

import Maps from './gmaps/maps';

const Form = () => {
  //   const today = new Date()

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&');
  };

  const [inputs, setInputs] = React.useState({
    name: '',
    company: '',
    email: '',
    tel: '',
    onderwerp: '',
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
    <div className="container">
      {' '}
      <Animated
        animationIn="fadeIn"
        animationInDelay={2750}
        animationInDuration={2000}
      >
        <div className="row">
          <div className={formStyles.formwrapper}>
            <form
              name="Contact Form"
              id={formStyles.contactForm}
              method="POST"
              action="/success/"
              data-netlify="true"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="Contact Form" />
              <ul>
                <li>
                  <label htmlFor="contact-name">
                    <span className="speccol">*</span> Naam
                  </label>
                  <div className={formStyles.textarea}>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      value={inputs.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="contact-company">
                    <span className="speccol">*</span> Bedrijfsnaam (optioneel)
                  </label>
                  <div className={formStyles.textarea}>
                    <input
                      type="text"
                      name="company"
                      id="contact-company"
                      value={inputs.company}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="contact-email">
                    <span className="speccol">*</span> Email
                  </label>
                  <div className={formStyles.textarea}>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      maxLength="35"
                      value={inputs.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="contact-tel">
                    <span className="speccol">*</span> Telefoon
                  </label>
                  <div className={formStyles.textarea}>
                    <input
                      type="tel"
                      name="tel"
                      id="contact-tel"
                      maxLength="15"
                      value={inputs.tel}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
                <li>
                  <label htmlFor="contact-msg">
                    <span className="speccol">*</span> Selecteer onderwerp
                  </label>
                  <div>
                    <select
                      name="onderwerp"
                      className={formStyles.choosing}
                      value={inputs.onderwerp}
                      onChange={handleChange}
                      required
                    >
                      <option value="website">Offerte aanvragen</option>
                      <option value="samenwerking">Samenwerking aangaan</option>
                      <option value="opmerking">Vraag / Opmerking</option>
                      <option value="feedback">Klacht / Feedback</option>
                      <option value="hulp">Hulp & Probleemoplossing</option>
                    </select>
                  </div>
                </li>
                <li>
                  <label htmlFor="contact-project">
                    <span className="speccol">*</span> Type uw bericht hieronder
                  </label>
                  <div className={formStyles.textarea}>
                    <textarea
                      type="text"
                      name="message"
                      id="contact-project"
                      rows="6"
                      value={inputs.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </li>
              </ul>
              <ReCAPTCHA
                sitekey={process.env.SITE_RECAPTCHA_KEY}
                onChange={handleChangeReCAPTCHA}
                className={formStyles.recaptcha}
              />
              <button
                type="submit"
                name="submit"
                id="contact-submit"
                className={formStyles.send}
                // action="../pages/success.jsx"
              >
                Versturen
              </button>
              <div className="clr" />
            </form>
          </div>
        </div>
      </Animated>
      <div className="whitespace" />
      <br />
      <div>
        <div className={`${formStyles.contactbox}`}>
          <div className="row">
            <div className="col-md">
              <p>
                <b>
                  <u className={formStyles.undercol}>Wij zijn bereikbaar van</u>
                </b>
                <br /> <br />
                <span className={formStyles.opentijd}>
                  <span className={formStyles.uniqcol}>ma</span>{' '}
                  <b>9:00 · 19:00</b>
                  <br />
                  <span className={formStyles.uniqcol}>di</span>{' '}
                  <b>9:00 · 19:00</b>
                  <br />
                  <span className={formStyles.uniqcol}>wo</span>{' '}
                  <b> 9:00 · 19:00</b>
                  <br />
                  <span className={formStyles.uniqcol}>do</span>{' '}
                  <b> 9:00 · 19:00</b>
                  <br />
                  <span className={formStyles.uniqcol}>vr</span>{' '}
                  <b> 9:00 · 19:00</b>
                  <br />
                  <br />
                  <span className={formStyles.uniqcol}>za - zo</span>{' '}
                  <b>gesloten</b>
                  <br />
                  <br />
                  <span className={formStyles.covid}>
                    * COVID-19 heeft <u>geen invloed</u> gehad op onze
                    werkzaamheden
                  </span>
                </span>
              </p>

              <div className={formStyles.socials}>
                <b>Volg ons</b> op de voet, <b>support ons</b> en
                <span className={formStyles.uniqcol}>
                  <b> / </b>
                </span>
                of kom in <b>contact</b>
              </div>
              <div className={formStyles.contacticons}>
                <a
                  href="https://www.facebook.com/GimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    size="2x"
                    className={formStyles.fbicon}
                  />
                </a>

                <a
                  href="https://www.instagram.com/gimmixwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    size="2x"
                    className={formStyles.igicon}
                  />
                </a>

                <a
                  href="https://www.twitter.com/GimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    size="2x"
                    className={formStyles.twicon}
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/gimmixwmb/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'linkedin']}
                    size="2x"
                    className={formStyles.liicon}
                  />
                </a>

                <a
                  href="https://github.com/mikeyfe6"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size="2x"
                    className={formStyles.ghicon}
                  />
                </a>

                <a
                  href="https://feeds.feedburner.com/GimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fa', 'rss']}
                    size="2x"
                    className={formStyles.rssicon}
                  />
                </a>

                <a
                  href="https://www.patreon.com/gimmixWMB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'patreon']}
                    size="2x"
                    className={formStyles.patricon}
                  />
                </a>

                <a
                  href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'spotify']}
                    size="2x"
                    className={formStyles.waicon}
                  />
                </a>

                <a
                  href="https://wa.me/31611054318"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={['fab', 'whatsapp']}
                    size="2x"
                    className={formStyles.spicon}
                  />
                </a>
              </div>

              <hr className={formStyles.hrcont} />
            </div>
            <br />
            <div className="col-md">
              <p className={formStyles.contactgev}>
                <b>
                  {' '}
                  <span className={formStyles.uniqcol}>Gimmix</span>{' '}
                  Webmediabedrijf{' '}
                </b>
                <br />
                gevestigd in Amsterdam-Zuidoost
                <br />
                <span className={formStyles.gimmixgev}>
                  <br />
                  <u className={formStyles.undercol}>
                    Kamer van koophandel-nummer
                  </u>{' '}
                  <br />
                  <i>
                    <b>76045315</b>
                  </i>
                  <br />
                  <br />
                  <u className={formStyles.undercol}>BTW-nummer</u>
                  <br />
                  <i>
                    <b>NL 003040579B17</b>
                  </i>
                  <br />
                  <br />
                  <u className={formStyles.undercol}>BANK-nummer</u>
                  <br />
                  <i>
                    {' '}
                    <b>NL10 BUNQ 2038 8619 94</b>
                  </i>
                </span>
              </p>

              <FontAwesomeIcon icon="mobile" size="lg" color="#1db954" />
              <p className={formStyles.contacttel}>
                · &nbsp;<a href="tel:0611054318">+31 6 11 05 43 18</a>
              </p>
              <br />
              <FontAwesomeIcon icon="paper-plane" size="lg" color="#74aece" />
              <p className={formStyles.contactmail}>
                · &nbsp;<a href="mailto:info@gimmix.nl">info@gimmix.nl</a>
              </p>
            </div>
          </div>
          <br />
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Form;
