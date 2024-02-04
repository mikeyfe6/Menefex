import React, { Component } from 'react';

class GoogleAdsMulti extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    const { slot } = this.props;

    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3158048130288702"
        data-ad-slot={slot}
        data-ad-format="autorelaxed"
      />
    );
  }
}

export default GoogleAdsMulti;
