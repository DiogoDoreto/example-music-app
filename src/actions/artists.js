import parseResponse from '../utils/parseResponse';
import { getArtist, getLastArtistQuery } from '../reducers';

export const searchArtists = name => (dispatch, getState) => {
  const lastQuery = getLastArtistQuery(getState());
  if (lastQuery === name) {
    return;
  }

  dispatch({ type: 'SEARCH_ARTISTS_REQUEST', payload: name });

  function onSuccess(data) {
    dispatch({
      type: 'SEARCH_ARTISTS_SUCCESS',
      payload: data.artists,
      meta: { query: name }
    });
  }

  function onFailure(err) {
    dispatch({
      type: 'SEARCH_ARTISTS_FAILURE',
      error: true,
      payload: err
    });
  }

  // If there's no name, don't even reach the network
  if (!name) {
    return Promise.resolve(onSuccess({ artists: { items: [] } }));
  }

  const query = encodeURIComponent(name);

  fetch(`https://api.spotify.com/v1/search?type=artist&q=${query}`)
    .then(parseResponse)
    .then(onSuccess, onFailure);
};

export const fetchArtistIfNeeded = artistId => (dispatch, getState) => {
  const artist = getArtist(getState(), artistId);
  if (artist) {
    return Promise.resolve(artist);
  }

  dispatch({ type: 'FETCH_ARTIST_REQUEST', payload: artistId });

  function onSuccess(data) {
    dispatch({
      type: 'FETCH_ARTIST_SUCCESS',
      payload: data
    });
  }

  function onFailure(err) {
    dispatch({
      type: 'FETCH_ARTIST_FAILURE',
      error: true,
      payload: err
    });
  }

  fetch(`https://api.spotify.com/v1/artists/${artistId}`)
    .then(parseResponse)
    .then(onSuccess, onFailure);
};
