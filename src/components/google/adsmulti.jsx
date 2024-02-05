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
      data-ad-client="ca-pub-3158048130288702"
      data-ad-slot={slot}
      data-ad-format="autorelaxed"
    />
  );
};

export default GoogleAdsMulti;
