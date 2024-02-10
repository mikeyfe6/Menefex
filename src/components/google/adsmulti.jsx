import React, { useEffect } from 'react';

const GoogleAdsMulti = ({ slot }) => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    return () => {};
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.GATSBY_GOOGLE_CA_PUB}
      data-ad-slot={slot}
      data-ad-format="autorelaxed"
    />
  );
};

export default GoogleAdsMulti;
