import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';
import About from './about';
import Layout from './layout';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ Home } />
          <Route path="about" component={ About } />
        </Route>
      </Router>
   );
  }
}
