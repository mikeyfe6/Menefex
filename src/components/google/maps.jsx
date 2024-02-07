import React from 'react';

import GoogleMapReact from 'google-map-react';

import mapsLogo from '../../logo/Menefex-icon.svg';

import * as mapsStyles from '../../styles/modules/maps.module.scss';

// TODO: Zorgen dat on click pop-up adresinformatie tevoren komt over Menefex

const defaultProps = {
  center: {
    lat: 52.30994007862562,
    lng: 4.974422834381031,
  },
  zoom: 15,
};

const Marker = ({ lat, lng }) => (
  <div data-lat={lat} data-lng={lng} className={mapsStyles.marker}>
    <img src={mapsLogo} alt="Menefex" />
  </div>
);

const SimpleMap = () => (
  <div className={mapsStyles.maps}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.GATSBY_GOOGLE_MAPS_KEY,
        language: 'nl',
        region: 'NL',
      }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <Marker lat={52.31050502595482} lng={4.973742313372159} />
    </GoogleMapReact>
  </div>
);

export default SimpleMap;
