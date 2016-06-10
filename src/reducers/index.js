import artists, * as fromArtists from './artists';

const root = artists;

export default root;

export const getArtists = state => fromArtists.getArtists(state);