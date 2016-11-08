/* eslint-disable global-require, no-underscore-dangle */
import 'babel-polyfill';
import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import Root from './components/Root';

const rootEl = document.getElementById('root');
const store = { ...window.__APP_INITIAL_STATE__ };

render(
  <AppContainer>
    <Root history={browserHistory} store={store} />
  </AppContainer>, rootEl
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NextRoot history={browserHistory} store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
