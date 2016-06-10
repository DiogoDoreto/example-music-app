import React from 'react';

const onSubmit = action => event => {
  event.preventDefault();
  action();
};

const SearchPage = ({ currentSearch, onSearch }) => (
  <div className="search-page">
    <form className="search-bar" onSubmit={onSubmit(onSearch)}>
      <input
        type="search"
        defaultValue={currentSearch}
        placeholder="Find artist..."
      />
      <button>Search</button>
    </form>
  </div>
);

export default SearchPage;