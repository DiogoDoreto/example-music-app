import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './components/Main';
import SearchPage from './containers/SearchPage';

const store = configureStore();

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <Main>
      <SearchPage />
    </Main>
  </Provider>,
  document.getElementById('app')
);

