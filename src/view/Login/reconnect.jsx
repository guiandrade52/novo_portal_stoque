import React, { Component } from 'react';

//Material UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { Typography } from '@material-ui/core';

//Redux
import { connect } from 'react-redux'
import { localStorageKey } from '../../appConfig';
import { cryptoServices } from '../../redux-flow/_services/crypto';
import { bindActionCreators } from 'redux';
import { authActions } from '../../redux-flow/_actions/auth.action';

const styles = {
    root: {
        margin: 20
    }
}



class Reconnect extends Component {

    state = {
        wait: 20
    }

    componentWillMount() {
        if (this.props.expired) {
            const interval = setInterval(() => {
                if (this.state.wait === 1) {
                    //this.props.logout()
                    clearInterval(interval)
                }
                this.setState({ wait: this.state.wait - 1 })
            }, 1000);
        }
    }

    handleSim = () => {
        debugger
        const user = JSON.parse(localStorage.getItem(localStorageKey))
        const username = cryptoServices.decrypt(user.username)
        const password = cryptoServices.decrypt(user.password)
        this.props.login(username, password)
        this.props.sectionExpired()
    }

    handleNao = () => {
        this.props.logout()
    }

    render() {
        const { classes, expired } = this.props
        return (
            <Dialog open={expired}>
                <div className={classes.root}>
                    <DialogTitle >A sessão expirou</DialogTitle>
                    <Typography align='center'>
                        Deseja continuar conectado?
                     </Typography>
                    <Typography variant='h6' align='center'>
                        {this.state.wait}
                    </Typography>
                    <div align="center">
                        <Button size='large' onClick={this.handleSim}>Sim</Button>
                        <Button size='large' onClick={this.handleNao}>Não</Button>
                    </div>
                </div>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({ expired: state.auth.expired })

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Reconnect))
