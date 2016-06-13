import React from 'react';

function getThumbUrl(album) {
  return album.images && album.images.length > 0
    ? album.images[0].url
    : '';
}

const AlbumsList = ({ albums = [] }) => (
  <ul className="albums-list">
    {albums.map(album => (
      <li key={album.id}>
        <img src={getThumbUrl(album)} alt={album.name} />
        <h3>{album.name}</h3>
      </li>
    ))}
  </ul>
);

export default AlbumsList;