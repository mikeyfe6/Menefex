import React from 'react';

import quoteDesign from '../styles/modules/quote.module.scss';

const Quote = () => {
  //   const today = new Date()

  return (
    <div className={quoteDesign.container}>
      <div className={quoteDesign.content}>
        <p className={quoteDesign.quotetext}>
          {' '}
          Gimmix is een digitaal webmediabedrijf die zich inzet digitale
          oplossingen te creeën voor bestaande problemen. Wij helpen u met
          websites, SEO, hosting etc..
        </p>
      </div>
    </div>
  );
};

export default Quote;
