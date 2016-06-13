import parseResponse from '../utils/parseResponse';
import { getAlbums } from '../reducers';

export const fetchAlbumsIfNeeded = artistId => (dispatch, getState) => {
  const albums = getAlbums(getState(), artistId);
  if (albums && albums.length) {
    return;
  }

  dispatch({ type: 'FETCH_ALBUMS_REQUEST', payload: artistId });

  function onSuccess(data) {
    dispatch({
      type: 'FETCH_ALBUMS_SUCCESS',
      payload: data,
      meta: { artistId }
    });
  }

  function onFailure(err) {
    dispatch({
      type: 'FETCH_ALBUMS_FAILURE',
      error: true,
      payload: err
    });
  }

  fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`)
    .then(parseResponse)
    .then(onSuccess, onFailure);
}