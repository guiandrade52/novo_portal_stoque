import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '~/pages/Dashboard';
import About from '~/pages/About';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
