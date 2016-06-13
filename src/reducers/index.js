import { combineReducers } from 'redux';
import artists, * as fromArtists from './artists';
import albums, * as fromAlbums from './albums';

const root = combineReducers({
  artists,
  albums
});

export default root;

export const getArtists = state => fromArtists.getArtists(state.artists);

export const getArtist = (state, id) => fromArtists.getArtist(state.artists, id);

export const getLastArtistQuery = state => fromArtists.getLastArtistQuery(state.artists);

export const getAlbums = (state, artistId) => fromAlbums.getAlbums(state.albums, artistId);