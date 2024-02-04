import React from 'react';

import * as spotifyStyles from '../styles/modules/spotify.module.scss';

const Spotify = () => (
  <section className={spotifyStyles.spotify}>
    <p>
      <b>WE ❤︎ MUSIC !</b> Daarom delen we ons <u>work, chill & vibe</u> -
      playlist. Geniet ervan en blijf ons volgen voor updates.
    </p>

    <iframe
      title="Menefex' #STAYVIBIN Playlist"
      src="https://open.spotify.com/embed/playlist/08UGoWTjvpuooABCWyPx0m?utm_source=generator&theme=0"
      width="100%"
      height="100%"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </section>
);

export default Spotify;
