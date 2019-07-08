import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repositories from '~/pages/Repositories';
import About from '~/pages/About';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Repositories} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
