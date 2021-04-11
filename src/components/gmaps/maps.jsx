import React from 'react';

import GoogleMapReact from 'google-map-react';

// import mini from '../logo/Gimmix-mini.svg';

import Marker from './marker';

import '../../styles/marker.scss';
import '../../styles/maps.scss';

// TODO: Zorgen dat on click pop-up adresinformatie tevoren komt over Gimmix

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
          lat={52.31049387419748}
          lng={4.9737379576208856}
          name="Gimmix Webmediabedrijf"
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default SimpleMap;

// SimpleMap.defaultProps = {
//   center: {
//     lat: 59.95,
//     lng: 30.33,
//   },
//   zoom: 11,
// };

// class SimpleMap extends Component {
//   constructor() {
//     super(props);
//   }

// static defaultProps = {
//   center: {
//     lat: 52.31049387419748,
//     lng: 4.9737379576208856,
//   },
//   zoom: 15,
// };

// render() {
//   return (
//     // Important! Always set the container height explicitly
//     <div className="mapwrapper">
//       <div style={{ height: '200px', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{
//             key: process.env.GATSBY_GOOGLE_MAPS_KEY,
//             language: 'nl',
//             region: 'NL',
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//           onChildMouseEnter={this.onChildMouseEnter}
//           onChildMouseLeave={this.onChildMouseLeave}
//         >
//           <Marker
//             lat={52.31049387419748}
//             lng={4.9737379576208856}
//             name="Gimmix Webmediabedrijf"
//           />
//         </GoogleMapReact>
//       </div>
//     </div>
//   );
// }
// }

// SimpleMap.defaultProps = {
//   center: {
//     lat: 52.31049387419748,
//     lng: 4.9737379576208856,
//   },
//   zoom: 15,
// };
