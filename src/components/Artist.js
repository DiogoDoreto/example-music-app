import React from 'react';
import { Link } from 'react-router';

import '../styles/Artist.less';

const Artist = ({ artist }) => {
  if (!artist) {
    return null;
  }

  const thumbnailUrl = artist.images && artist.images.length >= 3
    ? artist.images[2].url
    : '';

  return (
    <div className="artist">
      <img className="artist-thumbnail" src={thumbnailUrl} alt={artist.name} />
      <h2 className="artist-name">
        <Link to={`/artist/${artist.id}`}>
          {artist.name}
        </Link>
      </h2>
      <ul className="artist-genres">
        {artist.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Artist;
