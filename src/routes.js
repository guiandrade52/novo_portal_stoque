import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Custom components
import Dashboard from '~/pages/Dashboard';
import Task from '~/pages/Task';
import ListTasks from '~/pages/ListTasks';
import Admin from '~/pages/Admin';
import About from '~/pages/About';

// Autenticação
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
      <PrivateRouter path="/" exact component={Dashboard} />
      <PrivateRouter path="/Task" exact component={Task} />
      <PrivateRouter path="/listTask" exact component={ListTasks} />
      <PrivateRouter path="/admin" exact component={Admin} />
      <PrivateRouter path="/about" component={About} />
    </Switch>
  );
}

export default Routes;
