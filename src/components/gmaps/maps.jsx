import React from 'react';

import GoogleMapReact from 'google-map-react';

import Marker from './marker';

import '../../styles/maps.scss';

// TODO: Zorgen dat on click pop-up adresinformatie tevoren komt over Menefex

const defaultProps = {
  center: {
    lat: 52.31049387419748,
    lng: 4.9737379576208856,
  },
  zoom: 15,
};

const SimpleMap = () => (
  // Important! Always set the container height explicitly
  <div className="mapwrapper">
    <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GATSBY_GOOGLE_MAPS_KEY,
          language: 'nl',
          region: 'NL',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          name="Menefex Webmediabedrijf"
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default SimpleMap;
