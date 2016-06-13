import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchForm from '../components/SearchForm';
import ArtistsList from '../components/ArtistsList';
import { searchArtists } from '../actions/artists';
import { getArtists } from '../reducers';

class SearchPage extends React.Component {
  componentDidMount() {
    const { currentSearch, searchArtists } = this.props;

    searchArtists(currentSearch);
  }

  componentDidUpdate(prevProps) {
    const { currentSearch, searchArtists } = this.props;
    const previousSearch = prevProps.currentSearch;

    if (previousSearch !== currentSearch) {
      searchArtists(currentSearch);
    }
  }

  render() {
    const { artists, currentSearch, onSearch } = this.props;

    return (
      <div className="search-page">
        <SearchForm currentSearch={currentSearch} onSearch={onSearch} />
        <ArtistsList artists={artists} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  artists: getArtists(state),
  currentSearch: props.params.query,
  onSearch: artist => {
    const query = encodeURI(artist);
    props.router.push(`/search/${query}`);
  }
});

const actions = {
  searchArtists
};

export default withRouter(connect(mapStateToProps, actions)(SearchPage));