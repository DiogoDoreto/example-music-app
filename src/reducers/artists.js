const initialState = {
  isLoading: false,
  items: []
};

function artists(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_ARTISTS_REQUEST':
      return Object.assign({}, state, {
        isLoading: true
      });
    case 'SEARCH_ARTISTS_FAILURE':
      return Object.assign({}, state, {
        isLoading: false
      });
    case 'SEARCH_ARTISTS_SUCCESS':
      return Object.assign({}, state, {
        isLoading: false,
        items: action.payload.items
      });
    default:
      return state;
  }
}

export default artists;

export const getArtists = state => state.items;