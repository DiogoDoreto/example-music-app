import React from 'react';

import '../styles/AlbumsList.less';

function getThumbUrl(album) {
  return album.images && album.images.length > 0
    ? album.images[0].url
    : '';
}

const AlbumsList = ({ albums = [] }) => (
  <ul className="albums-list">
    {albums.map(album => (
      <li key={album.id}>
        <img className="album-thumbnail" src={getThumbUrl(album)} alt={album.name} />
        <h3 className="album-title">{album.name}</h3>
      </li>
    ))}
  </ul>
);

export default AlbumsList;