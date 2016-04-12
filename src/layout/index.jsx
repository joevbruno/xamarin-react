import React, { PropTypes } from 'react';
import styles from './styles';

export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    const { children } = this.props;
    return (
      <div className={styles.layout}>
        { children }
      </div>
    );
  }
}
