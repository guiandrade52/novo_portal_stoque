import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Repositories from '~/pages/Repositories';
import About from '~/pages/About';
import { isAutenticated } from '~/services/auth';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
    isAutenticated() ? (
      <Component {...props} />
    )
    : (
      <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
    )
  )}
  />
);

function Routes() {
  return (
    <Switch>
      <PrivateRouter path="/" exact component={Repositories} />
      <PrivateRouter path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
