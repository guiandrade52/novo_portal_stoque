import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActions } from './redux-flow/_actions/app.actions';

import { createBrowserHistory } from 'history'
import { Router, Switch, Route } from 'react-router-dom'
import { SidebarRouter } from './view/_Routers'


import { Layout } from './view/_Layout';


const hist = createBrowserHistory()

class App extends Component {

  componentWillMount() {
    this.props.changeTitle('Stoque')
  }



  render() {
    return (
      <div>
        <Router history={hist}>
          <Layout>
            <Switch>
              {
                SidebarRouter.map((prop, key) => {
                  return <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />
                })
              }
              <Route render={() => <h1>Not Fold</h1>} />
            </Switch>
          </Layout>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)