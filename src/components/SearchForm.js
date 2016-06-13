import React from 'react';

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { onSearch } = this.props;
    const searchInput = this.refs.search;

    event.preventDefault();
    onSearch(searchInput.value.trim());
  }

  render() {
    const { currentSearch } = this.props;

    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input
          ref="search"
          type="search"
          defaultValue={currentSearch}
          placeholder="Find artist..."
        />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchForm;