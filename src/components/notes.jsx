import React from 'react';

import useTranslation from '../hooks/use-translation';

import * as notesStyles from '../styles/modules/notes.module.scss';

const Notes = () => {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) return null;

  return (
    <section className={notesStyles.notes}>
      <h4>{t('priceNotesTitle')}</h4>
      <p dangerouslySetInnerHTML={{ __html: t('priceNotesText') }} />
    </section>
  );
};

export default Notes;
