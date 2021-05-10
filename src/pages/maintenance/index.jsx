import React from 'react';

const Maintenance = () => (
  <div>
    <h3
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      We zijn <b>snel</b> weer online! En wel onder een nieuwe naam:{' '}
      <span style={{ color: 'ffcc00', fontWeight: 'bold' }}>
        {' '}
        <u> Menefex</u>
      </span>{' '}
      Webmediabedrijf. Hou ons in de gaten, voor je het weet zijn we er weer!
      Zelfde kwaliteit, zelfde doelen. ✨
    </h3>
  </div>
);

export default Maintenance;
