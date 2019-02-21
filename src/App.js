import React, { Component } from 'react'

//Material  UI
import { CssBaseline } from '@material-ui/core';

//Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { appActions } from './redux-flow/_actions/app.actions';

//CoreComponents
import Header from './view/Header';


class App extends Component {

  componentWillMount() {
    this.props.changeTitle('Stoque')
  }

  render() {
    return (
      <div>
        <CssBaseline />
        <Header />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.app
})

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)