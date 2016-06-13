import { combineReducers } from 'redux';

const initialState = {
  items: {},
  isLoading: false,
  lastSearchResult: [],
  lastQuery: ''
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'SEARCH_ARTISTS_SUCCESS':
      const newArtists = {};
      action.payload.items.forEach(artist => newArtists[artist.id] = artist);

      return Object.assign({}, state, newArtists);
    case 'FETCH_ARTIST_SUCCESS':
      return Object.assign({}, state, {
        [action.payload.id]: action.payload
      });
    default:
      return state;
  }
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'SEARCH_ARTISTS_REQUEST':
    case 'FETCH_ARTIST_REQUEST':
      return true;
    case 'SEARCH_ARTISTS_FAILURE':
    case 'SEARCH_ARTISTS_SUCCESS':
    case 'FETCH_ARTIST_FAILURE':
    case 'FETCH_ARTIST_SUCCESS':
      return false;
    default:
      return state;
  }
};

const lastSearchResult = (state = initialState.lastSearchResult, action) => {
  switch (action.type) {
    case 'SEARCH_ARTISTS_SUCCESS':
      return action.payload.items.map(artist => artist.id);
    default:
      return state;
  }
}

const lastQuery = (state = initialState.lastQuery, action) => {
  switch (action.type) {
    case 'SEARCH_ARTISTS_SUCCESS':
      return action.meta.query;
    default:
      return state;
  }
};

const artists = combineReducers({
  items,
  isLoading,
  lastSearchResult,
  lastQuery
});

export default artists;

export const getArtists = state => state.lastSearchResult.map(id => {
  return state.items[id];
});

export const getArtist = (state, id) => state.items[id];

export const getLastArtistQuery = state => state.lastQuery;