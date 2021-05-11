import React from 'react';

const Maintenance = () => (
  <div style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
    <h6
      style={{
        backgroundColor: '#fdfae9',
        border: '3px solid #f8e491',
        padding: '2rem',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
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
  </div>
);

export default Maintenance;
