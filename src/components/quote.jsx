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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          illo quod temporibus eaque, unde ut! Accusamus fugit dolores aut non
          pariatur voluptas error et corrupti quibusdam dignissimos nemo itaque
          illo quisquam atque deserunt quaerat alias eos beatae consectetur,
          quasi iste?
        </p>
      </div>
    </div>
  );
};

export default Quote;
