import React from 'react';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { onSearch } = this.props;
    event.preventDefault();
    onSearch(this.refs.search.value.trim());
  }

  render() {
    const { currentSearch, artists } = this.props;

    return (
      <div className="search-page">
        <form className="search-bar" onSubmit={this.onSubmit}>
          <input
            ref="search"
            type="search"
            defaultValue={currentSearch}
            placeholder="Find artist..."
          />
          <button>Search</button>
        </form>

        {artists.map(artist => (
          <div className="artist" key={artist.id}>
            <h2>{artist.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchPage;