import React from 'react';

import quoteDesign from '../styles/modules/quote.module.scss';

const Quote = () => {
  //   const today = new Date()

  return (
    <div className={quoteDesign.container}>
      <div className={quoteDesign.content}>
        <p className={quoteDesign.quotetext}>
          {' '}
          Dit is wat er in de wrapper komt
        </p>
      </div>
    </div>
  );
};

export default Quote;
