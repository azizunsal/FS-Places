import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './app/router/AppRouter';

import configureStore from './app/store/configureStore';
import { Provider } from 'react-redux';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
