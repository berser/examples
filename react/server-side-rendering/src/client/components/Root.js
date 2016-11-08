import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import Provider from './Provider';
import routes from '../routes';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <Router key={Math.random()} history={history} routes={routes} />
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object,
};

export default Root;

