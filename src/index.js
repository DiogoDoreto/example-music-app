import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import SearchPage from './components/SearchPage';

// Render the main component into the dom
ReactDOM.render(
  <Main>
    <SearchPage />
  </Main>,
  document.getElementById('app')
);

