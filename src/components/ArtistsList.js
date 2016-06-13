import React from 'react';

const ArtistsList = ({ artists }) => (
  <ul className="artists-list">
    {artists.map(artist => (
      <li className="artist" key={artist.id}>
        <h2>{artist.name}</h2>
      </li>
    ))}
  </ul>
);

export default ArtistsList;