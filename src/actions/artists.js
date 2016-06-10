function parseResponse(res) {
  if (res.ok) {
    return res.json();
  }

  const err = new Error(res.statusText);
  err.response = res;
  throw err;
}

export const searchArtists = name => dispatch => {
  dispatch({ type: 'SEARCH_ARTISTS_REQUEST', payload: name });

  function onSuccess(data) {
    dispatch({
      type: 'SEARCH_ARTISTS_SUCCESS',
      payload: data.artists
    });
  }

  function onFailure(err) {
    dispatch({
      type: 'SEARCH_ARTISTS_FAILURE',
      error: true,
      payload: err
    });
  }

  const query = encodeURIComponent(name);

  fetch(`https://api.spotify.com/v1/search?type=artist&q=${query}`)
    .then(parseResponse)
    .then(onSuccess, onFailure);
};