import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Custom components
import Dashboard from '~/pages/Dashboard';
import Task from '~/pages/Task';
import ListTasks from '~/pages/ListTasks';
import Config from '~/pages/Configs';
import About from '~/pages/About';
import Login from '~/pages/Login';
import NotFound from '~/pages/NotFound';

// Autenticação
import { isAutenticated } from '~/services/auth';

interface OwnProps {
  Component: any
  path: string
  exact: boolean
}

// Validate routes private
const PrivateRouter = (props:OwnProps) => {
  const { Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={render => (
          isAutenticated().auth
          ? <Component {...render} />
          : <Redirect to={{ pathname: '/Login', state: { from: render.location } }} />
     )}
    />
  );
};

// Validate routes private and administrators
const PrivateRouterAdmin = ({ Component, ...rest }:OwnProps) => (
  <Route
    {...rest}
    render={props => (
        (isAutenticated().adm && isAutenticated().auth)
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
  )}
  />
);

function Routes() {
  return (
    <Switch>
      {/* Private routes */}
      <PrivateRouter path="/" exact Component={Dashboard} />
      <PrivateRouter path="/Task" exact Component={Task} />
      <PrivateRouter path="/listTask" exact Component={ListTasks} />
      <PrivateRouter path="/about" exact Component={About} />

      {/* Private routes and administrators */}
      <PrivateRouterAdmin path="/configs" exact Component={Config} />

      {/* Public routes */}
      <Route path="/Login" exact component={Login} />
      <Route component={NotFound} exact path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default Routes;
