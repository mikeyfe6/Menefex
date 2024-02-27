import React from 'react';

import * as notesStyles from '../styles/modules/notes.module.scss';

const Notes = () => (
  <section className={notesStyles.notes}>
    <h4>Aanvullende informatie:</h4>
    <p>
      U bent uiteraard ook voor de{' '}
      <b>
        <u>kleinere taken</u>
      </b>{' '}
      bij het juiste adres, denk bijvoorbeeld aan <b>onderhoud</b>, een{' '}
      <b>nieuw logo</b>, <b>extra toevoegingen</b> of <b>toepassingen</b> op uw
      website, webapp of webshop, beter <b>zienswaardigheid</b> via de
      zoekresultaten <b>(SEO)</b> op bijv. Google, Bing, Yahoo... Noem maar op,
      maak het zo gek als u wilt. <u>Wij fixen het!</u>
    </p>
    <p>
      Ook de <b>grotere projecten</b> die meer tijd vergen, zoals het vernieuwen
      van een bestaande website pakken we met beide handen aan. Alle genoemde
      services & diensten vallen onder een prijs van{' '}
      <b>€ 45,- per uur (excl. BTW). </b>
    </p>{' '}
    <p>
      Mocht u er niet uitkomen welk <b>pakket</b> u het beste schikt... Geen
      probleem! Wij helpen u graag verder. Vraag een <b>terugbelverzoek</b>{' '}
      hieronder aan, <b>bel</b> of <b>mail</b> ons en alles wordt u uitgebreid
      geinformeerd. *
    </p>
    <p>
      <a
        href="https://menefex.nl/Menefex-prijslijst.pdf"
        rel="noopener noreferrer"
        target="_blank"
      >
        <b>Download hier</b>
      </a>{' '}
      een <u> overzicht</u> van onze prijzen in <b>pdf</b>
      -vorm.
    </p>
  </section>
);

export default Notes;
