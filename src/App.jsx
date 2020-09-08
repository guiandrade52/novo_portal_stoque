import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActions } from './redux-flow/_actions/app.actions';

import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { SidebarRouter } from './view/_Routers'


import { Layout } from './view/_Layout';
import { usuarioActions } from './redux-flow/_actions';
import { Typography } from '@material-ui/core';


const hist = createBrowserHistory()

class App extends Component {

  componentWillMount() {
    this.props.fetchUsuario()
  }

  switchRoutes = () => {
    if (this.props.usuario.dados.perfil === 'Gestor')
      SidebarRouter[2].enable = true
    return (
      <Switch>
        {SidebarRouter.map((route, key) => route.enable === true && <Route exact={route.exact} path={route.path} component={route.component} key={key} />)}
        <Route render={() => <Typography variant='h6'>Página não encontrada :(</Typography>} />
      </Switch>
    )
  }


  render() {

    return (
      <div>
        <Router history={hist}>
          <Layout usuario={this.props.usuario}>
            {this.switchRoutes()}
          </Layout>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.app,
  usuario: state.usuario
})

const mapDispatchToProps = dispatch => bindActionCreators({ ...appActions, ...usuarioActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)