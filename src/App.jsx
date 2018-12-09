/* @flow */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import List from './containers/List';
import Form from './containers/Form';

const App = () => (
  <Router>
    <div>
      <Route path='/' component={List} exact />
      <Route path='/add' component={Form} exact />
      <Route path='/transaction/:transactionId' component={Form} />
    </div>
  </Router>
);

export default App;
