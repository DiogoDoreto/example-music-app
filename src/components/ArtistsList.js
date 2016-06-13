import React from 'react';
import { Link } from 'react-router';

const ArtistsList = ({ artists }) => (
  <ul className="artists-list">
    {artists.map(artist => (
      <li className="artist" key={artist.id}>
        <h2>
          <Link to={`/artist/${artist.id}`}>{artist.name}</Link>
        </h2>
      </li>
    ))}
  </ul>
);

export default ArtistsList;