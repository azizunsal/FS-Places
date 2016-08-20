import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);
