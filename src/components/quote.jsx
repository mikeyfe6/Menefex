import React from 'react';

import '../styles/quote.scss';

const Quote = () => {
  //   const today = new Date()

  return (
    <div className="quote-container">
      <div className="quote-wrapper">
        <p className="quote-text">
          {' '}
          Gimmix is een digitaal webmediabedrijf die zich inzet digitale
          oplossingen te creeën voor bestaande problemen. Wij helpen u met
          websites, SEO, hosting etc..
        </p>
        <p className="quote-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          illo quod temporibus eaque, unde ut! Accusamus fugit dolores aut non
          pariatur voluptas error et corrupti quibusdam dignissimos nemo itaque
          illo quisquam atque deserunt quaerat alias eos beatae consectetur,
          quasi iste?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nisi
          sint saepe consequatur dolorum accusantium optio est, ipsum, molestiae
          quibusdam labore, rerum fuga. Iste aliquid, aperiam, nemo neque totam
          ad fugiat quaerat dolorem ipsam soluta atque quidem explicabo error!
          Nihil excepturi dolorem aliquid vitae quam sequi voluptas quod
          repellat dolores?
        </p>
      </div>
    </div>
  );
};

export default Quote;
