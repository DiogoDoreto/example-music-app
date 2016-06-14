import React from 'react';
import Artist from './Artist';

import '../styles/ArtistsList.less';

const ArtistsList = ({ artists }) => (
  <ul className="artists-list">
    {artists.map(artist => (
      <li key={artist.id}>
        <Artist artist={artist} />
      </li>
    ))}
  </ul>
);

export default ArtistsList;