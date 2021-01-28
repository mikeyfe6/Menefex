import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import mini from '../logo/Gimmix-mini.svg';

import '../../styles/marker.scss';

import Marker from './marker';
import '../../styles/maps.scss';

// TODO: Zorgen dat on click pop-up adresinformatie tevoren komt over Gimmix. KAN IK WAARSCHIJNLIJK MET SETTINGS DOEN. DOCS CHECKEN!

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.310720877676786,
      lng: 4.974365000024507,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapwrapper">
        <div style={{ height: '200px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GATSBY_GOOGLE_MAPS_KEY,
              language: 'nl',
              region: 'NL',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onChildMouseEnter={this.onChildMouseEnter}
            onChildMouseLeave={this.onChildMouseLeave}
          >
            <Marker
              lat={52.316764}
              lng={4.982555}
              name="Gimmix Webmediabedrijf"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
