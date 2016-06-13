import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Main from './components/Main';
import SearchPage from './containers/SearchPage';

const updateTitle = prefix => document.title = `${prefix} | Music App`;

const onEnterSearch = nextState => {
  const { query } = nextState.params;
  const title = query ? `Search: ${query}` : 'Search';
  updateTitle(title);
};

export default (
  <Route path="/" component={Main}>
    <IndexRedirect to="/search" />
    <Route
      path="search(/:query)"
      component={SearchPage}
      onEnter={onEnterSearch}
    />
  </Route>
);