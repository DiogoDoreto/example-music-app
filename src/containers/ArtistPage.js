import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { updateTitle } from '../routes';
import { fetchArtistIfNeeded } from '../actions/artists';
import { fetchAlbumsIfNeeded } from '../actions/albums';
import { getArtist, getAlbums } from '../reducers';
import Artist from '../components/Artist';
import AlbumsList from '../components/AlbumsList';

class ArtistPage extends React.Component {
  componentDidMount() {
    const { id } = this.props.params;
    this.props.fetchArtistIfNeeded(id);
    this.props.fetchAlbumsIfNeeded(id);
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
      this.props.fetchAlbumsIfNeeded(currentId);
    }
  }

  updatePageTitle() {
    const { artist } = this.props;
    const newTitle = artist ? artist.name : 'Artist Page';

    updateTitle(newTitle);
  }

  render() {
    const { artist, albums } = this.props;

    return (
      <div className="artist-page">
        <Artist artist={artist} />
        <AlbumsList albums={albums} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const artistId = props.params.id;

  return {
    artistId,
    artist: getArtist(state, artistId),
    albums: getAlbums(state, artistId)
  };
};

const actions = {
  fetchArtistIfNeeded,
  fetchAlbumsIfNeeded
};

export default withRouter(connect(mapStateToProps, actions)(ArtistPage));