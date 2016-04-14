import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Dashboard from './modules/dashboard';
import Layout from './containers/layout';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ Dashboard } />
        </Route>
      </Router>
   );
  }
}
