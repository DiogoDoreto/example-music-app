import artists, * as fromArtists from './artists';

const root = artists;

export default root;

export const getArtists = state => fromArtists.getArtists(state);

export const getArtist = (state, id) => fromArtists.getArtist(state, id);

export const getLastArtistQuery = state => fromArtists.getLastArtistQuery(state);