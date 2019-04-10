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
        time: 20,
        await: false
    }

    timeAwait = () => {
        if (this.props.expired && !this.state.await) {
            const interval = setInterval(() => {
                if (this.state.time === 1) {
                    this.props.logout()
                    clearInterval(interval)
                    this.setState({ time: 20, await: false })
                }
                this.setState({ time: this.state.time - 1, await: true })
            }, 1000);
        }
    }

    handleSim = async () => {
        const user = JSON.parse(localStorage.getItem(localStorageKey))
        await this.props.login(cryptoServices.decrypt(user.username), cryptoServices.decrypt(user.password))
        await this.props.sectionExpired()
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }

    handleNao = () => {
        this.props.logout()
    }

    render() {
        const { classes, expired } = this.props
        expired && this.timeAwait()
        return (
            <Dialog open={expired}>
                <div className={classes.root}>
                    <DialogTitle >A sessão expirou</DialogTitle>
                    <Typography align='center'>
                        Deseja continuar conectado?
                     </Typography>
                    <Typography variant='h6' align='center'>
                        {this.state.time}
                    </Typography>
                    <div align="center">
                        <Button size='large' onClick={this.handleSim}>Sim</Button>
                        <Button size='large' onClick={this.handleNao}>Não</Button>
                    </div>
                    <Typography align='center'>
                        Se optar por continuar a página será recarregada.
                     </Typography>
                </div>
            </Dialog>
        )
    }
}

const mapStateToProps = state => ({ expired: state.auth.expired })

const mapDispatchToProps = dispatch => bindActionCreators(authActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Reconnect))
