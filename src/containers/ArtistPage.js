import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateTitle } from '../routes';
import { fetchArtistIfNeeded } from '../actions/artists';
import { getArtist } from '../reducers';

class ArtistPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchArtistIfNeeded(id);
    this.updatePageTitle();
  }

  componentDidUpdate(prevProps) {
    const currentArtist = this.props.artist;
    const previousArtist = prevProps.artist;
    if (currentArtist !== previousArtist) {
      this.updatePageTitle();
    }

    const currentId = this.props.params.id;
    const previousId = prevProps.params.id;
    if (currentId !== previousId) {
      this.props.fetchArtistIfNeeded(currentId);
    }
  }

  updatePageTitle() {
    const { artist } = this.props;
    const newTitle = artist ? artist.name : 'Artist Page';

    updateTitle(newTitle);
  }

  render() {
    return (
      <div className="artist-page">
        <p>ID: { this.props.artistId }</p>
        <p>Name: { this.props.artist && this.props.artist.name }</p>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const artistId = props.params.id;

  return {
    artistId,
    artist: getArtist(state, artistId)
  };
};

const actions = {
  fetchArtistIfNeeded
};

export default withRouter(connect(mapStateToProps, actions)(ArtistPage));