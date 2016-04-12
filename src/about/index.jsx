import React from 'react';
import styles from './styles';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}> About</h1>
        <Link to="/">Go To Home</Link>
      </div>
    );
  }
}
