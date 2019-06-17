import React from 'react'

//Redux-form
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'

// @material-ui-core/style
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography, Button, CircularProgress } from '@material-ui/core';

//Semantic UI
import { Divider } from 'semantic-ui-react';

//CoreComponents
import { GridContainer, GridItem } from '../../components/Grids';
import { TextField } from '../../components/Fields';
import { bindActionCreators } from 'redux';
import { loginActions } from '../../redux-flow/_actions';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginRight: '35%',
        marginLeft: '35%',
        marginTop: '10%'
    },
    actions: {
        marginTop: 10,
    },
    buttons: {
        margin: 10
    }
});

let CheckPassword = ({ classes, handleSubmit, display, cancellReset, id, codigo, isFetching }) => {
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {!isFetching &&
                    <form onSubmit={handleSubmit}>
                        <GridContainer spacing={16}>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography variant='h6' align='center'>
                                    Nova senha
                                </Typography>
                                <Divider />
                            </GridItem>
                            <Typography variant='subtitle1'>
                                Informe a nova senha
                        </Typography>
                            <GridItem xs={12} sm={12} md={12} >
                                <Typography align='center'>
                                    O código expira em {display}
                                </Typography>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="password1"
                                    component={TextField}
                                    label="Senha"
                                    placeholder='Nova Senha'
                                    fullWidth
                                    type="password"
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} >
                                < Field
                                    name="password2"
                                    component={TextField}
                                    label="Repita a senha"
                                    placeholder='Repita a senha'
                                    fullWidth
                                    type="password"
                                />
                            </GridItem>
                        </GridContainer>
                        <div align='right' className={classes.actions}>
                            <Button style={{ float: 'left', color: 'red' }} className={classes.buttons} onClick={() => cancellReset(id, codigo)}>Cancelar</Button>
                            <Button type='submit' className={classes.buttons} color='primary' variant='outlined' >Enviar</Button>
                        </div>
                    </form>
                }
                {isFetching &&
                    <CircularProgress size={100} />
                }
            </Paper>
        </div>
    )
}

CheckPassword = reduxForm({
    form: 'formCheckPassword',
})(CheckPassword)

const mapStateToProps = state => ({
    ...state.login,
    display: state.cronometro.display
})

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CheckPassword))