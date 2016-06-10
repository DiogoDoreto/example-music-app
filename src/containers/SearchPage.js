import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage';
import { searchArtists } from '../actions/artists';
import { getArtists } from '../reducers';

const mapStateToProps = state => ({
  artists: getArtists(state)
});

const actions = {
  onSearch: searchArtists
};

export default connect(mapStateToProps, actions)(SearchPage);