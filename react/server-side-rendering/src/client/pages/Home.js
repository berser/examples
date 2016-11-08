/* eslint-disable max-len, no-param-reassign */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'isomorphic-fetch';

export default class Home extends Component {
  static fetchData(props, state) {
    const url = 'http://localhost:5000';

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        state.users = json;
      });
  }

  render() {
    const { store } = this.context;
    const list = Object.keys(store.users).map((id) => (
      <Link to={`/users/${id}`}>{store.users[id].name}</Link>
    ));

    return (
      <div>
        <h1>Eventloop Noviembre</h1>
        <h3>miércoles 2 de noviembre de 2016</h3>
        <h5>Wework México <small>Varsovia 36, Juárez, 06600 Mexico City, D.F., México City</small></h5>

        <div>
          <h3>Expositores</h3>
          {list}
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  store: PropTypes.object,
};
