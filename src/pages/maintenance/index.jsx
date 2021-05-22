import React from 'react';

const Maintenance = () => (
  <div
    style={{
      fontFamily: "'Trebuchet MS', sans-serif",
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fdfae9',
      border: '3px solid #f8e491',
      padding: '2rem',
      minWidth: '250px',
    }}
  >
    <h6 style={{}}>
      We zijn <b>snel</b> weer online! En wel onder een nieuwe naam:{' '}
      <span
        style={{
          color: 'ffcc00',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationColor: '#ffcc00',
        }}
      >
        {' '}
        Menefex
      </span>{' '}
      Webmediabedrijf.
      <br />
      <br />
      Hou ons in de gaten, voor je het weet zijn we er weer! Andere naam en nog
      beter dan ooit ✨
    </h6>

    <br />
    <hr style={{ opacity: '0.1' }} />
    <br />

    {/* <p
      style={{
        color: 'ffcc00',
        fontWeight: 'bold',
        textDecoration: 'underline',
        textDecorationColor: '#ffcc00',
        textAlign: 'center',
      }}
    >
      Socials
    </p> */}

    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none',
        fontSize: '0.8rem',
        margin: '0',
        padding: '0 0.25rem',
      }}
    >
      <li
        style={{
          color: '#4064ad',
        }}
      >
        <a
          href="https://www.facebook.com/MenefexWMB"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#4064ad',
            textDecoration: 'none !important',
          }}
        >
          Fb
        </a>{' '}
        &#9754;
      </li>
      <li
        style={{
          color: '#dd2a7b',
        }}
      >
        <a
          href="https://www.instagram.com/menefexwmb"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#dd2a7b',
            textDecoration: 'none !important',
          }}
        >
          Ig
        </a>{' '}
        &#9754;
      </li>
      <li
        style={{
          color: '#1ca111',
        }}
      >
        <a
          href="https://wa.me/31611054318"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#1ca111',
            textDecoration: 'none !important',
          }}
        >
          Wa
        </a>{' '}
        &#9754;
      </li>
      <li
        style={{
          color: '#55acee',
        }}
      >
        <a
          href="https://www.twitter.com/MenefexWMB"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#55acee',
            textDecoration: 'none !important',
          }}
        >
          Tw
        </a>{' '}
        &#9754;
      </li>
      <li
        style={{
          color: '#0177b5',
        }}
      >
        <a
          href="https://www.linkedin.com/company/menefexwmb"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#0177b5',
            textDecoration: 'none !important',
          }}
        >
          Li
        </a>{' '}
        &#9754;
      </li>
      <li
        style={{
          color: '#1db954',
        }}
      >
        <a
          href="https://open.spotify.com/playlist/08UGoWTjvpuooABCWyPx0m?si=caXZyz28R8u8Ck683qLgQA"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            color: '#1db954',
            textDecoration: 'none !important',
          }}
        >
          Sp
        </a>{' '}
        &#9754;
      </li>
    </ul>
  </div>
);

export default Maintenance;
