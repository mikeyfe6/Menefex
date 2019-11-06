/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// import mini from '../logo/Gimmix-mini.svg';

import '../styles/marker.scss';

import Marker from './gmaps/marker';
import '../styles/maps.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// TODO: Zorgen dat on click pop-up adresinformatie tevoren komt over Gimmix.

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 52.316764,
      lng: 4.982555,
    },
    zoom: 15,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapwrapper">
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyB-LLOszJXI8hOeyYggUS19IPlcOeX8Anc',
              language: 'nl',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            onChildMouseEnter={this.onChildMouseEnter}
            onChildMouseLeave={this.onChildMouseLeave}
          >
            <Marker
              lat={52.316764}
              lng={4.982555}
              name="Gimmix"
              text="Gimmix"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
