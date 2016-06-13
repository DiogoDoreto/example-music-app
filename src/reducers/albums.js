import { combineReducers } from 'redux';

const initialState = {
  items: {},
  isLoading: false
};

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_SUCCESS':
      return Object.assign({}, state, {
        [action.meta.artistId]: action.payload.items
      });
    default:
      return state;
  }
};

const isLoading = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS_REQUEST':
      return true;
    case 'FETCH_ALBUMS_FAILURE':
    case 'FETCH_ALBUMS_SUCCESS':
      return false;
    default:
      return state;
  }
};

const albums = combineReducers({
  items,
  isLoading
});

export default albums;

export const getAlbums = (state, artistId) => state.items[artistId];