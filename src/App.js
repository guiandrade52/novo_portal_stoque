import React, { Component } from 'react'

//Material  UI
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActions } from './redux-flow/_actions/app.actions';

import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import Routers from './view/Routers'


//Configure Temes
import { themes } from './assets/config';
import { Layout } from './view/Layout';


const hist = createBrowserHistory()

class App extends Component {

  componentWillMount() {
    this.props.changeTitle('Stoque')
  }



  render() {
    return (
      <div>
        <MuiThemeProvider theme={themes.themeProvider}>
          <CssBaseline />
          <Router history={hist}>
            <Layout>
              <Switch>
                {
                  Routers.map((prop, key) => <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />)
                }
                <Route render={() => <h1>Not Fold</h1>} />
              </Switch>
            </Layout>
          </Router>
        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)