/* eslint-disable no-param-reassign */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import 'isomorphic-fetch';

export default class User extends Component {
  static fetchData({ params }, state) {
    const url = `http://localhost:5000/${params.userId}`;

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        state.users[params.userId] = json;
      });
  }

  render() {
    const { store } = this.context;
    const { params } = this.props;
    const user = store.users[params.userId];

    return (
      <div>
        <Link to="/">Home</Link>

        <p>Name: {user.name}</p>
        <p>Description: {user.description}</p>
        <p>Talk: {user.talk.name}</p>
      </div>
    );
  }
}


User.propTypes = {
  params: PropTypes.object,
};


User.contextTypes = {
  store: PropTypes.object,
};
