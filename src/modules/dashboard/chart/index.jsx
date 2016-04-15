import React, { PropTypes } from 'react';

export default class Chart extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    sharedData: PropTypes.string
  };
  static defaultProps = {
    title: 'Chart'
  };
  render() {
    return (
      <div>THIS IS MY {this.props.title}
        Value = {this.props.value}
        <br />
        Shared: {this.props.sharedData}
      </div>
      );
  }
}
