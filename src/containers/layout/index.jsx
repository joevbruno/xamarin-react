import React from 'react';

export default class Layout extends React.Component {
  static propTypes = {
    children: React.PropTypes.any
  };
  static contextTypes = {
    router: React.PropTypes.any
  };
  constructor(props, context) { // eslint-disable-line no-useless-constructor
    super(props, context);
  }
  render() {
    const { children } = this.props; // eslint-disable-line no-use-before-define

    return (
      <div>
        { children }
      </div>
    );
  }
}
