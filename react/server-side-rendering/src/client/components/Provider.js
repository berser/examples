import { Component, Children, PropTypes } from 'react';

export default class Provider extends Component {
  constructor(props, context) {
    super(props, context);

    this.store = props.store;
  }

  getChildContext() {
    return {
      store: this.store,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

Provider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

Provider.childContextTypes = {
  store: PropTypes.object.isRequired,
};
