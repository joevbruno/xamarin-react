import React, { PropTypes } from 'react';

export default class Table extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    handleClick: PropTypes.func
  };
  render() {
    return (
      <div>Table
        <button onClick={this.props.handleClick}>Press ME!</button>
      </div>
    );
  }
}
