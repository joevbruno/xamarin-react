import React from 'react';
import styles from './styles';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}> Hello World!</h1>
        <Link to="about">Go To About</Link>
      </div>
    );
  }
}
